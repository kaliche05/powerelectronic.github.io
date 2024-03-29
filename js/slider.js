(function(){

    
    const sliders = [...document.querySelectorAll('.reparation__body')];
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
        const currentReparation = document.querySelector('.reparation__body--show').dataset.id;
        value = Number(currentReparation);
        value+= add;


        sliders[Number(currentReparation)-1].classList.remove('reparation__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        
        sliders[value-1].classList.add('reparation__body--show');

    }

})();