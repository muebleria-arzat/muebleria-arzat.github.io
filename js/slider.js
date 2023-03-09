(function(){
    
    const sliders = [...document.querySelectorAll('.slider__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentSlider = document.querySelector('.slider__body--show').dataset.id;
        value = Number(currentSlider);
        value+= add;


        sliders[Number(currentSlider)-1].classList.remove('slider__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('slider__body--show');

    }

})();