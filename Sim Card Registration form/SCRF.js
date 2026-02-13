document.getElementById("simForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let fullname = document.getElementById("fullname").value.trim();
    let citizenship = document.getElementById("citizenship").value.trim();
    let dob = document.getElementById("dob").value;
    let nationality = document.getElementById("nationality").value;
    let terms = document.getElementById("terms").checked;
    let simType = document.querySelector('input[name="simType"]:checked');
    let messageBox = document.getElementById("message");

    messageBox.innerHTML = "";

    //  Name validation (only letters and spaces)
    let namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(fullname)) {
        alert("Name must contain only letters.");
        return;
    }

    //  Citizenship validation (minimum 10 characters)
    if (citizenship.length < 10) {
        alert("Citizenship number must be at least 10 characters.");
        return;
    }

    //  Age validation (18+)
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

    if (age < 18) {
        alert("You must be at least 18 years old.");
        return;
    }

    //  SIM type validation
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

});
