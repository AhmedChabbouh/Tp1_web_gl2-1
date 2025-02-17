

jouer()
function jouer(){
    
    alert("donner la difficulte ")
const z=prompt("Facile , Intermédiaire ou Difficile ")
var w=true;
    if (z=="Facile")
        var i=10
    else if(z=="Intermédiaire")
        var i=5
    else if(z=="Difficile")
        var i=3
    else 
       {alert("difficulte invalide")
        w=false}
    
    if(w)
    {const x=Math.floor(Math.random()*10);

    var j=0
    while(j<i && x!=y)
        {var y=prompt("donner un chiffre")
            j++}
            
    if(x==y)
        alert("tu as gagne")
    else
        alert("tu as perdu le chiffre a deviner est : "+x) 
     
    
    }}

let button=document.getElementById("1")
button.addEventListener("click",jouer)
   



