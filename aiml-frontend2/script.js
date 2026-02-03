function predict() {

    const name = document.getElementById("name").value.trim();
    const mark1 = document.getElementById("mark1").value;
    const mark2 = document.getElementById("mark2").value;

    const status = document.getElementById("status");
    const resultBox = document.getElementById("resultBox");
    const output = document.getElementById("output");

    // Validation
    if (name === "" || mark1 === "" || mark2 === "") {
        alert("Please fill all fields");
        return;
    }

    status.innerText = "Analyzing student performance...";
    resultBox.style.display = "none";

    setTimeout(() => {
        const sum = parseInt(mark1) + parseInt(mark2);
        const result = (sum >= 70) ? "PASS " : "FAIL ";

        output.innerHTML = `
            <b>Name:</b> ${name}<br>
            <b>Subject 1:</b> ${mark1}<br>
            <b>Subject 2:</b> ${mark2}<br>
            <b>Total Marks:</b> ${sum}<br>
            <b>Prediction:</b> ${result}
        `;

        resultBox.style.display = "block";
        status.innerText = "";
    }, 1200);
}
