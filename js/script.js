


const contenitore = document.getElementById("output");
const bottonePlay = document.querySelector("a.btn-primary");

const quadratoLungo = document.getElementById("quadratoLungo");
const quadratoAlto = document.getElementById("quadratoAlto");


const erroreNumero = document.getElementById("outputErroreNumero");

function getQuadrato(){

    const div = document.createElement("div");

    div.classList.add("quadrato");

    div.addEventListener("click", function(){
    
        div.classList.toggle("click");
    
    })

    return div;
}






bottonePlay.addEventListener("click", function(){

    contenitore.innerHTML = "";
    
    const quadratoLungoValore = quadratoLungo.value;
    const quadratoAltoValore = quadratoAlto.value;


    const caselleTotali = quadratoAltoValore * quadratoLungoValore;

    for(let i = 1; i <= caselleTotali; i++){
        
        const elementoQuadrato = getQuadrato();
        
        elementoQuadrato.style.width = `calc(100% / ${quadratoLungoValore})`
        elementoQuadrato.style.height = `calc(100% / ${quadratoAltoValore})`
        
        
        contenitore.append(elementoQuadrato);
        
        elementoQuadrato.append(i);
        
        elementoQuadrato.addEventListener("click", function(){
            
            console.log(i);
            
        })
        
        
    }
    
    
    
     
    

})
