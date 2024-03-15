// Ahmed Ali
// sandwich
function yourSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("You ordered a sandwich with the following items:");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- ".concat(item));
    }
    console.log("Enjoy your sandwich!");
}
// Call the function three times with different names for the sandwiches
yourSandwich("Special Sandwich", "Ham", "Cheese", "Lettuce");
yourSandwich("Deluxe Sandwich", "Turkey", "Tomato");
yourSandwich("Classic Sandwich", "Peanut Butter", "Jelly", "Banana", "Honey");
