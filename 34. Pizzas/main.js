// Ahmed Ali //
// Pizzas
var myFavoritePizza = ["Sabzi wala", "Hot Tandoori", "Chicken cheese "];
for (var _i = 0, myFavoritePizza_1 = myFavoritePizza; _i < myFavoritePizza_1.length; _i++) {
    var pizza = myFavoritePizza_1[_i];
    console.log(pizza);
}
;
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
for (var _a = 0, myFavoritePizza_2 = myFavoritePizza; _a < myFavoritePizza_2.length; _a++) {
    var pizza = myFavoritePizza_2[_a];
    console.log("I like, ".concat(pizza, ", pizza"));
}
;
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as
// I really love pizza!
console.log("I really like pizza. \n\nIt is very tasty. \n\nI also recommend it for you");
