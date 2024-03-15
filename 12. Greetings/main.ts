let names : string [] = ['Ahmed','Inayat','Mehran','Anees'];

const message : string = 'Good Morning '

for (let i = 0; i < names.length; i++) {

    console.log (message + names[i]);
}  



//////////////////
/// we can also write 

let friends : string [] = ['Ahmed','Inayat','Mehran','Anees'];

friends.forEach(friends => {
    console.log(`Assalam-o-Alaikum ${friends}`)  
});
