


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
    contenitore.classList.remove("fineGioco");
    punteggioFinale.innerHTML = "";



    const quadratoLungoValore = quadratoLungo.value;
    const quadratoAltoValore = quadratoAlto.value;


    const caselleTotali = quadratoAltoValore * quadratoLungoValore;

   

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
    
    
    let divListElement = []
        
    for(let i = 1; i <= caselleTotali; i++){
        
        const elementoQuadrato = getQuadrato();
        
        elementoQuadrato.style.width = `calc(100% / ${quadratoLungoValore})`
        elementoQuadrato.style.height = `calc(100% / ${quadratoAltoValore})`
        
        contenitore.append(elementoQuadrato);

        elementoQuadrato.append(i);

        
        divListElement.push(elementoQuadrato);
        

            
        elementoQuadrato.addEventListener("click", function(){  
            // console.log(i);
        
    
            
            if (numeriBombe.includes(i)) {
                

                    
                // elementoQuadrato.classList.add("color_red");
                
                


                for(let i = 0; i < numeriBombe.length; i++){
                    divListElement[numeriBombe[i]].classList.add("color_red");
                }


                // alert("morto");
                
                
                punteggioFinale.innerHTML = "Mi spiace hai beccato una bomba, hai perso, hai totalizzato: " + punti + " punti";
                


                contenitore.classList.add("fineGioco");
                
                
            }else{
                
                punti++;
                
                elementoQuadrato.classList.add("click");
            }
        
            console.log(punti);
        
            if (punti == (caselleTotali - 16)) {

                // alert("hai vinto");

                punteggioFinale.innerHTML = "Bravo, sei riuscito a non beccare nessuna bomba, hai vinto, hai totalizzato il massimo dei punti: " + punti;

                contenitore.classList.add("fineGioco");

            }

            
            
        }, {once : true})
        
    
        
    
        




    }

            
        

})


