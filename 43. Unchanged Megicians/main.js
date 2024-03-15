// Ahmed Ali
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//unchanged megicians
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        greatMagicians.push("".concat(magician, " the Great"));
    }
    return greatMagicians;
}
var originalMagicianNames = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
var originalMagiciansCopy = __spreadArray([], originalMagicianNames, true); // Create a copy of the original array
// Call make_great with the copy and store the result in a new array
var greatMagicians2 = make_great(originalMagiciansCopy);
console.log("Original Magicians:");
show_magicians(originalMagicianNames); // Display the original list of magicians
console.log("\nGreat Magicians:");
show_magicians(greatMagicians2); // Display the modified list of magicians with "the Great"
