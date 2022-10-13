let guestEl = document.getElementById("guest-el")
let homeEl = document.getElementById("home-el")
let countHome = 0
let countGuest = 0
let newGameEl = document.getElementById("new-game-btn")



function plus1home(){
    countHome = countHome+1
    homeEl.textContent = countHome
}

function plus2home(){
    countHome = countHome+2
    homeEl.textContent = countHome
}

function plus3home(){
    countHome = countHome+3
    homeEl.textContent = countHome
}


function plus1guest(){
    countGuest = countGuest+1
    guestEl.textContent = countGuest
}

function plus2guest(){
    countGuest = countGuest+2
    guestEl.textContent = countGuest
}

function plus3guest(){
    countGuest = countGuest+3
    guestEl.textContent = countGuest
}

function newGame(){
    countGuest = 0
    countHome = 0
    guestEl.textContent = countGuest
    homeEl.textContent = countHome
}