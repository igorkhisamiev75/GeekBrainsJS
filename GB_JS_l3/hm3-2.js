/*С этого урока начинаем работать с функционалом интернет - магазина.Предположим, есть сущность корзины.
Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
Товары в корзине хранятся в массиве.Задачи:
Организовать такой массив для хранения товаров в корзине;
Организовать функцию countBasketPrice, которая будет считать стоимость корзины.*/

//create array basket
let basket = [{ name: "apple", price: 100, amount: 4 }, { name: "orange", price: 30, amount: 1 }];

//function for return price
function countBasketPrice(basket) {
    return basket.price * basket.amount;
}

////function for return Total cost
function allCountBasketPrice(basket3) {
    let i = basket3.length;
    let sum = 0;

    for (j = 0; j < i; j++) {
        sum = sum + countBasketPrice(basket3[j]);
    }
    return sum;
}

//add new item
basket.push({ name: "leaf", price: 80, amount: 2 });

console.log(basket);

console.log("Price:" + `${basket[0].name} ` + countBasketPrice(basket[0]));
console.log("Price:" + `${basket[1].name} ` + countBasketPrice(basket[1]));
console.log("Price:" + `${basket[2].name} ` + countBasketPrice(basket[2]));

console.log("________________")

console.log("Total cost:" + allCountBasketPrice(basket));