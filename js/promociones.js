
function articulosPromocion (array) {
    let promociones = `Artículos a precios promocionales \ncon el 15% de descuento`
    for (let i = 0; i < array.length; i++){
        if (array[i].oferta){
            promociones += `\n${array[i].producto} - Antes $${array[i].precio} - AHORA $${array[i].precio *0.85}`
        }
    }
    return promociones
}

alert(articulosPromocion(productos))