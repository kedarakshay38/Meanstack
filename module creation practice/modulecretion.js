const calculator = require('./Calculator');

class Calprogram {

    static cal() {

        let obj1 = new calculator(12, 23);
        console.log(obj1.add());
        console.log(obj1.mul());
        console.log(obj1.div());
        console.log(obj1.sub());
    }
}

Calprogram.cal();