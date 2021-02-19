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

/**
 * Adds a random greeting to the page.
 */
function addRandomQuote() {
  const greetings =
      ['This world isn\'t easy -  \nIt\'s hard on your own -  \nWe\'re richer united,  \nand poorer alone.\nIt\'s fine to ignore it -  \nFor better or ill -  \nTo scorn it before it  \ncollapses your will.\nBut if you can *fight* it -  \nOr choose to be *strong* -   \nPerhaps you can right it, \nrepairing a wrong.\nIt\'s plainly apparent -  \nIt\'s simple to see -  \nTogether,  \nwe\'ll weather\n whatever will be.','Victory belongs to the most persevering.','Frodo : I can\'t do this, Sam. \n\n Sam : I know. It\'s all wrong\nBy rights we shouldn\'t even be here.\nBut we are.\nIt\'s like in the great stories Mr. Frodo.\nThe ones that really mattered.\nFull of darkness and danger they were,\nand sometimes you didn\'t want to know the end.\nBecause how could the end be happy.\nHow could the world go back to the way it was when so much bad happened.\nBut in the end, it\'s only a passing thing, this shadow.\nEven darkness must pass.\nA new day will come.\nAnd when the sun shines it will shine out the clearer.\nThose were the stories that stayed with you.\nThat meant something.\nEven if you were too small to understand why.\nBut I think, Mr. Frodo, I do understand.\nI know now.\nFolk in those stories had lots of chances of turning back only they didn\’t.\nBecause they were holding on to something.\n\nFrodo : What are we holding on to, Sam?\n\nSam : That there\’s some good in this world, Mr. Frodo. And it\’s worth fighting for.','  ⠀⠰⡿⠿⠛⠛⠻⠿⣷  \n⠀⠀⠀⠀⠀⠀⣀⣄⡀⠀⠀⠀⠀⢀⣀⣀⣤⣄⣀⡀  \n⠀⠀⠀⠀⠀⢸⣿⣿⣷⠀⠀⠀⠀⠛⠛⣿⣿⣿⡛⠿⠷  \n⠀⠀⠀⠀⠀⠘⠿⠿⠋⠀⠀⠀⠀⠀⠀⣿⣿⣿⠇  \n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠁  \n\n⠀⠀⠀⠀⣿⣷⣄⠀⢶⣶⣷⣶⣶⣤⣀  \n⠀⠀⠀⠀⣿⣿⣿⠀⠀⠀⠀⠀⠈⠙⠻⠗  \n⠀⠀⠀⣰⣿⣿⣿⠀⠀⠀⠀⢀⣀⣠⣤⣴⣶⡄  \n⠀⣠⣾⣿⣿⣿⣥⣶⣶⣿⣿⣿⣿⣿⠿⠿⠛⠃  \n⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄  \n⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡁  \n⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁  \n⠀⠀⠛⢿⣿⣿⣿⣿⣿⣿⡿⠟  \n⠀⠀⠀⠀⠀⠉⠉⠉  .','Thus it can be seen that mental health is based on a certain degree of tension, the tension between what one has already achieved and what one still ought to accomplish, or the gap between what one is and what one should become.... \nI consider it a dangerous misconception of mental hygiene to assume that what man needs in the first place is equilibrium or, as it is called in biology, \"homeostasis,\" i.e., a tensionless state. What man actually needs is not a tensionless state but rather the striving and struggling for a worthwhile goal, a freely chosen task.','The Thunder God went for a ride\nUpon his favorite philly.\n\"I\'m Thor!", he cried.\nThe horse replied,"You forgot your thaddle, thilly!"','Nai hiruvalyë Valimar. Ihírienyes. Nai elyë hiruva.','How astounded a man must be, when he learns that he himself has been the one directing the narrative of his own story.','Plus Ultra','The past cannot be altered, but the future can be directed. ','Your mind is like this water, my friend: when it is agitated it is difficult to see, but if you allow it to calm down the answer will appear clear...', 'If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.\nBut, sad or merry, I must leave it now. Farewell', 'You may fool the whole world down the pathway of years \nAnd get pats on the back as you pass \nBut your final reward will be heartache and tears \nIf you’ve cheated the man in the glass.', 'Learning does not make one learned: there are those who have knowledge and those who have understanding. \nThe first requires memory and the second philosophy.'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}
