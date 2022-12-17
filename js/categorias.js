function filtro (array){
    const nuevoArr = new Set (array.map((a)=>a.categoria))
    const seleccionCategoria = [...nuevoArr]

    let menuAcc = 0
    
    const menu = seleccionCategoria.reduce ((acc,element)=>{
        menuAcc++
        return acc + `\n${menuAcc} - ${element}`
    },"")

    const menuSeleccion = parseInt(prompt(`Seleccione alguna de las siguientes categorías ${menu}`)) - 1

    
    if(menuSeleccion >= 0 & menuSeleccion < seleccionCategoria.length){
        const menuDetalle = array.filter((a)=> a.categoria ==  seleccionCategoria[menuSeleccion])
        const articulosCategoria = menuDetalle.reduce ((acc,element) =>{
            return acc + `\n ${element.id} - ${element.producto} - ${element.precio}`
        },"")
        listaArticulos = `Los siguientes artículos corresponden a la categoría ${seleccionCategoria[menuSeleccion]} ${articulosCategoria}`
    }else {
        listaArticulos =  `Seleccinó un valor incorrecto \nVuelva a intentarlo`
    }
    return listaArticulos
}

alert(filtro(productos))




