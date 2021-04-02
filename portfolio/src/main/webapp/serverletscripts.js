async function showHardcodedString() {
  const responseFromServer = await fetch('/hardcodedtext');
  const textFromResponse = await responseFromServer.text();

  const dateContainer = document.getElementById('forServlet');
  dateContainer.innerHTML = textFromResponse;
}

async function getListOfQuotes(){
  const responseFromServer = await fetch('/quotesServlet');

  const quotesList = await responseFromServer.json();
  //below ones won't represent in json, due to extremely special characters
  quotesList.push("  ⠀⠰⡿⠿⠛⠛⠻⠿⣷  \n⠀⠀⠀⠀⠀⠀⣀⣄⡀⠀⠀⠀⠀⢀⣀⣀⣤⣄⣀⡀  \n⠀⠀⠀⠀⠀⢸⣿⣿⣷⠀⠀⠀⠀⠛⠛⣿⣿⣿⡛⠿⠷  \n⠀⠀⠀⠀⠀⠘⠿⠿⠋⠀⠀⠀⠀⠀⠀⣿⣿⣿⠇  \n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠁  \n\n⠀⠀⠀⠀⣿⣷⣄⠀⢶⣶⣷⣶⣶⣤⣀  \n⠀⠀⠀⠀⣿⣿⣿⠀⠀⠀⠀⠀⠈⠙⠻⠗  \n⠀⠀⠀⣰⣿⣿⣿⠀⠀⠀⠀⢀⣀⣠⣤⣴⣶⡄  \n⠀⣠⣾⣿⣿⣿⣥⣶⣶⣿⣿⣿⣿⣿⠿⠿⠛⠃  \n⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄  \n⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡁  \n⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁  \n⠀⠀⠛⢿⣿⣿⣿⣿⣿⣿⡿⠟  \n⠀⠀⠀⠀⠀⠉⠉⠉  .");
  quotesList.push("Nai hiruvalyë Valimar. Ihírienyes. Nai elyë hiruva.");
  
  const quote = quotesList[Math.floor(Math.random() * quotesList.length)];

  
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = quote;
}

async function getTableOfMusic(){
  const responseFromServer = await fetch('/buildtable');

  const songList = await responseFromServer.json();
  
   var table = "<table>";
   var n=0;
   while(typeof songList[n] != 'undefined') { 
    table=table+"<entry>"+songList[n]+"</entry>" + "<entry><a href=\"https://www.youtube.com/results?search_query=" + songList[n].split(' ').join('_') + "\">Link to song</a></entry></br>"; 
    } 
  
  table = table + "</table>";
  
  const songsContainer = document.getElementById('tabl');
  songsContainer.innerHTML = table;
}

async function thanksAlert(){
 alert("Thank you for your message!")
}