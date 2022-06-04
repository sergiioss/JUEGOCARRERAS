
const screenSwitch = (pantallaDestino) => {
    let destino = document.getElementById(pantallaDestino);
    destino.style.display = "flex";

    let arrayPantallas = ["pantalla1","pantalla2","pantalla3","pantalla4"];

    for(let pantalla of arrayPantallas){
        if(pantalla != pantallaDestino){
            document.getElementById(pantalla).style.display = "none";
        };
    };
};


let corredores = document.getElementById('aparecer');
let cabezabarrasIzquierda = document.getElementById('marcadoresp1');
let cabezabarrasDerecha = document.getElementById('marcadoresp2');
let avanzar1 = document.getElementById('marcadoresp1');
let avanzar2 = document.getElementById('marcadoresp2');
let ganador = document.getElementById('ganador');
let nombreganador = document.getElementById('nombreganador');
let contadorsuper1 = 0;
let contadorsuper2 = 0;
let seleccion = [];

console.log(this.kms);
console.log(seleccion);
console.log(contadorsuper1);
console.log(contadorsuper2);


const borrar = () =>{
    document.getElementById("mario").style.opacity = 1;
    document.getElementById("luigi").style.opacity = 1;
    document.getElementById("princesa").style.opacity = 1;
    document.getElementById("larry").style.opacity = 1;
    seleccion[0].kms = 0;
    seleccion[1].kms = 0;
    contadorsuper1 = 0;
    contadorsuper2 = 0;
    avanzar1.style.width = `0em`;
    avanzar2.style.width = `0em`;
    seleccion.splice(0,2);
    screenSwitch('pantalla1');
};

const elige = (seleccionado) => {
        
        if(seleccion.length === 2){
                console.log('Ya elegiste los dos personajes');
        }else{
            seleccion.push(players[seleccionado]);
            console.log(seleccion);
            console.log('Continua eligiendo');
            let opaco = document.getElementById(seleccionado);
            opaco.style.opacity = 0.5;
            }
            setTimeout(()=>{
            corredores.innerHTML = `<div class='hijoVersus'><img class="peque" src='.../img/${seleccion[0].nombre}.png' alt=''></div><div class='hijoVersus'><img class="peque" src='.../img/${seleccion[1].nombre}.png' alt=''></div>`;
            cabezabarrasIzquierda.innerHTML = `<img id="cabezabarrasIzquierda" src='.../img/${seleccion[0].nombreFoto}.png'>`
            cabezabarrasDerecha.innerHTML = `<img id="cabezabarrasDerecha" src='.../img/${seleccion[1].nombreFoto}.png'>`
            },100);
        };

const start = () => {
    let random = Math.round(Math.random());
    let frenada = Math.round(Math.random()*3);
    
    seleccion[random].acelerar();
    if(random == 0 && contadorsuper1 >= 2){
        console.log('SUPER1')
        seleccion[0].super();
        corredores.innerHTML = `<img id="super" src='/JUEGOCARRERAS/img/${seleccion[0].nombreSuper}.png' alt=''></img><img class="peque" src='/JUEGOCARRERAS/img/${seleccion[1].nombre}.png' alt=''>`;
        avanzar1.style.width =`${seleccion[0].kms}em`;
    }else if(random == 1 && contadorsuper2 >= 2){
        console.log('SUPER2')
        seleccion[1].super();
        corredores.innerHTML = `<img class="peque" src='/JUEGOCARRERAS/img/${seleccion[0].nombre}.png' alt=''><img id="super" src='/JUEGOCARRERAS/img/${seleccion[1].nombreSuper}.png' alt=''></img>`;
        console.log(seleccion[1]);
        avanzar2.style.width =`${seleccion[1].kms}em`;
    }else if(random == 0 && contadorsuper1 < 2){
        console.log("corredor1 avanza")
        avanzar1.style.width =`${seleccion[0].kms}em`;
        if(frenada == 3){
         seleccion[0].derrape();
         corredores.innerHTML = `<img class="peque" src='/JUEGOCARRERAS/img/${seleccion[0].nombreFrenada}.png' alt=''><img class="peque" src='/JUEGOCARRERAS/img/${seleccion[1].nombre}.png' alt=''></img>`;
         avanzar1.style.width =`${seleccion[0].kms}em`;
         contadorsuper1++;
         setTimeout ( ()=>{
         corredores.innerHTML = `<img class="peque" src='/JUEGOCARRERAS/img/${seleccion[0].nombre}.png' alt=''><img class="peque" src='/JUEGOCARRERAS/img/${seleccion[1].nombre}.png' alt=''></img>`;
         },500);
         console.log(contadorsuper1);
        }
          
     }else if(random == 1 && contadorsuper2 < 2){
         console.log('corredor2 avanza')
         avanzar2.style.width=`${seleccion[1].kms}em`;
        if(frenada == 3){
         seleccion[1].derrape();
         corredores.innerHTML = `<img class="peque" src='/JUEGOCARRERAS/img/${seleccion[0].nombre}.png' alt=''><img class="peque" src='/JUEGOCARRERAS/img/${seleccion[1].nombreFrenada}.png' alt=''></img>`;
         avanzar2.style.width =`${seleccion[1].kms}em`;
         contadorsuper2++;
         setTimeout ( ()=>{
         corredores.innerHTML = `<img class="peque" src='/JUEGOCARRERAS/img/${seleccion[0].nombre}.png' alt=''><img class="peque" src='/JUEGOCARRERAS/img/${seleccion[1].nombre}.png' alt=''></img>`;
         },500);
         console.log(contadorsuper2);
        }
     }

    if(seleccion[random].kms >= 25){
        console.log('ganador')
        setTimeout(()=>{
            ganador.innerHTML = `<img id="ganador" src='.../img/${seleccion[random].nombre}.gif' alt=''>`;
            nombreganador.innerHTML = seleccion[random].nombre;
        screenSwitch('pantalla4');
            
        },300);
    };

};