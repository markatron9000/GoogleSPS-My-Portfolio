// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var projectBoxCounter = 0;
function nextProj() {
  var heady = document.getElementById("headerProj");
  var bodee = document.getElementById("bodyProj");
  var dude = document.getElementById("comeOn");
  projectBoxCounter += 1;
  if (projectBoxCounter > 3) {
    projectBoxCounter = 0;
  } 

  if(projectBoxCounter == 1){
      heady.innerHTML = "Super Smash Bros Ultimate Optimizer";
      dude.innerHTML = "Languages used: Java, XML";
      bodee.innerHTML = 'For my second hackathon, I worked solo, and created an android app that, when told what character your opponent will be playing, tells you the best and worst matchups to counter it! Never pick the wrong character again! It was a little unpolished, but for only having 24 hours, I was very proud of it.  Due to the time constraint, I was unable to type all of the matchup lists into the respective character pages. I did get a decent amount of them finished though. Primarily made with Java and XML in Android Studio. Check out the repository <a href="https://github.com/markatron9000/SuperSmashBrosUltimateMatchupOptimizer">here</a> or watch a video of it <a href="https://www.youtube.com/watch?v=hdPSS6P1sLc">here</a></p>' 
      ;
      
    }
  else if(projectBoxCounter == 0){
      heady.innerHTML = "The Secret Identity Machine";
      dude.innerHTML = "Languages used: Python (with Flask library), HTML, CSS";
      bodee.innerHTML = 'My team and I created this project for our very first hackathon! It was a website which gave you the information for as many spoofed profiles as you wished to create. It gave fake addresses, fake images of people, phone numbers, fake names, and even gave each profile an email address that would automatcially recieve the "confirm profile" email - no need to set up an email for each account! It followed on the theme for the hackathon, "spy", as spies need to use fake identies all the time! Made with Python (with Flask library), html, and css. The website is not deployed anymore, but check out the repository <a href="https://github.com/robmadriaga/Extra_Secret">here</a> or watch a video of it <a href="https://www.youtube.com/watch?v=ttl-DLS5YmQ">here</a>'
      ;
      
    }
  else if(projectBoxCounter == 2){
      heady.innerHTML = "Anime Openings & Endings Downloader";
      dude.innerHTML = "Languages used: Python";
      bodee.innerHTML = 'This one is still a work in progress, but essentially, it is a program which takes in the user\'s MyAnimeList username, scrapes their list of completed anime from their online page, keeps only those above a specified star limit, searches for a youtube video of the openings and endigns of that anime, and then returns to the user a zip file containing all the videos. I have gotten all the parts except navigating through youtube with python - it can be a little tricky! Watch for new updates. Made entirely with Python. Check out the repository <a href="https://github.com/markatron9000/AnimeOpsEnds">here</a>' 
      ;
      
    }
  else if(projectBoxCounter == 3){
      heady.innerHTML = "Upcoming project: AI4All Portfolio";
      dude.innerHTML = "Languages used: Python (with Scikit-learn, Pandas, Numpy), ???";
      bodee.innerHTML = 'This semester, I am taking part in the AI4All program in addition to Google SPS and my regular classes. I will be desiging something that uses AI, but I have not quite gotten there yet! But in a few weeks, I will post the repository here.';
      
    }
}

function prevProj(){
    projectBoxCounter-=2;
    if(projectBoxCounter== -2){
        projectBoxCounter=2;
    }
    nextProj();
}

/*
function addRandomQuote() {
  const greetings =
      ['This world isn\'t easy -  \nIt\'s hard on your own -  \nWe\'re richer united,  \nand poorer alone.\nIt\'s fine to ignore it -  \nFor better or ill -  \nTo scorn it before it  \ncollapses your will.\nBut if you can *fight* it -  \nOr choose to be *strong* -   \nPerhaps you can right it, \nrepairing a wrong.\nIt\'s plainly apparent -  \nIt\'s simple to see -  \nTogether,  \nwe\'ll weather\n whatever will be.','Victory belongs to the most persevering.','Frodo : I can\'t do this, Sam. \n\n Sam : I know. It\'s all wrong\nBy rights we shouldn\'t even be here.\nBut we are.\nIt\'s like in the great stories Mr. Frodo.\nThe ones that really mattered.\nFull of darkness and danger they were,\nand sometimes you didn\'t want to know the end.\nBecause how could the end be happy.\nHow could the world go back to the way it was when so much bad happened.\nBut in the end, it\'s only a passing thing, this shadow.\nEven darkness must pass.\nA new day will come.\nAnd when the sun shines it will shine out the clearer.\nThose were the stories that stayed with you.\nThat meant something.\nEven if you were too small to understand why.\nBut I think, Mr. Frodo, I do understand.\nI know now.\nFolk in those stories had lots of chances of turning back only they didn\’t.\nBecause they were holding on to something.\n\nFrodo : What are we holding on to, Sam?\n\nSam : That there\’s some good in this world, Mr. Frodo. And it\’s worth fighting for.','  ⠀⠰⡿⠿⠛⠛⠻⠿⣷  \n⠀⠀⠀⠀⠀⠀⣀⣄⡀⠀⠀⠀⠀⢀⣀⣀⣤⣄⣀⡀  \n⠀⠀⠀⠀⠀⢸⣿⣿⣷⠀⠀⠀⠀⠛⠛⣿⣿⣿⡛⠿⠷  \n⠀⠀⠀⠀⠀⠘⠿⠿⠋⠀⠀⠀⠀⠀⠀⣿⣿⣿⠇  \n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠁  \n\n⠀⠀⠀⠀⣿⣷⣄⠀⢶⣶⣷⣶⣶⣤⣀  \n⠀⠀⠀⠀⣿⣿⣿⠀⠀⠀⠀⠀⠈⠙⠻⠗  \n⠀⠀⠀⣰⣿⣿⣿⠀⠀⠀⠀⢀⣀⣠⣤⣴⣶⡄  \n⠀⣠⣾⣿⣿⣿⣥⣶⣶⣿⣿⣿⣿⣿⠿⠿⠛⠃  \n⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄  \n⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡁  \n⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁  \n⠀⠀⠛⢿⣿⣿⣿⣿⣿⣿⡿⠟  \n⠀⠀⠀⠀⠀⠉⠉⠉  .','Thus it can be seen that mental health is based on a certain degree of tension, the tension between what one has already achieved and what one still ought to accomplish, or the gap between what one is and what one should become.... \nI consider it a dangerous misconception of mental hygiene to assume that what man needs in the first place is equilibrium or, as it is called in biology, \"homeostasis,\" i.e., a tensionless state. What man actually needs is not a tensionless state but rather the striving and struggling for a worthwhile goal, a freely chosen task.','The Thunder God went for a ride\nUpon his favorite philly.\n\"I\'m Thor!", he cried.\nThe horse replied,"You forgot your thaddle, thilly!"','Nai hiruvalyë Valimar. Ihírienyes. Nai elyë hiruva.','How astounded a man must be, when he learns that he himself has been the one directing the narrative of his own story.','The past cannot be altered, but the future can be directed. ','Your mind is like this water, my friend: when it is agitated it is difficult to see, but if you allow it to calm down the answer will appear clear...', 'If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.\nBut, sad or merry, I must leave it now. Farewell', 'You may fool the whole world down the pathway of years \nAnd get pats on the back as you pass \nBut your final reward will be heartache and tears \nIf you’ve cheated the man in the glass.', 'Learning does not make one learned: there are those who have knowledge and those who have understanding. \nThe first requires memory and the second philosophy.'];

  
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}
*/

