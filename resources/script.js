function myMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".menu-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// TYPING EFFECT
var typingEffect = new Typed(".typedText", {
    strings: ["Developer", "Frontend Developer"],
    loop: false,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 10,
    smartBackspace: true,
    showCursor: false,
})

// SCROLL REVEAL (TOP)
    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true
    })

        // GENERIC
        sr.reveal('.title-container',{})

        // ABOUT
        sr.reveal('.about-container', {delay: 100})
        sr.reveal('.exp-container', {delay: 400})

        // PROJECTS
        sr.reveal('.one', {delay: 100})
        sr.reveal('.two', {delay: 200})
        sr.reveal('.three', {delay: 300})
        sr.reveal('.four', {delay: 400})

        // CONTACT FORM
        sr.reveal('#contact-form', {delay: 200})

        // COPYRIGHT
        sr.reveal('.copyright', {delay: 600})
    

// SCROLL REVEAL (LEFT)
    const srLeft = ScrollReveal({
        origin: 'left',
        distance: '80px',
        duration: 2000,
        reset: true
    })

        // ABOUT
        srLeft.reveal('.left-container', {delay: 500})

        // CONTACT FORM
        srLeft.reveal('.name-section', {delay: 300})


// SCROLL REVEAL (RIGHT)
    const srRight = ScrollReveal ({
        origin: 'right',
        distance: '80px',
        duration: 2000,
        reset: true
    })

        // ABOUT
        srRight.reveal('.right-container', {delay: 300})

        // CONTACT FORM
        srRight.reveal('.email-section', {delay: 200})

// SCROLL REVEAL (DOWN)
    const srDown = ScrollReveal ({
        origin: 'bottom',
        distance: '80px',
        duration: 2000,
        reset: true
    })

        // CONTACT FORM
        srDown.reveal('#message', {delay: 400})
        srDown.reveal('.submit-btn', {delay: 500})
