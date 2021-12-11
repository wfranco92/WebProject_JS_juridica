/************** VALOR MEDIA ABSOLUTO********************** */
function vlrMediaAbs(){

    const valores= document.querySelectorAll("input[type='number']");  // se almacenan todos los valores de los campos input text de la tabla.... este toma todos los valores, hasta los vacios.

    let mediana=0;
    let values=[];
    valores.forEach((item)=> {          //funcion foreach para guardar en un array todos los datos de "valores", pero solo se guardan los que sean diferntes de vacio, es decir solo los que se ingreso un valor.
        if(item.value!==""){
            values.push(Number(item.value));
        }

    });
    mediana=calcMediana(values);  

    if(values.length %2 != 0){   // condicional para evaluar si la cantidad de datos del array values es par o impar para aplicar formula segun corresponda.

        for(let i=1;i<values.length+1;i++){  // ciclo para asignar puntaje a cantidades impares
            document.getElementById(`resp${i}`).value=puntajeImpar(mediana,values[i-1]);
        }
    }else{    // ciclo para asignar puntaje a cantidades pares
        
        let Vme= calcVme(values, mediana);   // calculo de Vme, la cual es el valor inmediatametne inferior a la mediana dentro del array de datos.

        for(let i=1;i<values.length+1;i++){
            document.getElementById(`resp${i}`).value=puntajePar(values[i-1], Vme);
        }
    }
    
}

function puntajeImpar(mediana, valor){   // funcion para asignar puntajes a cantidades impares del array values[]
    let puntos=(1-(Math.abs((mediana-valor)/mediana)))*60
    return puntos;
}

function puntajePar(valor, Vme){  // funcion para asignar puntajes a cantidades pares del array values[]
    let puntos=(1-(Math.abs((Vme-valor)/Vme)))*60
    return puntos;
}

function calcMediana(values){  // funcion para hallar la mediana de una estructura de datos... array values. devuelve la mediana sea con una cantidad de datos en par o impar.
    values.sort(function(a,b){
    return a-b;
  });

  if(values.length ===0) return 0

  var half = Math.floor(values.length / 2);

  if (values.length % 2)
    return values[half];
  else

    return (values[half - 1] + values[half]) / 2.0;
    
}

function calcVme(values, mediana){   // funcion para hallar el Vme, el cual es el valor inmediatamente inferor a la mediana.
    let Vme=0;
    for(let i = 0; i<values.length; i++){
        if(values[i]>mediana){
            Vme = values[i-1];
            return Vme;
        } 
    }
}

/* *************media geometrica**************/
function mediaGeometrica(){

    const valores= document.querySelectorAll("input[type='number']");
    let values=[];
    valores.forEach((item)=> {
        if(item.value!==""){
            values.push(Number(item.value));
        }
    });

    let mediageometrica = mgeometrica(values);

    for(let i=1;i<values.length+1;i++){  

        document.getElementById(`resp${i}`).value=puntajeMediaGeo(mediageometrica, values[i-1]);
    }

}

function puntajeMediaGeo(mediageometrica, values){

    return 60*(1-(Math.abs(mediageometrica-values)/mediageometrica));
}


function mgeometrica(values){
    let mgeo=0;
    let multiplicacion=1;
    for(let i=0;i<values.length;i++){
        multiplicacion*=values[i];
    }
        mgeo= Math.pow(multiplicacion, 1/values.length);
        console.log(mgeo);
    return mgeo;
}

/*funciones para establecer el src del iframe */
function mediavlrabs(){
    document.getElementById("iframeresult").setAttribute("src", "mediavlrabs.html");
}

function mediageometrica(){
    document.getElementById("iframeresult").setAttribute("src", "mediageometrica.html");
}


