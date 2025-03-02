'use.strict';
// Change the text font of the paragraph by clicking on the button
let paragraph = document.querySelector('p');
let button = document.querySelector('button');
button.addEventListener('click', () => {
  paragraph.style.fontFamily = 'Arial';
});
// Change text style of the first header by clicking on the button and back
let header1 = document.querySelector('h1');
let button2 = document.querySelector('button');
button2.addEventListener('click', () => {
  header1.style.fontStyle = 'italic';
  header1.style.fontWeight = 'bold';
  header1.style.textDecoration = 'underline';
});
// Change the color of the text of the second paragraph by clicking on the button and back
let paragraph2 = document.querySelector('p');
let button3 = document.querySelector('button');
button3.addEventListener('click', () => {
  paragraph2.style.color = 'red';
});


