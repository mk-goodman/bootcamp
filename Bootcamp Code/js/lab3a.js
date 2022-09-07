let shoes_cost = 25.00
let jeans_cost = 45.00
let hats_cost = 5.00

let VAT = 0.2

let RandDay = Math.floor (Math.random()*7) +1 //generate random number between 1 and 7

switch (RandDay) {

case 1: var x = 'Sunday'; var y = 20; break;
case 2: var x = 'Monday'; var y = 0; break;
case 3: var x = 'Tuesday'; var y = 0; break;
case 4: var x = 'Wednesday'; var y = 2.5; break;
case 5: var x = 'Thursday'; var y = 0; break;
case 6: var x = 'Friday'; var y = 0; break;
case 7: var x = 'Saturday'; var y = 5; break;

}

let ItemNum = Math.floor (Math.random()*3) +1 //generate random number between 1 and 3

switch (ItemNum) {

case 1: console.log ('The chosen item is Shoes'); break;
case 2: console.log ('The chosen item is Jeans'); break;
case 3: console.log ('The chosen item is Hats'); break;

}

let RandQuantity = Math.floor (Math.random()*100) +1 //generate random number between 1 and 100

console.log ('The random quantity of items is '+RandQuantity)
console.log ('')

if (ItemNum < 2) { 
    
    console.log ('Item = Shoes')
    console.log ('Unit Cost = £'+(shoes_cost).toFixed(2))
    console.log ('Item Quantity = '+RandQuantity)
    console.log ('Delivery Day = '+x)
    console.log ('Unit cost plus VAT = £'+(shoes_cost+(shoes_cost*VAT)).toFixed(2))
    console.log ('Extra Delivery Charge = £'+(y).toFixed(2))
    var z = (RandQuantity*(shoes_cost+(shoes_cost*VAT)).toFixed(2))
    console.log ('Total Charge before Delivery & Postage Fees = £'+(z).toFixed(2))

        if (z<500) {
            console.log('Postage Fee = £'+(z*0.2).toFixed(2))
            console.log('Total Cost = £'+(z+(z*0.2)+y).toFixed(2))
                    }
        else if (z<1000) {
            console.log('Postage Fee = £'+(z*0.1).toFixed(2))
            console.log('Total Cost = £'+(z+(z*0.1)+y).toFixed(2))
                           }
        else if (z>1000) {
            console.log('Postage Fee = £0.00')
            console.log('Total Cost = £'+(z+(z*0.0)+y).toFixed(2))
                          }

}

else 

if (ItemNum < 3) { 
    
    console.log ('Item = Jeans')
    console.log ('Unit Cost = £'+(jeans_cost).toFixed(2))
    console.log ('Item Quantity = '+RandQuantity)
    console.log ('Delivery Day = '+x)
    console.log ('Unit cost plus VAT = £'+(jeans_cost+(jeans_cost*VAT)).toFixed(2))
    console.log ('Extra Delivery Charge = £'+(y).toFixed(2))
    var z = (RandQuantity*(jeans_cost+(jeans_cost*VAT)).toFixed(2))
    console.log ('Total Charge before Delivery & Postage Fees = £'+(z).toFixed(2))

        if (z<500) {
            console.log('Postage Fee = £'+(z*0.2).toFixed(2))
            console.log('Total Cost = £'+(z+(z*0.2)+y).toFixed(2))
                    }
        else if (z<1000) {
            console.log('Postage Fee = £'+(z*0.1).toFixed(2))
            console.log('Total Cost = £'+(z+(z*0.1)+y).toFixed(2))
                           }
        else if (z>1000) {
            console.log('Postage Fee = £0.00')
            console.log('Total Cost = £'+(z+(z*0.0)+y).toFixed(2))
                          }

}

else 

if (ItemNum < 4) { 
    
    console.log ('Item = Hats')
    console.log ('Unit Cost = £'+(hats_cost).toFixed(2))
    console.log ('Item Quantity = '+RandQuantity)
    console.log ('Delivery Day = '+x)
    console.log ('Unit cost plus VAT = £'+(hats_cost+(hats_cost*VAT)).toFixed(2))
    console.log ('Extra Delivery Charge = £'+(y).toFixed(2))
    var z = (RandQuantity*(hats_cost+(hats_cost*VAT)).toFixed(2))
    console.log ('Total Charge before Delivery & Postage Fees = £'+(z).toFixed(2))

        if (z<500) {
            console.log('Postage Fee = £'+(z*0.2).toFixed(2))
            console.log('Total Cost = £'+(z+(z*0.2)+y).toFixed(2))
                    }
        else if (z<1000) {
            console.log('Postage Fee = £'+(z*0.1).toFixed(2))
            console.log('Total Cost = £'+(z+(z*0.1)+y).toFixed(2))
                           }
        else if (z>1000) {
            console.log('Postage Fee = £0.00')
            console.log('Total Cost = £'+(z+(z*0.0)+y).toFixed(2))
                          }
}