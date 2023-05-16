const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");

let deger = 0;

const deger1 = function(){
    deger++;
    if(deger > slides.length -1){
        deger = 0;
    }
    bodyResim()
    anaResim()
}

bodyResim()
function bodyResim(){
    body.style.backgroundImage = slides[deger].style.backgroundImage;
}

function anaResim(){
    slides.forEach((slide)=>{
        slide.classList.remove("active");
    })
    slides[deger].classList.add("active");
}

saat()

function saat(){
    setInterval(() => {
        deger1()
    }, 3000);
}