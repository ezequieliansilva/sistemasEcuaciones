// principal.js

let incognitas = [];
let aciertos = 0;
let errores = 0;
function generarIncognitas(){
    i = 0;
    incognitas= [];
    while(i < 6)
    {
        let num = Math.floor(Math.random() * 8) + 1;
        while(incognitas.includes(num)){
            num = Math.floor(Math.random() * 8) + 1;
        }
        incognitas.push(num);
        i++;
    }
    return incognitas;
}
function generarEcuacion(x,y) {
    const abso1x = Math.floor(Math.random() * 10) + 1;
    const abso1y = Math.floor(Math.random() * 10) + 1;
    const abso1 = x * abso1x + y * abso1y;
    const abso2x = Math.floor(Math.random() * 10) + 1;
    const abso2y = Math.floor(Math.random() * 10) + 1;
    const abso2 = x * abso2x + y * abso2y;
    return [x, y, abso1, abso2, abso1x, abso1y, abso2x, abso2y];
}

function llenarEcuas(ecuacion,P){
    let span = "<span style='color: white;'>7</span>";
    document.getElementById(P).innerHTML = ecuacion[4]+"x + "+span+ecuacion[5]+"y = "+ecuacion[2]+"<br>"+ecuacion[6]+"x + "+ecuacion[7]+"y = "+ecuacion[3]    ;
}

function descativar(id){
    
    if (verificar(id)){
        document.getElementById(id).innerHTML = "<img src='bomba.png'>";
    }
    else{
        document.getElementById(id).style.backgroundColor = "green";
    }
    
    if (aciertos == 3 && errores == 0){
        alert("Felicidades has ganado");
    }
    if (errores == 3){
        alert("Lo siento has perdido");
        alert("Las casas eran: x"+incognitas[1]+" y"+incognitas[0]+" , x"+incognitas[3]+" y"+incognitas[2]+" , x"+incognitas[4]+" y"+incognitas[5]);
    }
}

function verificar(id){
    if (aciertos < 3 && errores < 3){
        if (id == incognitas[1].toString() + incognitas[0].toString() || id == incognitas[3].toString() + incognitas[2].toString() || id == incognitas[5].toString() + incognitas[4].toString()){
            aciertos++;
            return true;
        }
        errores++;
        return false;
        
    }

    
}

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Generar dos números aleatorios entre 1 y 100 y mostrarlos en la consola
    incognitas = generarIncognitas();
    ecuaciones = generarEcuacion(incognitas[0],incognitas[1])       
    llenarEcuas(ecuaciones,"ecua1");
    ecuaciones = generarEcuacion(incognitas[2],incognitas[3])
    llenarEcuas(ecuaciones,"ecua2");
    ecuaciones = generarEcuacion(incognitas[4],incognitas[5])
    llenarEcuas(ecuaciones,"ecua3");
    console.log(incognitas);
    

        
        
});