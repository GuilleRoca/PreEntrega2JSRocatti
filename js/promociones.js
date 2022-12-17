
function articulosPromocion (array) {  
    const promoDetalle = array.filter((promo) => promo.oferta === true).reduce ((acc,element) => {
        return acc + `\nID: ${element.id} - ${element.producto} - Precio: $${element.precio}`
    },"")
    return `Artículos a precios promocionales \ncon el 15% de descuento\n${promoDetalle}`
}

alert(articulosPromocion(productos))