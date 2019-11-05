
class Product {
    constructor(name, calories) {
        this.title = name;
        this.calor = calories
    }
}

class Dish {
    constructor(dishName) {
        this.dishName = dishName;
        this.products = [];

    }
    addProduct(product,number) {
        this.products.push({...product, count: number});
    }
    getCalories(){
        let adr = this.products;
        let sumOfDish = 0;
        let oneIngrMount = 0;
        for(let oneIngr in adr){
            oneIngrMount = adr[oneIngr].calor * adr[oneIngr].count/100;
            sumOfDish += oneIngrMount
        }

    }



}
class CaloriesCalculator{
    constructor() {
        this.dishesName = [];
        this.num = 0;
    }
    addDish(Name) {
        this.dishesName.push(Name);
        this.num++

    }
    getTotalCalories() {
        let adr = this.dishesName[0].products;
        let sumOfDish = 0;
        let oneIngrMount = 0;
        for(let oneIngr in adr){
            oneIngrMount = adr[oneIngr].calor * adr[oneIngr].count/100;
            sumOfDish += oneIngrMount
        }
        return sumOfDish


    }
    getAllDishesInfo() {
        let adr = this.dishesName[0].products;

        let totalInfoDish = `=============================================
        ${this.dishesName[0].dishName} ${this.num} порция ${this.getTotalCalories()} ккал`;
        console.log(totalInfoDish)
        for(let some in adr){
            console.log(`${adr[some].title}, ${adr[some].count} гр., ${adr[some].calor} ккал`)
        }
        console.log('=============================================')
    }

}
const meat = new Product('Филе говядина', 158);
const rice = new Product('Рис', 130);
const onion = new Product('Лук', 40);
const carrot = new Product('Морковь', 41);

const plov = new Dish('Плов');
plov.addProduct(meat, 100);
plov.addProduct(rice, 150);
plov.addProduct(onion, 25);
plov.addProduct(carrot, 25);

const calculator = new CaloriesCalculator();
calculator.addDish(plov);

const calories = calculator.getTotalCalories();
console.log(calories);


calculator.getAllDishesInfo();
