let items, nbSlide, suivant, precedent, count;
items = document.querySelectorAll('img');
nbSlide = items.length;
suivant = document.querySelector('.right');
precedent = document.querySelector('.left');
count = 0;

let app =({
    slideSuivante () {
        items[count].classList.remove('active');
        count < nbSlide - 1 ? count++ : count = 0;
        items[count].classList.add('active')
        console.log(count);
        
    },
    slidePrecedente () {
        items[count].classList.remove('active');
        count > 0 ? count-- : count = nbSlide - 1;
    
        items[count].classList.add('active')
        
    },
    keyPress (e) {
        console.log(e);
        e.keyCode == 37 ? app.slidePrecedente() : e.keyCode == 39 ? app.slideSuivante() : null;
    },
})

suivant.addEventListener('click', app.slideSuivante);


precedent.addEventListener('click', app.slidePrecedente);


document.addEventListener('keydown', app.keyPress);