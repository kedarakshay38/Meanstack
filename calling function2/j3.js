class Calcuinside {

    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    add() {

        return this.a + this.b;

    }

    static multiply(x, y) {
        return x * y;
    }

    static cal() {

        const obj = new Calcuinside(4, 8);
        console.log(obj.add());
        console.log(Calcuinside.multiply(4, 5));
        // console.log(multiply(3, 4));

    }
}


Calcuinside.cal();