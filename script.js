const increment = document.querySelectorAll(".btn")
const newGameBtn = document.getElementById("new-game-btn")
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let homeRun = 0
let guestRun = 0

document.getElementById("home-btn-one").addEventListener("click", ()=>{
    homeRun++
    homeScore.innerText = homeRun
    teamSituation()
})
document.getElementById("home-btn-two").addEventListener("click", ()=>{
    homeRun = homeRun + 2
    homeScore.innerText = homeRun
    teamSituation()
})
document.getElementById("home-btn-three").addEventListener("click", ()=>{
    homeRun = homeRun + 3
    homeScore.innerText = homeRun
    teamSituation()
})

document.getElementById("guest-btn-one").addEventListener("click", ()=>{
    guestRun++
    guestScore.innerText = guestRun
    teamSituation()
})
document.getElementById("guest-btn-two").addEventListener("click", ()=>{
    guestRun = guestRun + 2
    guestScore.innerText = guestRun
    teamSituation()
})
document.getElementById("guest-btn-three").addEventListener("click", ()=>{
    guestRun = guestRun + 3
    guestScore.innerText = guestRun
    teamSituation()
})

function teamSituation(){
    if(homeScore.innerText < guestScore.innerText){
        homeScore.style.border = "2px solid red"
        guestScore.style.border = "2px solid green"
    }

    else if(homeScore.innerText > guestScore.innerText){
        homeScore.style.border = "2px solid green"
        guestScore.style.border = "2px solid red"
    }

    else{
        homeScore.style.border = "2px solid yellow"
        guestScore.style.border = "2px solid yellow"
    }
}

newGameBtn.addEventListener("click", () =>{
    homeScore.innerText = 0
    guestScore.innerText = 0
    homeRun = 0
    guestRun = 0
    homeScore.style.border = "none"
    guestScore.style.border = "none"
})
