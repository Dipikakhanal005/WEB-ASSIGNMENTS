document.addEventListener("DOMContentLoaded", function() {

    // enforce DOB selection to 16+ years via date input max attribute
    const dobInput = document.getElementById('dob');
    if (dobInput) {
        const now = new Date();
        const maxYear = now.getFullYear() - 16;
        const maxMonth = String(now.getMonth() + 1).padStart(2, '0');
        const maxDay = String(now.getDate()).padStart(2, '0');
        dobInput.max = `${maxYear}-${maxMonth}-${maxDay}`;
    }

    document.getElementById("simForm").addEventListener("submit", function(event) {

        event.preventDefault();

        const fullnameEl = document.getElementById("fullname");
        const citizenshipEl = document.getElementById("citizenship");
        const dobEl = document.getElementById("dob");

        if (!fullnameEl || !citizenshipEl || !dobEl) {
            alert('Form elements are missing or script did not load correctly.');
            return;
        }

        let fullname = fullnameEl.value.trim();
        let citizenship = citizenshipEl.value.trim();
        let dob = dobEl.value;
        let nationality = document.getElementById("nationality").value;
        let terms = document.getElementById("terms").checked;
        let simType = document.querySelector('input[name="simType"]:checked');
        let messageBox = document.getElementById("message");

        messageBox.innerHTML = "";

        let namePattern = /^[A-Za-z\s]+$/;
        if (!namePattern.test(fullname)) {
            alert("Name must contain only letters.");
            return;
        }

        let citizenshipPattern = /^[0-9]{10}$/;
        if (!citizenshipPattern.test(citizenship)) {
            alert("Citizenship number must be exactly 10 numeric characters.");
            return;
        }

        if (dob === "") {
            alert("Please select Date of Birth.");
            return;
        }

        let birthDate = new Date(dob);
        let today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        let monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        if (age < 16) {
            alert("You must be at least 16 years old.");
            return;
        }

        if (!simType) {
            alert("Please select a SIM type.");
            return;
        }

        if (!terms) {
            alert("You must accept the Terms & Conditions.");
            return;
        }

        messageBox.innerHTML = `
            <strong>Registration Successful!</strong><br>
            Name: ${fullname}<br>
            SIM Type: ${simType.value}<br>
            Nationality: ${nationality}
        `;

        //show alert with registration details
        alert(`Registration Successful!\nName: ${fullname}\nSIM Type: ${simType.value}\nNationality: ${nationality}`);      

        setTimeout(() => {
            document.getElementById("simForm").reset();
        }, 3000);

    });

});
