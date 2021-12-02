let fecha = new Date();

console.log(fecha.getMonth());

const user=document.getElementById("user");
const pass=document.getElementById("password");
const btnSend=document.getElementById("btnsubmit");

var encrypted="U2FsdGVkX19wa4etZupM2KeNrHvRrBkjMVCduXooIuA=";
var decrypted= CryptoJS.AES.decrypt(encrypted, "EncryptionKey");


btnSend.addEventListener("click", (e) =>{
    
    if(user.value=="Admin" && pass.value===decrypted.toString(CryptoJS.enc.Utf8)){
        return true;
    }
    else{
        //alert("Verifique credenciales de acceso")   
        document.getElementById("msgError").style.display="block";
        e.preventDefault();
        setTimeout(()=>{
            document.getElementById("msgError").style.display="none";
        }, 3000);
        return false;
    }
});




