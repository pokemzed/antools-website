const renderGalery = () =>{
    const wrapper = document.querySelector('.galery-info__wrap'),
        slideLeft = document.querySelector('.slider-left'),
        slideRight = document.querySelector('.slider-right'),
        controlSlide = document.querySelector('.slider__control'),
        controls = [...controlSlide.children]
        
    let count = 0

    controls[count].classList.add('active')

    const markupGalery = (index) => {
        let inside = DATA_GALERY[count]
        wrapper.innerHTML = `
            <div class="galery-image__wrap">
                <img src="${inside.image}photo${count}.png" alt="">
                <div class="description__wrap">
                    <h3>${inside.name} ${inside.surname}</h3>
                    <p>Product Manager</p>
                </div>
            </div>
            <div class="galery-text__wrap">
                <p>
                    ${inside.text}
                </p>
                <img src="./images/galery/quotes.png" class="quotes" alt="">
            </div>
        `
        //Поведение контроллеров слайдов
        controls.map(control => {
            control.classList.remove('active')
        })
        controls[count].classList.add('active')
    }
    markupGalery()

    //Слайды вправо - влево
    slideLeft.onclick = () => count > 0 ? markupGalery(--count) : false
    slideRight.onclick = () => count < 2 ? markupGalery(++count) : false
}
renderGalery()