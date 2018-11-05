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


