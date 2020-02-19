

// problem solving for javaScript


// let admin = 'nazar';
// let name = 'Джон';

// admin = name;

// alert(admin);


// // ------------------------------------------
// let a =1, b =1;

// let c = ++a; // answer c= 2, a = 2 
// let d = b++; // answer d = 1, b = 2 


// // ------------------------------------------
// let a = 2;

// let x = 1 + (a*=2)  // answer  x = 5 

// ----------------------------------------------

// let yourName = prompt('як тебе звуть?')

// alert(yourName);

// ----------------------------------------------
// let car = {
//     maxspeed: 250, 
    
// };

// speedChage();

// function speedChage(){
//     console.log('швидкысть була:', car.maxspeed);
//     car. maxspeed = 300;
//     console.log('швидкысть стала:', car.maxspeed);

// }


// ---------------------------------------------------
// // це зверненя
// let speed =  speedChage; // функію можна присвоїти перемінній і тоді можна викликати через ідинтифікатор speed;
// // це виклик або запуск
// speed(); //таким чином;

// function speedChage(){






// };
// також можна викликати через властивість див нижче
// let car = {
//     maxspeed: 250, 
//     update:speedChage
// };

// car.update();



// function speedChage(){
//     console.log( car.maxspeed);

// }


// ----------------------------------------

// function watch(message) {
//     return message +'ACDC'; // конкотинація рядків
// };


// console.log(watch("object"));

//    ---------------------------------------задача_________


function fcolor ( color = "red"){
    if( color == "red"){ return;}
    console.log(color);
}
let paint = fcolor;

paint();

paint('sraka');


