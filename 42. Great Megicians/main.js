// Ahmed Ali 
// Great megicians
function make_great(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        greatMagicians.push("".concat(magician, " the Great"));
    }
    return greatMagicians;
}
function show_magicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
var magicianNames2 = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
var greatMagicians = make_great(magicianNames2);
// This will print the great magicians' names.
show_magicians(greatMagicians);
// This will log the array of great magicians.
console.log(greatMagicians);
