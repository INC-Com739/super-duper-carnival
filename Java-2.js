'use strict';
// Change the color of the text of the paragraph by clicking on the button
let paragraph = document.querySelector('p');
let button = document.querySelector('button');
button.addEventListener('click', () => {
  paragraph.style.color = 'blue';
});
// Change text style of the first header by clicking on the button and back
let header1 = document.querySelector('h1');
let button2 = document.querySelector('button');
button2.addEventListener('click', () => {
  header1.style.fontStyle = 'italic';
  header1.style.fontWeight = 'bold';
  header1.style.textDecoration = 'underline';
});