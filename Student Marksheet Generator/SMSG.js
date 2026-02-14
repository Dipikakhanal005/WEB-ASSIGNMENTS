document.getElementById("marksForm").addEventListener("submit", function(event) {

    event.preventDefault(); 

    let name = document.getElementById("Dipika Khanal").value.trim();
    let roll = document.getElementById("roll").value.trim();
    let english = document.getElementById("english").value;
    let math = document.getElementById("math").value;
    let science = document.getElementById("science").value;

   
    if (name === "" || roll === "" || english === "" || math === "" || science === "") {
        alert("All fields are required!");
        return;
    }

    english = Number(english);
    math = Number(math);
    science = Number(science);

    // Validation: Marks range
    if (english < 0 || english > 100 ||
        math < 0 || math > 100 ||
        science < 0 || science > 100) {
        alert("Marks must be between 0 and 100.");
        return;
    }

    // Calculations
    let total = english + math + science;
    let percentage = total / 3;
    let resultStatus = "";
    let grade = "";

    // Pass/Fail condition
    if (english >= 40 && math >= 40 && science >= 40) {
        resultStatus = "Pass";
    } else {
        resultStatus = "Fail";
    }

    // Grade system
    if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 60) {
        grade = "B";
    } else if (percentage >= 40) {
        grade = "C";
    } else {
        grade = "Fail";
    }

    // Display Result
    document.getElementById("result").innerHTML = `
        <strong>Name:</strong> ${name} <br>
        <strong>Roll Number:</strong> ${roll} <br>
        <strong>Total Marks:</strong> ${total} / 300 <br>
        <strong>Percentage:</strong> ${percentage.toFixed(2)}% <br>
        <strong>Result:</strong> ${resultStatus} <br>
        <strong>Grade:</strong> ${grade}
    `;
});
