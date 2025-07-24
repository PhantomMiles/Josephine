const sliders = [
    "./img/slide1.jpeg",
    "./img/slide2.jpeg",
    "./img/slide3.jpeg",
    "./img/slide4.png",
    "./img/slide5.jpeg",
    "./img/slide6.png",
    "./img/slide7.jpeg",
    "./img/slide8.jpeg",
    "./img/slide9.jpeg",
]

const slide = document.getElementById('slide');

setInterval(() => {
    const randomPic = sliders[Math.floor(Math.random() * (sliders.length - 1))]
    console.log(randomPic)
    slide.style.backgroundImage = `url(${randomPic})`;
    slide.style.transition = "all 0.5s";
}, 5000);