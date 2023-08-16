const darkSwitch = document.querySelector(".dark-switch");
const lightSwitch = document.querySelector(".light-switch");
const body = document.querySelector("body");

if (localStorage.getItem("darkMode")) {
    body.classList.add("dark-mode");
    darkSwitch.classList.remove("active");
    lightSwitch.classList.add("active");
}

darkSwitch.addEventListener("click", () => {
    body.classList.add("dark-mode");
    darkSwitch.classList.remove("active");
    lightSwitch.classList.add("active");
    localStorage.setItem("darkMode", "true");
});
lightSwitch.addEventListener("click", () => {
    body.classList.remove("dark-mode");
    darkSwitch.classList.add("active");
    lightSwitch.classList.remove("active");
    localStorage.removeItem("darkMode");
});


var tl = gsap.timeline();
tl
    .from(".nav-container .left", {
        x: -300,
        opacity: 0,
        duration: 1

    })
    .from(".nav-container .right", {
        x: 300,
        opacity: 0,
        duration: 1,
        delay:-1
    })
    // .from([".hero-section h1",".hero-section p"],{
    //     scale:0.3,
    //     opacity:0,
    //     duration:1,
    //     delay:-1
    // })
    // .to([".hero-section h1",".hero-section p"],{
    //     scale:1,
    // })

    .from(".hero-section h1",{
        y:-400,
        opacity:0,
        duration:1,
        delay:-1
    })
    .from(".hero-section p",{
        x:-400,
        opacity:0,
        duration:1,
        delay:-1
    })
    .from(".hero-section .btn",{
        scale:0.3,
        opacity:0,
        duration:1,
        delay:-1,
    })
    .from(".hero-section img",{
        scale:0.3,
        opacity:0,
        duration:1,
        delay:-1
    })
    




