// --------------------------------------------------Navbar------------------------------------------------

document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("open");
    document.querySelectorAll(".nav-links li").forEach(link => {
        link.classList.toggle("fade");
    });
});

function toggleSlidestoShow() {
    if (window.matchMedia("(max-width: 768px)").matches) {
        document.querySelector(".graphic-design").innerHTML =
            `<div class="col-service-content">
        <div class="col-service-image image-right-lg">
        <img src="./temp/graphic.jpg">
        </div>
        <h1 class="service-header">Graphic design</h1>
        <div class="service-line "></div>
        <p>Experts in graphic design, we craft award-winning and cutting-edge online experiences. We build brand stories with each design.</p>
        </div>`
    } else {
        document.querySelector(".graphic-design").innerHTML =
            `<div class="col-service-content">
        <h1 class="service-header">Graphic design</h1>
        <div class="service-line "></div>
        <p>Experts in graphic design, we craft award-winning and cutting-edge online experiences. We build
            brand
            stories with each design.</p>
    </div>
    <div class="col-service-image image-right-lg"><img src="./temp/graphic.jpg"></div>`
    }
}

toggleSlidestoShow();

new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    draggable: true,
    dots: "#dots",
    arrows: {
        prev: ".glider-prev",
        next: ".glider-next"
    },
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
        }
    }]
})

window.addEventListener('resize', toggleSlidestoShow)

const header = document.querySelector("#navbarScroll");
const sectionOne = document.querySelector("#serviceScroll");
const svgLogo = document.querySelector(".svgLogo");

const sectionOneOptions = {
    rootMargin: "-85px"
};

const sectionOneObserver = new IntersectionObserver(function(
        entries,
        sectionOneObserver
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                header.classList.add("nav-scrolled");
                svgLogo.style.opacity = 1;
            } else {
                header.classList.remove("nav-scrolled");
                svgLogo.style.opacity = 0;
            }
        });
    },
    sectionOneOptions);

sectionOneObserver.observe(sectionOne);