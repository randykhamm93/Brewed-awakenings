import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li data-id="${product.id}"
                data-type="product"
                >${product.name}</li>`
    }

    html += "</ul>"

    return html
}


addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        // Was a product type item clicked?
        if (itemClicked.dataset.type === "product") {
            // Iterate the products 
            for (const product of products) {
                // If productId === id
                if (product.id === parseInt(itemClicked.dataset.id)) {
                    // Create window alert
                    window.alert(`${product.name} costs $${product.price.toFixed(2)}`)
                }
            }
        }
    }
)
