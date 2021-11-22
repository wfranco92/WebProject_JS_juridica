const user=document.getElementById("user");
const pass=document.getElementById("password");
const btnSend=document.getElementById("btnsubmit");

btnSend.addEventListener("click", (e) =>{
    if(user.value=="Admin" && pass.value=="Solu2105"){
        return true;
    }
    else{
        
        //alert("Verifique credenciales de acceso")
        document.getElementById("msgError").style.display="block";
        e.preventDefault();
        return false;
    }
});