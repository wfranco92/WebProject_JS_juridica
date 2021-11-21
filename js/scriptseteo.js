(function seteo(){

    let liquidez = localStorage.getItem("liquidez");
    let endeudamiento = localStorage.getItem("endeudamiento");
    let razonCobertura = localStorage.getItem("razonCobertura");
    let capitalTrabajo = localStorage.getItem("capitalTrabajo");
    let rentaSobrePatri = localStorage.getItem("rentaSobrePatri");
    let rentaActivo = localStorage.getItem("rentaActivo");
    

    localStorage.clear();

    document.getElementById("liquidez1").value=""+liquidez;
    document.getElementById("nivelEndeudamiento1").value=""+endeudamiento;
    document.getElementById("razonCobertura1").value=""+razonCobertura;
    document.getElementById("capitalTrabajo1").value=""+capitalTrabajo;
    document.getElementById("rentabilidadPatrimonio1").value=""+rentaSobrePatri;
    document.getElementById("rentabilidadActivo1").value=""+rentaActivo;
    })();