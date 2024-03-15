var names = ['Ahmed', 'Inayat', 'Mehran', 'Anees'];
var message = 'Good Morning ';
for (var i = 0; i < names.length; i++) {
    console.log(message + names[i]);
}
/// we can also write 
var friends = ['Ahmed', 'Inayat', 'Mehran', 'Anees'];
friends.forEach(function (friends) {
    console.log("Assalam-o-Alaikum ".concat(friends));
});
