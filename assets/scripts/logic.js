// selector for btns
let homeBtn = document.getElementById("home-btn")
let aboutBtn = document.getElementById("about-btn")
let projectsBtn = document.getElementById("projects-btn")
let contactBtn = document.getElementById("contact-btn")

// selector for sections
let homeSec = document.getElementById("home-sec")
let aboutSec = document.getElementById("about-sec")
let projectsSec = document.getElementById("projects-sec")
let contactSec = document.getElementById("contact-sec")

// console.log(contactSec);



homeBtn.addEventListener("click",()=> {
    homeSec.classList.remove("d-none")
    homeSec.classList.add("d-block")
    aboutSec.classList.add("d-none")
    projectsSec.classList.add("d-none")
    contactSec.classList.add("d-none")
} )


aboutBtn.addEventListener("click", ()=> {
    aboutSec.classList.remove("d-none")
    aboutSec.classList.add("d-block")
    homeSec.classList.add("d-none")
    projectsSec.classList.add("d-none")
    contactSec.classList.add("d-none")
})

projectsBtn.addEventListener("click", ()=> {
    projectsSec.classList.remove("d-none");
    projectsSec.classList.add("d-block")
    homeSec.classList.add("d-none")
    aboutSec.classList.add("d-none")
    contactSec.classList.add("d-none")
})

contactBtn.addEventListener("click", ()=> {
    contactSec.classList.remove("d-none")
    contactSec.classList.add("d-block")
    homeSec.classList.add("d-none")
    aboutSec.classList.add("d-none")
    projectsSec.classList.add("d-none")
})

//comment 