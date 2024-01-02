

const products = [
    { id: "1", name: "Buzo gris oscuro", price: 4000, category: "buzos", img:"", stock: 5, description:"Talle L, 100% algodón"},
    { id: "2", name: "Buzo negro", price: 3500, category: "buzos", img:"", stock: 2, description:"Talle M, 100% algodón"},
    { id: "3", name: "Bandolera c/monedero", price: 2700, category: "Accesorios", img:"", stock: 7, description:"Correa ajustable, cuerina"},
    { id: "4", name: "Remera amarilla", price: 3000, category: "remeras", img:"", stock: 1, description:"Talle M"}
]

export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products.find(prod => prod.category === categoryId))
        }, 500)
    })
}