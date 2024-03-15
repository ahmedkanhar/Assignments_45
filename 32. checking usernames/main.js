// Ahmed Ali //
// checking usernames
var current_users = ["Ahmed", "Sarfraz", "Babar", "Imad", "Haider"];
var new_users = ["Hafeez", "Shaheen", "Imad", "Shadab", "Salman"];
var _loop_1 = function (i) {
    var isNameTaken = current_users.some(function (current_users) { return current_users.toLowerCase() === new_users[i].toLowerCase(); });
    if (isNameTaken) {
        console.log("The Name \"".concat(new_users[i], "\" has already been used. You will need to enter a new username."));
    }
    else {
        console.log("The Name \"".concat(new_users[i], "\" is available."));
    }
};
for (var i = 0; i < new_users.length; i++) {
    _loop_1(i);
}
