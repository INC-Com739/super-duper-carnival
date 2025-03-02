'use strict';

// Change the color of the text of the paragraph by clicking on the button
let paragraph = document.querySelector('p');
let button = document.querySelector('button');
button.addEventListener('click', () => {
  paragraph.style.color = 'blue';
});

// Change text style of the second header by clicking on the button and back
let header2 = document.querySelector('h2');
let button2 = document.querySelector('button2');
button.addEventListener('click', () => {
  header2.style.fontStyle = 'italic';
  header2.style.fontWeight = 'bold';
  header2.style.textDecoration = 'underline';
});

// Change the font size of the text of the first header by clicking on the button and back
let header1 = document.querySelector('h1');
let button3 = document.querySelector('button3');
button.addEventListener('click', () => {
  header1.style.fontSize = '40px';
});