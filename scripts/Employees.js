import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li data-id="${employee.id}"
                data-type="employee"
                >${employee.name}</li>`
    }

    html += "</ul>"

    return html
}


// adding a click event listener that presents an alert box showing how many products an employee has sold when their name is clicked.

const employeeOrders = (id) => {
    let fulfilledOrders = 0

    for (const order of orders) {
        if (order.employeeId === parseInt(id)) {
            // Increment the number of fulfilled orders
            fulfilledOrders ++
        }
    }

    // Return how many orders were fulfilled
    return fulfilledOrders
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "employee") {
            const employeeId = itemClicked.dataset.id

            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {

                    const orderCount = employeeOrders(employeeId)

                    window.alert(`${employee.name} sold ${orderCount} products `)
                }
            }
        }
    }
)
