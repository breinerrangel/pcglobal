export function rotar(){
    if(index<imagenes.length){
        imagenes_carrusel.src=imagenes[index]
        index++

    }
    else{
        index=0
    }
    

}
const imagenes=[
    "../imagenes/carrusel/gaming-g495ad0dd6_640.jpg",
    "../imagenes/carrusel/keyboard-g30f11ec3b_1280.jpg"
]
let index=0


setTimeout(rotar,2000)