const productImageSlider = document.querySelector('.image-slider');
const productImages = document.querySelectorAll('.product-images img');

let activeImageSlide = 0;

productImages.forEach((item,i)=>{
    item.addEventListener('click', ( ) => {
        productImages[activeImageSlide].classList.remove('active');
        item.classList.add('active');
        productImageSlider.style.backgroundImage = `url('${item.src}')`;
        activeImageSlide = i;
    })
})

const sizeBtn = document.querySelector('.size-radio-btn');
let checkBtn = 0;

sizeBtn.forEach((item, i ) =>{
    item.addEventListener('click', ()=>{
        sizeBtn[checkBtn].classList.remove('check');
        item.classList.add('check');
        checkBtn = i;
        })
})