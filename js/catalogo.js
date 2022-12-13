const catalogoProductos = (array) => {
    const catalogoReduce = array.reduce ((acc,element) => {
        return acc + `\nID: ${element.id} - ${element.producto} - Precio: $${element.precio}`
    },"")
    alert(`Nuestro catálogo está compuesto por los siguientes artículos:\n${catalogoReduce}`)
}
catalogoProductos(productos)
