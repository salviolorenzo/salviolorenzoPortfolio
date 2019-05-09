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

const colorPicker = () => {
  const colors = [
    'rgba(46, 147, 241, 0.95)',
    'rgba(94, 172, 245, 0.95)',
    'rgba(125, 182, 236, 0.95)',
    'rgba(157, 197, 235, 0.95)',
    'rgba(199, 219, 238, 0.95)'
  ];

  let index = Math.floor(Math.random() * colors.length);
  while (index < colors.length) {
    return colors[index];
    index++;
  }
};

typeWriter();

const header = document.querySelector('[data-header]');
const uMoodImg = document.getElementById('uMoodImg');
const budgetImg = document.getElementById('budgetImg');
const psImg = document.getElementById('psImg');

const home = document.querySelector('[data-home]');
const homeLink = document.querySelector('[data-home-link]');
const aboutMe = document.querySelector('[data-about-me]');
const aboutMeLink = document.querySelector('[data-about-me-link]');
const projects = document.querySelector('[data-projects]');
const projectsLink = document.querySelector('[data-projects-link]');
const skills = document.querySelector('[data-skills]');
const skillsLink = document.querySelector('[data-skills-link]');
const contact = document.querySelector('[data-contact]');
const contactLink = document.querySelector('[data-contact-link]');

const hamburger = document.querySelector('[data-hamburger]');
const mobileNav = document.querySelector('[data-mobile-nav]');
const techItems = document.getElementsByClassName('tech-item');
const iconsList = document.getElementsByClassName('container');

hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('hidden');
});

uMoodImg.addEventListener('mouseover', () => {
  uMoodImg.src = 'https://media.giphy.com/media/YAXIGsoPJojzlVcbJP/giphy.gif';
});

uMoodImg.addEventListener('mouseout', () => {
  uMoodImg.src = '../images/desktopHome.png';
});

// budgetImg.addEventListener("mouseover", () => {
//   budgetImg.src = "";
// });

// budgetImg.addEventListener("mouseout", () => {
//   budgetImg.src = "../images/Landingimg.png";
// });

psImg.addEventListener('mouseover', () => {
  psImg.src = 'https://media.giphy.com/media/3d19VItGVqFZvfDMrd/giphy.gif';
});

psImg.addEventListener('mouseout', () => {
  psImg.src = '../images/desktopLanding.png';
});

ReactImg.addEventListener('mouseover', () => {
  ReactImg.src = 'https://media.giphy.com/media/3d8mZsqNWY3ut85M2L/giphy.gif';
});

ReactImg.addEventListener('mouseout', () => {
  ReactImg.src = '../images/ReactProj.png';
});

homeLink.addEventListener('click', () => {
  home.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
aboutMeLink.addEventListener('click', () => {
  aboutMe.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
projectsLink.addEventListener('click', () => {
  projects.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
skillsLink.addEventListener('click', () => {
  skills.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
contactLink.addEventListener('click', () => {
  contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

for (item of techItems) {
  item.addEventListener('mouseenter', event => {
    event.target.style.backgroundColor = colorPicker();
    event.target.style.boxShadow = '0 0 5px 0 rgba(0, 0, 0, 0.8)';

    // event.target.style.color = 'rgba(0, 0, 0, 1)';
  });
  item.addEventListener('mouseleave', event => {
    event.target.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    event.target.style.boxShadow = 'none';
    event.target.style.color = 'white';
  });
}

for (item of iconsList) {
  item.addEventListener('mouseenter', event => {
    event.target.style.color = colorPicker();
  });
  item.addEventListener('mouseleave', event => {
    event.target.style.color = 'rgba(0, 0, 0, 0.8)';
  });
}
