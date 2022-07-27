// Crea un Decorator en un arxiu que retorni una funció.
// Aquesta funció efectuarà una conversió de moneda a euros multiplicant pel coeficient de conversió del fitxer adjunt currency_conversions.json en funció de la divisa original.
// Crea una petita aplicació que calculi el cost d'uns quants Articles en euros a partir de les seves divises inicials, aplicant diferents conversions que usin el Decorator del punt anterior.



// https://mauriciogc.medium.com/javascript-patrones-de-dise%C3%B1o-en-js-estructurales-parte-ii-79b87905cefe



class Hamburger {
    constructor() {
        this._drescription = "Unknown Hamburger";
        this._price = 0;
    }
    set price(price) {
        this._price = price;
    }
    get price() {
        return this._price;
    }
    get drescription() {
        return this._drescription;
    }
    getHamburger() {
        return `You order is: ${this.description} and the price ${this.price}`;
    }
}

export default Hamburger;





import Hamburger from "./Hamburguer";
class CheeseBurger extends Hamburger {
  constructor(){
    super();
    this.description = 'Cheeseburger';
    this.price = 100;
  }
}

export default CheeseBurger;





import Hamburger from "./Hamburguer";

class BaconDoubleBurger extends Hamburger {
  constructor() {
    super();
    this.description = "Bacon Double Burger";
    this.price = 110;
  }
}
export default BaconDoubleBurger;




import Hamburger from "./Hamburguer";

class WesternBurger extends Hamburger {
  constructor(){
    super();
    this.description = 'Western Burger';
    this.price = 105;
  }
}
export default WesternBurger;




// El siguiente paso es generar el super decorador HamburgerDecorator:
import Hamburger from "./Hamburguer";

class HamburgerDecorator extends Hamburger {
  constructor(burger) {
    super();
    this.burger = burger;
  }
}
export default HamburgerDecorator;





// Por último generamos cada uno de los decoradores:
import HamburgerDecorator from "./HamburgerDecorator";

class BaconDecorator extends HamburgerDecorator {
  constructor(burger) {
    super(burger);
  }
  get description() {
    return this.burger.description + " with bacon";
  }
  get price() {
    return this.burger.price + 9;
  }
}

class HamDecorator extends HamburgerDecorator {
  get description() {
    return this.burger.description + " with ham";
  }
  get price() {
    return this.burger.price + 15;
  }
}

class MeatDecorator extends HamburgerDecorator {
  constructor(burger) {
    super(burger);
  }
  get description() {
    return this.burger.description + " with meat";
  }
  get price() {
    return this.burger.price + 20;
  }
}

class EggDecorator extends HamburgerDecorator {
  constructor(burger) {
    super(burger);
  }
  get description() {
    return this.burger.description + " with egg";
  }
  get price() {
    return this.burger.price + 12;
  }
}

class PickleDecorator extends HamburgerDecorator {
  constructor(burger) {
    super(burger);
  }
  get description() {
    return this.burger.description + " with pickle";
  }
  get price() {
    return this.burger.price + 5;
  }
}

class CheeseDecorator extends HamburgerDecorator {
  constructor(burger) {
    super(burger);
  }
  get description() {
    return this.burger.description + " with cheese";
  }
  get price() {
    return this.burger.price + 9;
  }
}

export {
  CheeseDecorator,
  BaconDecorator,
  EggDecorator,
  HamDecorator,
  MeatDecorator,
  PickleDecorator
};



// Veamos cómo se instancia:
import CheeseBurger from "./CheeseBurger";
import { HamDecorator, BaconDecorator } from "./groupDecorators";

const cheeseBurger = new CheeseBurger();
const cheeseBurgerWithHam = new HamDecorator(cheeseBurger);
const cheeseBurgerWithHamAndBacon = new BaconDecorator(cheeseBurgerWithHam);

console.log(cheeseBurger.getHamburger());
//output You order is: Cheeseburger and the price 100
console.log(cheeseBurgerWithHam.getHamburger());
//output You order is: Cheeseburger with ham and the price 115
console.log(cheeseBurgerWithHamAndBacon.getHamburger());
//output You order is: Cheeseburger with ham with bacon and the price 124









// class Enemy {
//     constructor(number){
//         this.number =number;
//     }
//     computeDamage(receivedAttack);
// }

// class ConcreteEnemy extends Enemy{
//     computeDamage(receivedAttack): number {
//         console.log
//     }
// }