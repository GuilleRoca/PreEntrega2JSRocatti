function filtro (array){
    const nuevoArr = new Set (array.map((a)=>a.categoria))
    const seleccionCategoria = [...nuevoArr]
    return seleccionCategoria;
}
function opcionesMenu (array){
    const seleccionCategoria = filtro(array)
    let menu = `Selecciones alguna de las opciones de filtrado`
    for (let i = 0; i < seleccionCategoria.length ; i++){
        menu += `\n ${i+1} - ${seleccionCategoria[i]}`
    }
    return menu;
}

const menuSeleccion = parseInt(prompt(opcionesMenu(productos))) - 1

if (menuSeleccion >= 0 && menuSeleccion < filtro(productos).length){
    let acumFor = `Los siguientes productos corresponden a la categoría ${filtro(productos)[menuSeleccion]}`
    for (let i=0 ; i < productos.length;i++){
        if(productos[i].categoria == filtro(productos)[menuSeleccion]){
            acumFor += `\nID: ${productos[i].id} - ${productos[i].producto} - Precio: $${productos[i].precio}`
        }        
    } 
    alert(acumFor)
}else {
    alert(`Seleccinó un valor incorrecto \nVuelva a intentarlo`)
}





