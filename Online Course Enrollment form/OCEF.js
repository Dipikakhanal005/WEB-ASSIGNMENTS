// Show / Hide Experience Details
document.getElementById("expYes").addEventListener("change", function() {
    document.getElementById("experienceDetails").style.display = "block";
});

document.getElementById("expNo").addEventListener("change", function() {
    document.getElementById("experienceDetails").style.display = "none";
});

// Form Validation
document.getElementById("courseForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("Dipika Khanal").value.trim();
    let email = document.getElementById("dipikakhanal626@gmail.com").value.trim();
    let course = document.getElementById("course").value;
    let mode = document.querySelector('input[name="mode"]:checked');
    let experience = document.querySelector('input[name="experience"]:checked');
    let details = document.getElementById("details").value.trim();

    // Name validation
    if (name === "") {
        alert("Name is required.");
        return;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
        alert("Email is required.");
        return;
    }
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Course validation
    if (course === "") {
        alert("Please select a course.");
        return;
    }

    // Mode validation
    if (!mode) {
        alert("Please select mode of study.");
        return;
    }

    // Experience validation
    if (!experience) {
        alert("Please select previous experience option.");
        return;
    }

    if (experience.value === "Yes" && details === "") {
        alert("Please provide experience details.");
        return;
    }

    alert("Enrollment Successful!");
});
