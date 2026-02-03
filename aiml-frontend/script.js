function analyze() {
    const file = document.getElementById("fileInput").files[0];
    const status = document.getElementById("status");

    if (!file) {
        alert("Please upload a file");
        return;
    }

    status.innerText = "Model is analyzing data...";

    // Dummy AI response (replace with backend API)
    setTimeout(() => {
        document.getElementById("resultBox").style.display = "block";
        document.getElementById("prediction").innerHTML =
            "<b>Prediction:</b> Positive";
        document.getElementById("confidence").innerHTML =
            "<b>Confidence:</b> 91%";

        status.innerText = "";
    }, 1500);
}

