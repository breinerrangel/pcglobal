import{rotar} from"./contenido.js"

rotar()
const url="https://fakestoreapi.com/products"
async function buscar(){
    let respuesta=await fetch(url)
   const datos=await respuesta.json()
   console.log(datos)
   datos.forEach(producto => {
    tarjeras.innerHTML+=` <h3>Nvidia Gerfore Rtx 3080</h3>
    <img src="https://www.pngarts.com/files/10/Nvidia-RTX-Transparent-Images.png" alt="" height="180px">
    <p>Las tarjetas gráficas GeForce RTX® 3080 Ti y RTX 3080 ofrecen el rendimiento que los jugadores anhelan,
        con tecnología de Ampere, la arquitectura RTX de 2ª generación de NVIDIA. Se han creado con núcleos RT
        de 2ª generación y núcleos Tensor de 3ª generación dedicados, multiprocesadores de streaming y memoria
        de G6X para una increíble experiencia de juego.</p>
        <p style="color: green;">$300.50</p>
        <button>comprar</button>
</div>`
    
    
    
    
   });
    
}
buscar()
let tarjeras=document.getElementById("tarjetas")

