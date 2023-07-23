// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

// Map to get the word version of number
const numberToWord = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'optional'
}

// Function to add all notes in lyrics to a global array
function pushNotesInLyricsToArr(){
  notesInLyrics.push(document.getElementById('letter-note-one'));
  notesInLyrics.push(document.getElementById('letter-note-two'));
  notesInLyrics.push(document.getElementById('letter-note-three'));
  notesInLyrics.push(document.getElementById('letter-note-four'));
  notesInLyrics.push(document.getElementById('letter-note-five'));
  notesInLyrics.push(document.getElementById('letter-note-six'));
  notesInLyrics.push(document.getElementById('letter-note-optional'));
}

// Function to reset the background color of all word background
function resetBackgroundColor(){
  for(let j = 1; j <= 7; j++){
    document.getElementById('word-'+numberToWord[j]).style.backgroundColor = '';
  }
}

// Declaration and sets first word background color to pink
let i = 1; // i is my counter for user following (clicking) the correct lyrics notes in order
document.getElementById('word-'+numberToWord[i++]).style.backgroundColor = 'pink';
let notesInLyrics = [];
pushNotesInLyricsToArr();
let y = 0; // y is my index to traverse notesInLyrics array

// Write named functions that change the color of the keys below
function keyPlay(event){
  // change background color of event triggered to pink
  event.target.style.backgroundColor = 'pink';
  
  // if event current id is equal to the first notes in lyrics, increment y position and i count
  if(event.currentTarget.id === (notesInLyrics[y].innerHTML.toLowerCase() + '-key')){
    document.getElementById('word-'+numberToWord[i++]).style.backgroundColor = 'pink';
    y++;
  }
  
  // i counts how many times the user clicked on the right key notes in notesInLyrics array
  // automatically clicks on the button when user enters the correct last key note for current page
  if(i === 8 && nextOne.hidden === false){
    document.getElementById('first-next-line').click();
  }
  else if(i === 8 && nextTwo.hidden === false){
    document.getElementById('second-next-line').click();
  }
  else if(i === 8 && nextThree.hidden === false){
    document.getElementById('third-next-line').click();
  }
  else if(i === 8 && startOver.hidden === false){
    document.getElementById('fourth-next-line').click();
  }
}

// This function resets everything for current page
function resetSetup(){
  resetBackgroundColor();
  i = 1;
  document.getElementById('word-'+numberToWord[i++]).style.backgroundColor = 'pink';
  y = 0;
  notesInLyrics = [];
  pushNotesInLyricsToArr();
}

// Write named functions that change the color of the keys back to default
function keyReturn(event){
  event.target.style.backgroundColor = '';
}

// Write a named function with event handler properties
function assignEvents(note){
  note.onmousedown = keyPlay;
  note.onmouseup = keyReturn;
}

// Write a loop that runs the array elements through the function
notes.forEach(assignEvents);

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');
// This variable stores the '-END' lyric element
//let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden = true;

// Write anonymous event handler property and function for the first progress button
nextOne.onclick = function(){
  nextTwo.hidden = false;
  nextOne.hidden = true;
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('letter-note-six').innerHTML = 'C';
  resetSetup();
}

// Write anonymous event handler property and function for the second progress button
nextTwo.onclick = function(){
  nextThree.hidden = false;
  nextTwo.hidden = true;
  document.getElementById('word-five').innerHTML = 'DEAR';
  document.getElementById('word-six').innerHTML = 'FRIEND';
  //lastLyric.style.display = 'inline-block';
  document.getElementById('letter-note-three').innerHTML = 'G';
  document.getElementById('letter-note-four').innerHTML = 'E';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('letter-note-six').innerHTML = 'B';
  resetSetup();
}

// Write anonymous event handler property and function for the third progress button
nextThree.onclick = function(){
  startOver.hidden = false;
  nextThree.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('word-three').innerHTML = 'BIRTH';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-one').innerHTML = 'F';
  document.getElementById('letter-note-two').innerHTML = 'F';
  document.getElementById('letter-note-three').innerHTML = 'E';
  document.getElementById('letter-note-four').innerHTML = 'C';
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('letter-note-six').innerHTML = 'C';
  //lastLyric.style.display = 'none';
  resetSetup();
}

// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
  resetSetup();
}