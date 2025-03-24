
let angleY = 0;
function rotateImg() {

    angleY += 0.8;
    document.querySelector(".Developer-img").style.transform = ` rotateY(${angleY}deg)`
    requestAnimationFrame(rotateImg);



}
rotateImg();




document.addEventListener("DOMContentLoaded", function () {
    let links = document.querySelectorAll(".nav-link");
    let currentPage = window.location.href;

    links.forEach((link) => {
        if (currentPage.includes(link.getAttribute("href"))) {
            link.classList.add("active");
        }
    });
});


function openlink3() {
    let f = document.createElement("a");
    f.href = "Ayush_Singh_Resume.pdf";
    f.download = "Ayush_Singh_Resume.pdf";
    document.body.appendChild(f);
    f.click();
    document.body.removeChild(f);
}


document.querySelectorAll(".btn").forEach(e => {
    e.addEventListener("click", () => {
        e.style.backgroundColor = "#001f3f";

        setTimeout(() => {
            e.style.backgroundColor = "";
        }, 2000);
    });
});

function openlink1() {
    window.open("https://github.com/ayushsingh212", "_blank");
}

function openlink2() {
    window.open("https://www.linkedin.com/in/ayush-singh-b7388532b/", "_blank");
}

var typed = new Typed('#element', {
    strings: ['Video Editor.', 'Web Developer.'],
    typeSpeed: 50,
});
