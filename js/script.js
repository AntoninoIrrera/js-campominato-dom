


const contenitore = document.getElementById("output");
const bottonePlay = document.querySelector("a.btn-primary");

const quadratoLungo = document.getElementById("quadratoLungo");
const quadratoAlto = document.getElementById("quadratoAlto");



const punteggioFinale = document.getElementById("punteggio");


function getQuadrato(){

    const div = document.createElement("div");

    div.classList.add("quadrato");

    // // div.addEventListener("click", function(){
        
        // div.classList.add("click");
        
    // })
    
    return div;
}



function numeriCasuali(numMin, numMax) {
    const numeroCasuale = Math.floor(Math.random() * (numMax - numMin) + 1) + numMin;
    return numeroCasuale;
}













bottonePlay.addEventListener("click", function(){

    contenitore.innerHTML = "";


    const quadratoLungoValore = quadratoLungo.value;
    const quadratoAltoValore = quadratoAlto.value;


    const caselleTotali = quadratoAltoValore * quadratoLungoValore;

    let statoGioco = "gioco";

    let punti = 0;

    const numeriBombe = [];


    while (numeriBombe.length < 16) {


        let numeroCasuale = numeriCasuali(1, caselleTotali);

        // console.log(numeroCasuale);



        if (!numeriBombe.includes(numeroCasuale)) {

            numeriBombe.push(numeroCasuale);

        }


    }

    console.log(numeriBombe);
    
    
    
    for(let i = 1; i <= caselleTotali; i++){
        
        const elementoQuadrato = getQuadrato();
        
        elementoQuadrato.style.width = `calc(100% / ${quadratoLungoValore})`
        elementoQuadrato.style.height = `calc(100% / ${quadratoAltoValore})`
        
        
        contenitore.append(elementoQuadrato);
        
        elementoQuadrato.append(i);

        

            
        elementoQuadrato.addEventListener("click", function(){  
        // console.log(i);
        
        
            
            if (numeriBombe.includes(i)) {
                
                elementoQuadrato.classList.add("color_red");
                
                
                statoGioco = "finito";
                
                alert("morto");
                
                punteggioFinale.innerHTML = "Hai totalizzato: " + punti + " punti";
                
            }else{
                
                punti++;
                
                elementoQuadrato.classList.add("click");
            }
            
            console.log(punti);
            
            if (punti == (caselleTotali - 16)) {
                
                alert("hai vinto");
                statoGioco = "finito";

                punteggioFinale.innerHTML = "Bravo, hai totalizzato: " + punti + " punti";

        
            }
        
        
            
        }, {once : true})

            
            
    }
        

})
