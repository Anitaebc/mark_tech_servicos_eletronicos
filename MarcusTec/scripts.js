
const form = document.querySelector(".formula")
const mask = document.querySelector(".mascara-formula")

const lead = document.querySelector(".fale-conosco")


function faleConosco(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mask.style.visibility = "visible"

}


function cliqueiNoBotao(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mask.style.visibility = "visible"
}


function cliqueiNaMask(){
    form.style.left = "-350px"
    form.style.transform = "translateX(0)"
    mask.style.visibility = "hidden"
}


