// Write Tests: Use Jest to write unit tests for each of the method(s). 
// ■ Ensure they include positive, negative, and edge cases. 

const { calculateDiscount, filterProducts, sortInventory } = require('../product-inventory/productInventory.js');

describe("calculateDiscount", function () {
    test("applies a valid discount rate", () => { // positive test
        expect(calculateDiscount(100, 0.1)).toBe(90);
    });

    test("handles an invalid discount rate gracefully", () => { // negative test
        expect(calculateDiscount(100, -0.1)).toBe(null);
    });

    test("handles edge case with price of 0", () => { // edge case test
        expect(calculateDiscount(0, 0.2)).toBe(0);
    });
});

describe("filterProducts", function () {
    const products = [
        { name: "Laptop", price: 1200, inStock: true },
        { name: "Mouse", price: 25, inStock: false },
        { name: "Keyboard", price: 75, inStock: true },
        { name: "Monitor", price: 300, inStock: true },
        { name: "USB Cable", price: 10, inStock: false }
    ];
    const isCheap = (product) => {
        return product.price < 100;
    };
    const isInStock = (product) => {
        return product.inStock === true;
    };
    const badFunction = (5 + 6);
    const badArray = "I love JavaScript.";
    const emptyArray = [];

    test("filters for only products under 100", () => { // positive test
        expect(filterProducts(products, isCheap)).toEqual([
            { name: "Mouse", price: 25, inStock: false },
            { name: "Keyboard", price: 75, inStock: true },
            { name: "USB Cable", price: 10, inStock: false }
        ]);
    });

    test("filters for only in stock products", () => { // positive test
        expect(filterProducts(products, isInStock)).toEqual([
            { name: "Laptop", price: 1200, inStock: true },
            { name: "Keyboard", price: 75, inStock: true },
            { name: "Monitor", price: 300, inStock: true }
        ]);
    });

    test("incorrect function should fail gracefully", () => { // negative test
        expect(filterProducts(products, badFunction)).toEqual(
            "Please try again with a correctly formatted product list array and callback function."
        );
    });

    test("incorrect product array formatting should fail gracefully", () => { // negative test
        expect(filterProducts(badArray, isInStock)).toEqual(
            "Please try again with a correctly formatted product list array and callback function."
        );
    });

    test("filters an empty array with a valid function to show an empty array", () => { // edge case test
        expect(filterProducts(emptyArray, isInStock)).toEqual([]);
    });
});

describe("sortInventory", function () {
    const inventory = [
        { name: "Laptop", price: 1200 },
        { name: "Mouse", price: 25 },
        { name: "Keyboard", price: 75 }
    ];
    const badArray = "I love JavaScript.";

    test("sorts inventory by name A to Z", () => { // positive test
        expect(sortInventory(inventory, "name")).toEqual([
            { name: "Keyboard", price: 75 },
            { name: "Laptop", price: 1200 },
            { name: "Mouse", price: 25 }
        ]);
    });
    test("sorts inventory by price low to high", () => { // positive test
        expect(sortInventory(inventory, "price")).toEqual([
            { name: "Mouse", price: 25 },
            { name: "Keyboard", price: 75 },
            { name: "Laptop", price: 1200 }
        ]);
    });

    test("Fails gracefully when a bad array format is entered", () => { // negative test
        expect(sortInventory(badArray, "price")).toEqual(
            "Please try again with a correctly formatted inventory array and key."
        );
    });

    test("Fails gracefully when a bad key format is entered", () => { // negative test
        expect(sortInventory(inventory, 5)).toEqual(
            "Please try again with a correctly formatted inventory array and key."
        );
    });

    test("Inventory order does not change when a key not in the object is entered", () => { // edge case test
        expect(sortInventory(inventory, "inStock")).toEqual([
            { name: "Mouse", price: 25 },
            { name: "Keyboard", price: 75 },
            { name: "Laptop", price: 1200 }
        ]);
    });
});