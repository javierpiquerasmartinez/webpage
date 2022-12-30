const navSlide = () => {
    const burger = document.querySelector('.jp-burger');
    const nav = document.querySelector('.jp-navigation');
    const navLinks = document.querySelectorAll('.jp-navigation li')
    
    burger.addEventListener('click', ()=> {
        //toggle nav
        nav.classList.toggle('jp-navigation-mobile-active')
        //animate links
        navLinks.forEach((link, index)=>{
            if( link.style.animation ) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.3}s`;
            }
        })
        burger.classList.toggle('jp-burger-line-toggle')
    })
}

navSlide();