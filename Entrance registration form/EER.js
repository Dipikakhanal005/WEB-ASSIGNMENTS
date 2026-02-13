document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault(); // Prevent form submission

    var name = document.getElementById("fullname").value.trim();
    var dob = document.getElementById("dob").value;
    var age = document.getElementById("age").value;
    var phone = document.getElementById("phone").value.trim();
    var email = document.getElementById("email").value.trim();
    var gender = document.querySelector('input[name="gender"]:checked');
    var stream = document.getElementById("stream").value;
    var agree = document.getElementById("agree").checked;

    // Name validation
    var namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(name)) {
        alert("Name must contain only letters.");
        return;
    }

    if (dob === "") {
        alert("Date of Birth is required.");
        return;
    }

    // Age validation
    if (age < 16 || age > 30) {
        alert("Age must be between 16 and 30.");
        return;
    }

    // Phone validation
    var phonePattern = /^(98|97)\d{8}$/;
    if (!phonePattern.test(phone)) {
        alert("Phone must be 10 digits and start with 98 or 97.");
        return;
    }

    // Email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Enter valid email address.");
        return;
    }

    // Gender validation
    if (!gender) {
        alert("Please select gender.");
        return;
    }

    // Stream validation
    if (stream === "") {
        alert("Please select exam stream.");
        return;
    }
    
    if (!agree) {
        alert("You must confirm the details.");
        return;
    }

    alert("Registration Successful!");

    setTimeout(function() {
        location.reload();
    }, 5000);

});
