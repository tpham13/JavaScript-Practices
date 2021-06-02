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

/* You are given a list of strings orders. Each element in orders starts with either "P" meaning pickup or "D" meaning delivery followed by the order id. For example, "P12" means pick up order 12.

Return whether orders is valid given the following rules:

A delivery cannot happen for an order before pickup
Every pickup must be delivered
An order that's already been picked up and delivered cannot be picked up or delivered again

Constraints:

0 ≤ n ≤ 100,000 where n is the length of orders */