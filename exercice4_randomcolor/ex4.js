const li1=document.getElementById("1")
const li2=document.getElementById("2")
const li3=document.getElementById("3")
const li4=document.getElementById("4")
function getrandomcolor(){
return "#"+Math.floor(Math.random()*16777215).toString(16);
}
function randomcolor(li){
li.target.style.color=getrandomcolor()
}
li1.addEventListener('click',randomcolor)
li2.addEventListener('click',randomcolor)
li3.addEventListener('click',randomcolor)
li4.addEventListener('click',randomcolor)