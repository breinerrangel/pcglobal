
document.querySelector('.campo span').addEventListener('click', e => {
    const passwordInput = document.querySelector('#password');
    if (e.target.classList.contains('show')) {
        e.target.classList.remove('show');
        e.target.textContent = 'Ocultar';
        passwordInput.type = 'text';
    } else {
        e.target.classList.add('show');
        e.target.textContent = 'Mostrar';
        passwordInput.type = 'password';
    }
});
const usuarios=[{
    nombre:"aron",
    usuario:"hergon70",
    contraseña:"100565"
},
{
    nombre:"pepito",
    usuario:"pepito123",
    contraseña:"123456"

},
{
    nombre:"breiner",
    usuario:"breiner70",
    contraseña:"1005653739"


}
]
let password=document.getElementById("password")
let error=document.getElementById("error")
let user=document.getElementById("user")

user.addEventListener("click",()=>{
    
})
let login=document.getElementById("login")
login.addEventListener("click",()=>{  
    if(usuarios.find(usuarios=>usuarios.usuario==user.value)){   
        
        indice=usuarios.findIndex(usuarios=>usuarios.usuario==user.value)
        user.value=""
       if(usuarios[indice].contraseña==password.value){
           
           password.value=""
           location.href="./contenido.html"
       }
       else{
        mostar_error()
       }
       
    }
    else{
        mostar_error()
        
    }
    
    
    
})
function mostar_error(){
    error.style.display="block"
    setTimeout(()=>{
        error.style.display="none"
            
    
    },2000)
      
}
    
       
