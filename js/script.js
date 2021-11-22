  
    var Klance = 1;
    let filas=0;
    let valorLance=0;
    let valorContrato=0;
    let valorRealContrato=0;
    let artificialBajo=0;
    
    
    //alert(filas);
    function crear_tabla(){

    filas=seteo();
    function seteo(){
        
            filas=document.getElementById("proponentes").value;
            valorLance=document.getElementById("valorLance").value;
            valorContrato=document.getElementById("valorContrato").value;
            valorRealContrato=document.getElementById("valorRealContrato").value;
        return filas;
    }

    artificialBajo=valorRealContrato*(0.6);
    //alert("en funcion "+filas);
    //var filas = document.getElementById("proponentes").value;
    
    let txt=" ";
    
    txt+="<table>";
        
    for (let i = 0; i<21; i++){

        txt+="<tr>";
        
        for(let columnas=0;columnas<=filas;columnas++){

            if (i == 0 && columnas!=filas){
                txt+="<td>";
                txt+="Proponente "+(columnas+1);
                txt+="</td>";
            }
            else if (i == 0 && columnas==filas){
                txt+="<td>";
                txt+=" ";
                txt+="</td>";
            }
            else if (columnas==filas){
                txt+="<td>";
                txt+='<button onclick="lance()" style="background-color: tomato; color: white;" >Lance</button>';
                txt+="</td>";
            }
            else{
                txt+="<td>";
                txt+="<input type='text' class="+"'"+i+"'"+">";
                txt+="</td>";
            }

        }
        txt+="</tr>";
        
        }
        txt+="</table>";
    //alert(txt);
    document.getElementById("demo").innerHTML=txt;
    }
    
   function lance(){

    //let filas = document.getElementById("proponentes").value;
    //var valorLance=document.getElementById("valorLance").value;
    //var valorContrato=document.getElementById("valorContrato").value;
    //alert("filas" + filas);
    //alert("lance "+ valorLance);
    //alert("contrato" + valorContrato);
    let lances = [];
    let copylances = [];
    let posicion=0;
            
        //alert(valorLance);
        for(let i = 0; i< filas; i++){
            copylances[i] = lances[i]=document.getElementsByClassName(""+Klance)[i].value;
            if(lances[i]>(valorContrato-valorLance)){  
                //alert("proponente "+(i+1)+" oferto mal");
                //alert("proponente "+(i+1)+" oferto mal");//lances[i].style.backgraoundColor=red;
                document.getElementsByClassName(""+Klance)[i].style.backgroundColor = "#FF0000";
            }else if(lances[i]=="no oferta"){
                document.getElementsByClassName(""+Klance)[i].style.backgroundColor = "#FF0000";
                lances[i]=999999999;
            }else if(lances[i]<artificialBajo){
                document.getElementsByClassName(""+Klance)[i].style.backgroundColor = "#FFFF00";
            }
        }
        let lances2=lances.sort(function(a, b){return a - b});

        for (let i = 0; i < filas; i++){
            
            if(lances2[0]==copylances[i]){
                posicion=i+1;  
            }
        }
        document.getElementById("resul").style.visibility ="visible";
        document.getElementById("resul").innerHTML="Menor oferta: "+lances2[0]+" para proponente: "+ posicion ;
        Klance++;
        valorContrato=lances2[0];
        alert("Proximo Lance "+ valorContrato);

    }
