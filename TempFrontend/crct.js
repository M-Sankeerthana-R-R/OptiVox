
async function sendToNgrok() {
    console.log("Inside ngrok");
  const inputText = document.getElementById("typedText").textContent;

  try {
    const response = await fetch("http://localhost:8020/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: inputText })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    document.getElementById("correctedText").textContent =
    //   `${data.cleaned_input}`;
      `Original: ${data.original_input}\nCorrected: ${data.cleaned_input}`;
  } catch (err) {
    console.error("Request failed:", err);
    document.getElementById("correctedText").textContent = "Error contacting server.";
  }
}
