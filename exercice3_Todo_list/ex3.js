const Name=document.getElementById("Name")
const contenu=document.getElementById("contenu")
const button=document.getElementById("button")
const ajout=document.getElementById("1")
const add=function(){
    if(Name.value==""||contenu.value=="")
        return;
const activite=document.createElement('div')
const del=document.createElement('button')
const espace=document.createElement('br')
del.classList.add('btn')
del.textContent='🗑️'

del.addEventListener('click',()=>{activite.remove()
    espace.remove()
})
activite.textContent=Name.value+": " +contenu.value+"  "
activite.classList.add("container")

activite.appendChild(del)
ajout.appendChild(activite)
ajout.appendChild(espace)
Name.value = ""
contenu.value = ""
}
button.addEventListener('click',add)
