
// ================================================================
// ACTIVITY
// ================================================================

// ================================================================
// Part 1: Basic Types
// ================================================================

const numberOne: number = 1;
const isActive: boolean = true;
const name: string = "Jayjay Tirol";
const numbers: number[] = [1, 2, 3, 4, 5];

function greet(person: string): string {
    return `Hello, ${person}`;
}

console.log(numberOne);
console.log(isActive);
console.log(name);
console.log(numbers);

console.log(greet(name));


// ================================================================
// Part 2: Order
// ================================================================

const itemName: string = "Burger";
const price: number = 150;
const quantity: number = 2;

const total: number = price * quantity;

console.log(`Total: ₱${total}`);


// ================================================================
// Part 3: Order Condition
// ================================================================

if (total < 100) {
    console.log("Small order");
} else if (total >= 100 && total <= 299) {
    console.log("Regular order");
} else {
    console.log("Big order");
}


// ================================================================
// Part 4: Cart
// ================================================================

const cart = [
    { name: "Adobo", price: 60, qty: 2 },
    { name: "Juice", price: 25, qty: 1 }
];

console.log("--- Cart List ---");

for (const item of cart) {
    console.log(`${item.name} - ₱${item.price}`);
}


// ================================================================
// Part 5: Cart Subtotal
// ================================================================

let cartSubtotal: number = 0;

for (const item of cart) {
    cartSubtotal += item.price * item.qty;
}

console.log(`Cart Subtotal: ₱${cartSubtotal}`);


// ================================================================
// Part 6: Countdown
// ================================================================

console.log("--- Countdown ---");

let count: number = 5;

while (count >= 1) {
    console.log(count);
    count--;
}


// ================================================================
// Part 7: Functions
// ================================================================

function getLineTotal(
    price: number,
    qty: number
): number {
    return price * qty;
}

function applyDiscount(
    total: number,
    isStudent: boolean
): number {
    if (isStudent) {
        return total * 0.90;
    }

    return total;
}


// ================================================================
// Part 8: Receipt
// ================================================================

function printReceipt(
    customer: string,
    cart: { name: string; price: number; qty: number }[],
    isStudent: boolean
): void {

    console.log("\n================ RECEIPT ================");
    console.log(`Customer: ${customer}`);
    console.log("----------------------------------------");

    for (const item of cart) {

        const lineTotal: number =
            getLineTotal(item.price, item.qty);

        console.log(
            `${item.name} x${item.qty} @ ₱${item.price} = ₱${lineTotal}`
        );
    }

    console.log("----------------------------------------");

    const subtotal: number = cartSubtotal;

    const discountAmount: number =
        isStudent ? subtotal * 0.10 : 0;

    const finalTotal: number =
        applyDiscount(subtotal, isStudent);

    console.log(`Subtotal: ₱${subtotal}`);
    console.log(
        `Student Discount (10%): -₱${discountAmount}`
    );
    console.log(`Final Total: ₱${finalTotal}`);

    console.log("========================================");
}


// ================================================================
// Print Receipt
// ================================================================

printReceipt("Jayjay Tirol", cart, true);

