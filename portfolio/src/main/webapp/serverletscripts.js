async function showHardcodedString() {
  const responseFromServer = await fetch('/hardcodedtext');
  const textFromResponse = await responseFromServer.text();

  const dateContainer = document.getElementById('forServlet');
  dateContainer.innerHTML = textFromResponse;
}
