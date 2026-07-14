// ==============================
// Smooth Scrolling for Navigation
// ==============================

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });

    });

});


// ==============================
// Active Navigation Highlight
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ==============================
// Scroll Animation
// ==============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll("section").forEach(sec=>{

    sec.classList.add("hidden");

    observer.observe(sec);

});


// ==============================
// Scroll To Top Button
// ==============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }
    else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});


// ==============================
// Typing Effect
// ==============================

const text = [
    "Python Developer",
    "Data Analyst",
    "Machine Learning Enthusiast",
    "AI Learner"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

const typingElement = document.querySelector(".home-content h3");

(function type(){

    if(count === text.length){

        count = 0;

    }

    currentText = text[count];

    letter = currentText.slice(0, ++index);

    typingElement.textContent = letter;

    if(letter.length === currentText.length){

        count++;

        index = 0;

        setTimeout(type,1200);

    }
    else{

        setTimeout(type,120);

    }

})();


// ==============================
// Card Hover Animation
// ==============================

document.querySelectorAll(".card,.project-card,.skill").forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        item.style.transform="translateY(-10px) scale(1.03)";

    });

    item.addEventListener("mouseleave",()=>{

        item.style.transform="translateY(0px) scale(1)";

    });

});


// ==============================
// Footer Year
// ==============================

const footer = document.querySelector("footer p");

const year = new Date().getFullYear();

footer.innerHTML =
`© ${year} Rekhapalli Venkata Pranav Kumar | All Rights Reserved`;
