class PaymentStrategy {
    pay(amount) {
        throw new Error("Method not implemented");
    }
}

class CreditCardPayment extends PaymentStrategy {
    constructor(cardNumber, cvv) {
        super();
        this.cardNumber = cardNumber;
        this.cvv = cvv;
    }

    pay(amount) {
        console.log(`Paid $${amount} with credit card ${this.cardNumber.slice(-4)}`);
        return true;
    }
}

class PayPalPayment extends PaymentStrategy {
    constructor(email) {
        super();
        this.email = email;
    }

    pay(amount) {
        console.log(`Paid $${amount} with PayPal (${this.email})`);
        return true;
    }
}

class ShoppingCart {
    constructor(paymentStrategy) {
        this.items = [];
        this.paymentStrategy = paymentStrategy;
    }

    checkout() {
        const total = this.calculateTotal();
        return this.paymentStrategy.pay(total);
    }

    calculateTotal() {
        return 100; // Simplified
    }
}

// Usage - interchangeable strategies
const cart1 = new ShoppingCart(new CreditCardPayment("1234-5678-9012-3456", "123"));
cart1.checkout(); // "Paid $100 with credit card 3456"

const cart2 = new ShoppingCart(new PayPalPayment("user@example.com"));
cart2.checkout(); // "Paid $100 with PayPal (user@example.com)"
let fuel = 100;

while (fuel > 0) {
    console.log("Driving... Fuel left: " + fuel);
    fuel = fuel - 25; // Decrease fuel
}
console.log("Out of gas!");
console.log(fuel);