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
        return 1;
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
        return 2;
    }
}

new Glider(document.querySelector('.glider'), {
    slidesToShow: toggleSlidestoShow(),
    draggable: true,
    dots: "#dots",
    arrows: {
        prev: ".glider-prev",
        next: ".glider-next"
    }
})

window.addEventListener('resize',toggleSlidestoShow)


