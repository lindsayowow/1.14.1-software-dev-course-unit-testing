
function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') {
        return null;
    } else if (discountRate < 0 || discountRate > 1) {
        return null;
    } else {
        return ((1 - discountRate) * price);
    }
}

function filterProducts(products, callback) {
    if (!Array.isArray(products) || typeof callback !== 'function') {
        return "Please try again with a correctly formatted product list array and callback function.";
    } else {
        return products.filter(callback);
    }
};

function sortInventory(inventory, key) {
    if (!Array.isArray(inventory) || typeof key !== 'string') {
        return "Please try again with a correctly formatted inventory array and key.";
    } else {
        return inventory.sort((a, b) => {
            if (a[key] < b[key]) return -1;
            if (a[key] > b[key]) return 1;
            return 0;
        });
    };
}

module.exports = { calculateDiscount, filterProducts, sortInventory };