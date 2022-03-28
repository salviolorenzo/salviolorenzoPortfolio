let tagLine = document.querySelector("[data-tagLine]");
let i = 0;
let textIndex = 0;
let textArray = ["Software Engineer", "Backend Engineer", "Frontend Engineer"];

let txt = textArray[textIndex]; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

const delay = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time));
};

const typeWriter = (text) => {
    if (i < text.length) {
        tagLine.textContent += txt.charAt(i);
        i++;
        setTimeout(() => typeWriter(text), 100);
    }

    if (i == text.length) {
        delay(1000).then(() => typeWriterDelete(text));
    }
};

const carouselDiv = document.querySelector("[data-carousel]");

const images = [
    "IMG_0289.webp",
    "IMG_0311.webp",
    "IMG_0315.webp",
    "paris.webp",
];
const carousel = () => {
    let count = 0;
    window.setInterval(function () {
        if (count < 3) {
            carouselDiv.style.backgroundImage = `url(./images/${images[count]})`;
            count++;
        } else {
            count = 0;
            carouselDiv.style.backgroundImage = `url(./images/${images[count]})`;
            count++;
        }
    }, 5000);
};

const colorPicker = () => {
    const colors = [
        "rgba(46, 147, 241, 0.95)",
        "rgba(94, 172, 245, 0.95)",
        "rgba(125, 182, 236, 0.95)",
        "rgba(157, 197, 235, 0.95)",
        "rgba(199, 219, 238, 0.95)",
    ];

    let index = Math.floor(Math.random() * colors.length);
    while (index < colors.length) {
        return colors[index];
        index++;
    }
};

typeWriter(txt);
carousel();

const header = document.querySelector("[data-header]");
const uMoodImg = document.getElementById("uMoodImg");
const budgetImg = document.getElementById("budgetImg");
const psImg = document.getElementById("psImg");

const home = document.querySelector("[data-home]");
const homeLink = document.querySelector("[data-home-link]");
const aboutMe = document.querySelector("[data-about-me]");
const aboutMeLink = document.querySelector("[data-about-me-link]");
const projects = document.querySelector("[data-projects]");
const projectsLink = document.querySelector("[data-projects-link]");
const skills = document.querySelector("[data-skills]");
const skillsLink = document.querySelector("[data-skills-link]");
const contact = document.querySelector("[data-contact]");
const contactLink = document.querySelector("[data-contact-link]");

const hamburger = document.querySelector("[data-hamburger]");
const mobileNav = document.querySelector("[data-mobile-nav]");
const techItems = document.getElementsByClassName("tech-item");
const iconsList = document.getElementsByClassName("container");

hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("hidden");
});

homeLink.addEventListener("click", () => {
    home.scrollIntoView({ behavior: "smooth", block: "start" });
});
aboutMeLink.addEventListener("click", () => {
    aboutMe.scrollIntoView({ behavior: "smooth", block: "center" });
});
projectsLink.addEventListener("click", () => {
    projects.scrollIntoView({ behavior: "smooth", block: "start" });
});
skillsLink.addEventListener("click", () => {
    skills.scrollIntoView({ behavior: "smooth", block: "start" });
});
contactLink.addEventListener("click", () => {
    contact.scrollIntoView({ behavior: "smooth", block: "start" });
});

for (item of techItems) {
    item.addEventListener("mouseenter", (event) => {
        event.target.style.backgroundColor = colorPicker();
        event.target.style.boxShadow = "0 0 5px 0 rgba(0, 0, 0, 0.8)";

        // event.target.style.color = 'rgba(0, 0, 0, 1)';
    });
    item.addEventListener("mouseleave", (event) => {
        event.target.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        event.target.style.boxShadow = "none";
        event.target.style.color = "white";
    });
}

for (item of iconsList) {
    item.addEventListener("mouseenter", (event) => {
        event.target.style.color = colorPicker();
    });
    item.addEventListener("mouseleave", (event) => {
        event.target.style.color = "rgba(0, 0, 0, 0.8)";
    });
}
