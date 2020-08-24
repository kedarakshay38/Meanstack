class Calculator {

    Calculator(a, b) {
        this.a = a;
        this.b = b;
    }

    add() {
        return this.a + this.b;

    }

}

console.log(new Calculator(12, 20).add());