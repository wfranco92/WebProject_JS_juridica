let integrantes=0;
let arrayActivo=[];
let arrayPasivo=[];
let arrayPasivoTotal=[];
let arrayActivoTotal=[];
let arrayUtilidadOperacional=[];
let arrayGastosInteres=[];
let arrayActivoCorriente=[];
let arrayPasivoCorriente=[];
let arrayPatrimonio=[];
let sumActivoCorriente=0;
let sumaPasivoCorriente=0;
let liquiduez=0;
let endeudamiento=0;
let razonCobertura=0;
let capitalTrabajo=0;
let rentaSobrePatri=0;
let rentaActivo=0;

function crear_tablas(){

    let txt="";

   integrantes = document.getElementById("integrantes").value;
    //alert(`numeor de tablas ${integrantes} .`);

    for (let i=0; i<integrantes;i++){
        txt+='<table>'+
        '<tr><td>Nombre participante</td><td><input type="text" id="parti'+i+'" class="inputform"></td></tr>'+
        '<tr><td colspan="2" class="col_par">Participante '+(i+1)+'</td></tr>'+
        '<tr><td>Activo Corriente</td><td><input type="number" id="activocor'+i+'" class="inputform"></td></tr>'+
        '<tr><td>Pasivo Corriente</td><td><input type="number" id="pasivocor'+i+'" class="inputform"></td></tr>'+
        '<tr><td>Pasivo Total</td><td><input type="number" id="pasivototal'+i+'" class="inputform"></td></tr>'+
        '<tr><td>Activo Total</td><td><input type="number" id="activototal'+i+'" class="inputform"></td></tr>'+
        '<tr><td>Utilidad Operacional</td><td><input type="number" id="utilidad'+i+'" class="inputform"></td></tr>'+
        '<tr><td>Gastos intereses</td><td><input type="number" id="gastos'+i+'" class="inputform"></td></tr>'+
        '<tr><td>Patrimonio</td><td><input type="number" id="patrimonio'+i+'" class="inputform"></td></tr>'+
        '<tr><td>Porcentaje de participacion</td><td><input type="number" id="participacion'+i+'" class="inputform"></td></tr>'+
    '</table>';
    }
    document.getElementById("demo").innerHTML=txt;
    document.getElementById("btncalcular").style.display="block";
}

function calcular(){
    liquidez();
    nivelEndeudamiento();
    razon_cobertura();
    capital_trabajo();
    rentabilidadPatrimonio();
    rentabilidadActivo();
    setData();
}

function liquidez(){

    for(let i=0;i<integrantes;i++){
        arrayActivo.push((document.getElementById("activocor"+i).value)*(document.getElementById("participacion"+i).value/100));
        arrayPasivo.push((document.getElementById("pasivocor"+i).value)*(document.getElementById("participacion"+i).value/100))
    }
        //alert("activo"+arrayActivo);
        //alert("pasivo"+arrayPasivo);
        arrayActivo=sumarActivo();
        arrayPasivo=sumarPasivo();
        function sumarActivo(){
            let a=0;
            for(let x =0;x<arrayActivo.length;x++){
                //alert(arrayActivo[x]);
                a+=arrayActivo[x];
                //alert("a1 "+a);
            }
            return a;
        }
        function sumarPasivo(){
            let a=0;
            for(let x =0;x<arrayPasivo.length;x++){
                //alert(arrayActivo[x]);
                a+=arrayPasivo[x];
                //alert("a2 "+a);
            }
            return a;
        }
    liquiduez=arrayActivo/arrayPasivo;
    //alert("liquidez "+ liquiduez);
}

function nivelEndeudamiento(){
    
    for(let i=0;i<integrantes;i++){
        arrayPasivoTotal.push((document.getElementById("pasivototal"+i).value)*(document.getElementById("participacion"+i).value/100));
        arrayActivoTotal.push((document.getElementById("activototal"+i).value)*(document.getElementById("participacion"+i).value/100))
    }

    arrayPasivoTotal=sumarPasivo();
    arrayActivoTotal=sumarActivo();
        function sumarPasivo(){
            let a=0;
            for(let x =0;x<arrayPasivoTotal.length;x++){
                //alert(arrayActivo[x]);
                a+=arrayPasivoTotal[x];
                //alert("a1 "+a);
            }
            return a;
        }
        function sumarActivo(){
            let a=0;
            for(let x =0;x<arrayActivoTotal.length;x++){
                //alert(arrayActivo[x]);
                a+=arrayActivoTotal[x];
                //alert("a2 "+a);
            }
            return a;
        }
    endeudamiento=arrayPasivoTotal/arrayActivoTotal;
    //alert("Nivel de Endeudamiento "+ endeudamiento);
}

function razon_cobertura(){
    for(let i=0;i<integrantes;i++){
    arrayUtilidadOperacional.push((document.getElementById("utilidad"+i).value)*(document.getElementById("participacion"+i).value/100));
    arrayGastosInteres.push((document.getElementById("gastos"+i).value)*(document.getElementById("participacion"+i).value/100))
    }
    arrayUtilidadOperacional=sumarA();
    arrayGastosInteres=sumarB();
        function sumarA(){
            let a=0;
            for(let x =0;x<arrayUtilidadOperacional.length;x++){
                //alert(arrayActivo[x]);
                a+=arrayUtilidadOperacional[x];
                //alert("a1 "+a);
            }
            return a;
        }
        function sumarB(){
            let b=0;
            for(let x =0;x<arrayGastosInteres.length;x++){
                //alert(arrayActivo[x]);
                b+=arrayGastosInteres[x];
                //alert("a2 "+a);
            }
            return b;
        }
    razonCobertura=arrayUtilidadOperacional/arrayGastosInteres;
    //alert("Razon cobertura "+ razonCobertura);
}

function capital_trabajo(){
    for(let i=0;i<integrantes;i++){
        arrayActivoCorriente.push(Number(document.getElementById("activocor"+i).value));
        arrayPasivoCorriente.push(Number(document.getElementById("pasivocor"+i).value));
    }

    arrayActivoCorriente=sumarA();
    arrayPasivoCorriente=sumarB();
        function sumarA(){
            let a=0;
            for(let x =0;x<arrayActivoCorriente.length;x++){
                //alert(arrayActivo[x]);
                a+=arrayActivoCorriente[x];
                //alert("a1 "+a);
            }
            return a;
        }
        function sumarB(){
            let b=0;
            for(let x =0;x<arrayPasivoCorriente.length;x++){
                //alert(arrayActivo[x]);
                b+=arrayPasivoCorriente[x];
                //alert("a2 "+a);
            }
            return b;
        }

    capitalTrabajo=arrayActivoCorriente-arrayPasivoCorriente;
    //alert("Capital Trabajo "+ capitalTrabajo);
}

function rentabilidadPatrimonio(){
    for(let i=0;i<integrantes;i++){
    arrayPatrimonio.push((document.getElementById("patrimonio"+i).value)*(document.getElementById("participacion"+i).value/100));
    }
    arrayPatrimonio=sumarA();
    
        function sumarA(){
            let a=0;
            for(let x =0;x<arrayPatrimonio.length;x++){
                //alert(arrayActivo[x]);
                a+=arrayPatrimonio[x];
                //alert("a1 "+a);
            }
            return a;
        }
    //let copia=arrayUtilidadOperacional;
    rentaSobrePatri=arrayUtilidadOperacional/arrayPatrimonio;
    //alert("Rentabilidad sobre patromonio "+ rentaSobrePatri);
}

function rentabilidadActivo(){
    //let copia=arrayUtilidadOperacional;
    rentaActivo=arrayUtilidadOperacional/arrayActivoTotal;
    //alert("Rentabilidad de Activo "+ rentaActivo);
}

function setData(){

localStorage.setItem( "liquidez", liquiduez );
localStorage.setItem( "endeudamiento", endeudamiento );
localStorage.setItem( "razonCobertura", razonCobertura );
localStorage.setItem( "capitalTrabajo", capitalTrabajo );
localStorage.setItem( "rentaSobrePatri", rentaSobrePatri );
localStorage.setItem( "rentaActivo", rentaActivo );

}






