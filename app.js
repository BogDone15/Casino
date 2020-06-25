

const play = () => {
    const btnStart = document.querySelector('.btnStart');

    btnStart.addEventListener('click', () => {
        const cherry = document.querySelector('.cherry');
        const apple = document.querySelector('.apple');
        const pear = document.querySelector('.pear');
    
        cherry.style.transform = 'rotateX(-7200deg)';
        cherry.style.transition = 'transform 6s ease-out';
    
        apple.style.transform = 'rotateX(-7200deg)';
        apple.style.transition = 'transform 6s ease-out';
        apple.style.transitionDelay = '.1s';
    
        pear.classList.add('animate');
    });
}

play();

