//    Shopping Cart Object


function createShoppingCart() {
    var items = [];
    var discount = 0;

    return {

        addItem: function (item) {
            for (var i = 0; i < items.length; i++) {
                if (items[i].id === item.id) {
                    items[i].quantity += item.quantity;
                    return;
                }
            }
            items.push(item);
        },

        getItems: function () {
            return items;
        },

        updateQuantity: function (id, quantity) {
            for (var i = 0; i < items.length; i++) {
                if (items[i].id === id) {
                    items[i].quantity = quantity;
                }
            }
        },

        removeItem: function (id) {
            var result = [];
            for (var i = 0; i < items.length; i++) {
                if (items[i].id !== id) {
                    result.push(items[i]);
                }
            }
            items = result;
        },

        getTotal: function () {
            var total = 0;
            for (var i = 0; i < items.length; i++) {
                total += items[i].price * items[i].quantity;
            }
            if (discount > 0) {
                total -= total * discount / 100;
            }
            return Number(total.toFixed(2));
        },

        getItemCount: function () {
            var count = 0;
            for (var i = 0; i < items.length; i++) {
                count += items[i].quantity;
            }
            return count;
        },

        isEmpty: function () {
            return items.length === 0;
        },

        applyDiscount: function (code, percent) {
            discount = percent;
        },

        clear: function () {
            items = [];
            discount = 0;
        }
    };
}


//   Example Usage

var cart = createShoppingCart();

cart.addItem({ id: 1, name: "Laptop", price: 999, quantity: 1 });
cart.addItem({ id: 2, name: "Mouse", price: 29, quantity: 2 });
cart.addItem({ id: 1, name: "Laptop", price: 999, quantity: 1 });

console.log(cart.getItems());

cart.updateQuantity(1, 3);
cart.removeItem(2);

console.log(cart.getTotal());      // 2997
console.log(cart.getItemCount());  // 3
console.log(cart.isEmpty());       // false

cart.applyDiscount("SAVE10", 10);
console.log(cart.getTotal());      // 2697.30

cart.clear();
console.log(cart.isEmpty());       // true
