// You run an insanely profitable business making gourmet tacos for cats. Given an object that represents the inventory of your company,
// tacoCatInc, add a method currentInventory to your object that returns the current value of your company's inventory.

// Then, add a sale method that takes an order object, returns the price of the order, updates the inventory of the purchased items,
// and adds the price of the order to the company's cash property.

// Heads up: This problem is a bit more involved than anything you'd see on an admissions assessment or interview.
// Besides being a fun challenge, it's intended to show how you can use objects and their methods to store and change state.

let solveCount = 2;

let tacoCatInc = {
    gourmetShell: {
        'hard treat shell': { cost: 2, quantity: 100 },
        'soft treat shell': { cost: 1.5, quantity: 100 }
    },

    gourmetFishFilling: {
        'salmon': { cost: 5, quantity: 100 },
        'tuna': { cost: 5.5, quantity: 100 },
        'sardines': { cost: 1.5, quantity: 100 }
    },

    gourmetVeggie: {
        'cat grass': { cost: 1, quantity: 100 }
    },

    gourmetSeasoning: {
        'cat nip': { cost: 0.5, quantity: 100 },
        'treat dust': { cost: 0.1, quantity: 100 }
    },

    cash: 0,

    currentInventory: () => {
        debugger;
        let totalValue = 0;
        for (let option in tacoCatInc) {
            if (typeof tacoCatInc[option] !== "function" && option !== "cash") {
                //snag the individual ingredients and add their amounts to the total
                for (let ingredient in tacoCatInc[option]) {
                    let ingredientObj = tacoCatInc[option][ingredient];
                    totalValue += (ingredientObj.cost * ingredientObj.quantity);
                }
            }
        } return totalValue
    },

    sale: (order) => {
        let total = 0;
        for (let item in order) {
            let purchased = order[item];
            for (let option in tacoCatInc)
            //if we chose this particular option...    
            if (option === item) {
                    for (let ingredient in tacoCatInc[option]) {
                        let ingredientObj = tacoCatInc[option][ingredient];
                        if (ingredient === purchased) {
                            total += ingredientObj.cost;
                            ingredientObj.quantity--;
                        }
                    }
                }
        } 
        tacoCatInc.cash += total;
        return total;
    }
}

tacoCatInc.currentInventory(); // => 1710

// let order = {
//     gourmetShell: 'hard treat shell',
//     gourmetFishFilling: 'salmon'
// };

// tacoCatInc.sale(order)

// tacoCatInc.sale(order); // => 7
// tacoCatInc.sale(order); // => 7

// tacoCatInc.gourmetFishFilling.tuna.quantity; // => 98
// tacoCatInc.cash; // => 14

// tacoCatInc.currentInventory(); // => 1696