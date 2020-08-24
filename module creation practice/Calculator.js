class Calculator {

    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    add() {
        return this.a + this.b;
    }
    sub() {
        if (this.a >= this.b) {
            return this.a - this.b;
        } else {
            return this.b - this.a;
        }

    }

    mul() {
        return this.a * this.b;
    }

    div() {
        return this.a % this.b;
    }



}

module.exports = Calculator;