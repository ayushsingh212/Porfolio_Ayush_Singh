let angleY = 0;
function rotateImg() {
    angleY += 0.8;
    document.querySelector(".Developer-img").style.transform = `rotateY(${angleY}deg)`;
    requestAnimationFrame(rotateImg);
}
rotateImg();

// Highlight active link in the navigation
document.addEventListener("DOMContentLoaded", function () {
    let links = document.querySelectorAll(".nav-link");
    let currentPage = window.location.href;

    links.forEach((link) => {
        if (currentPage.includes(link.getAttribute("href"))) {
            link.classList.add("active");
        }
    });

    // Hamburger menu toggle
    const menu = document.querySelector(".navliii");
    const toggle = document.querySelector(".heinberger");

    toggle.addEventListener("click", function () {
        menu.classList.toggle("show");
    });

    // Close menu when clicking a link
    document.querySelectorAll(".navliii a").forEach(link => {
        link.addEventListener("click", function () {
            menu.classList.remove("show");
        });
    });
});

// Resume download function
function openlink3() {
    let f = document.createElement("a");
    f.href = "img/Ayush_Singh_Resume.pdf";
    f.download = "Ayush_Singh_Resume.pdf";
    document.body.appendChild(f);
    f.click();
    document.body.removeChild(f);
}

// Button click animation
document.querySelectorAll(".btn").forEach(e => {
    e.addEventListener("click", () => {
        e.style.backgroundColor = "#001f3f";
        setTimeout(() => {
            e.style.backgroundColor = "";
        }, 2000);
    });
});

// Open social links
function openlink1() {
    window.open("https://github.com/ayushsingh212", "_blank");
}

function openlink2() {
    window.open("https://www.linkedin.com/in/ayush-singh-b7388532b/", "_blank");
}

// Typing animation
var typed = new Typed('#element', {
    strings: ['Video Editor.', 'Web Developer.'],
    typeSpeed: 50,
});



var fgh = document.querySelector(".navlii");
var click =false;
function y() {
    click =!click;
if(click){
fgh.style.display ='flex';
}
else{
fgh.style.display ='none';
}
}

