const couleur=document.getElementById("color")
const size=document.getElementById("size")
const font=document.getElementById("font")
const para=document.getElementById("para")

const update=function(){
para.style.color=couleur.value
para.style.fontSize=size.value +'px'
para.style.fontFamily=font.value
}
couleur.addEventListener('input',update)
size.addEventListener('input',update)
font.addEventListener('change',update)
