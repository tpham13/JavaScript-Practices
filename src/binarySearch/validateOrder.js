class Solution {
    solve(orders) {
        let orderTracking = new Map()
        let returnValue = true
        orders.forEach((order) => {
            let operation = order.substring(0,1) // "P" or "D"
            let orderNumber = Number(order.substring(1)) // order number
            if (operation === "P") {
                // Pickup
                if(!orderTracking.has(orderNumber)) {
                  orderTracking.set(orderNumber, "P") // create the order
                } else if (orderTracking.get(orderNumber) === "P") {
                  returnValue = false // double pickup
                } else if (orderTracking.get(orderNumber) === "C") {
                  returnValue = false // order was already delivered
                }
             } else {
                // Delivery
                if(!orderTracking.has(orderNumber)) {
                  returnValue = false // there was no pickup first
                } else if (orderTracking.get(orderNumber) === "C") {
                  returnValue = false // order was already delivered
                } else if (orderTracking.get(orderNumber) === "P") {
                  orderTracking.set(orderNumber, "C")
              }
            }
           })
           orderTracking.forEach((order) => {
            if(order !== "C") {
              returnValue = false // order left undelivered
            }
           })
        return returnValue        
    }
}