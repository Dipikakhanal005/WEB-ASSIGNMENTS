document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("appointmentForm");
    const dateInput = document.getElementById("date");

    // Prevent selecting past dates by setting min to today
    if (dateInput) {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        dateInput.min = `${yyyy}-${mm}-${dd}`;
    }

    if (!form) return;

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nameEl = document.getElementById("DipikaKhanal");
        const ageEl = document.getElementById("age");
        const phoneEl = document.getElementById("phone");
        const deptEl = document.getElementById("department");
        const dateEl = document.getElementById("date");
        const timeEl = document.getElementById("time");

        if (!nameEl || !ageEl || !phoneEl || !deptEl || !dateEl || !timeEl) {
            alert('Form elements missing or script loaded before DOM.');
            return;
        }

        let name = nameEl.value.trim();
        let age = ageEl.value;
        let phone = phoneEl.value.trim();
        let department = deptEl.value;
        let date = dateEl.value;
        let time = timeEl.value;

        // Name validation (letters only)
        const namePattern = /^[A-Za-z\s]+$/;
        if (name === "") {
            alert("Patient name is required.");
            return;
        }
        if (!namePattern.test(name)) {
            alert("Name must contain only letters.");
            return;
        }

        // Age validation
        if (age === "" || Number(age) <= 0) {
            alert("Age must be greater than 0.");
            return;
        }

        // Phone validation (10 digits, start with 98 or 97)
        const phonePattern = /^(98|97)\d{8}$/;
        if (!phonePattern.test(phone)) {
            alert("Phone number must be 10 digits and start with 98 or 97.");
            return;
        }

        // Department validation
        if (department === "") {
            alert("Please select a department.");
            return;
        }

        // Date validation (cannot be past)
        if (date === "") {
            alert("Please select appointment date.");
            return;
        }

        const selectedDate = new Date(date);
        const todayCmp = new Date();
        todayCmp.setHours(0,0,0,0);

        if (selectedDate < todayCmp) {
            alert("Appointment date cannot be in the past.");
            return;
        }

        // Time validation
        if (time === "") {
            alert("Please select a time slot.");
            return;
        }

        // Success message
        alert("Appointment successfully booked for " + name + "!");

        setTimeout(function() {
            location.reload();
        }, 2000);
    });
});
