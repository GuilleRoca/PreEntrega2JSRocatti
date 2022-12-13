const ordenIndice = parseInt(prompt(`Seleccione como desea ordenar los artículos\nIngrese: \n1 - Si desea ordenar los precios de menor a mayor\n2 - Si desea ordenar los precios de mayor a menor`))

const catalogoOrdenado = (array) => {
    const catalogoReduce = array.reduce ((acc,element) => {
        return acc + `\nID: ${element.id} - ${element.producto} - Precio: $${element.precio}`
    },"")
    alert(`Nuestro catálogo está compuesto por los siguientes artículos:\n${catalogoReduce}`)
}


let orderArray = [...productos]

if (ordenIndice == 1){
    orderArray.sort((a,b) => a.precio - b.precio);
    catalogoOrdenado(orderArray)
}else if(ordenIndice == 2){
    orderArray.sort((a,b) => b.precio - a.precio);
    catalogoOrdenado(orderArray)
}else{
    alert(`Seleccionó un valor incorrecto\nVuelva a intentarlo`)
}