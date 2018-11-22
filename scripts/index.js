let tagLine = document.querySelector('[data-tagLine]');
let i = 0;
let textArray = ['Software Developer', 'Musician', 'Leader', 'Creator'];
let txt = 'Software Developer'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    tagLine.textContent += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

const header = document.querySelector('[data-header]');

const uMoodImg = document.getElementById('uMoodImg');

uMoodImg.addEventListener('mouseover', () => {
  uMoodImg.src = 'https://media.giphy.com/media/YAXIGsoPJojzlVcbJP/giphy.gif';
})

uMoodImg.addEventListener('mouseout', () => {
  uMoodImg.src = '../images/desktopHome.png';
})

psImg.addEventListener('mouseover', () => {
  psImg.src = 'https://media.giphy.com/media/3d19VItGVqFZvfDMrd/giphy.gif';
})

psImg.addEventListener('mouseout', () => {
  psImg.src = '../images/desktopLanding.png';
})