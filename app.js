

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


// function fcolor ( color = "red"){
//     if( color == "red"){ return;}
//     console.log(color);
// }
// let paint = fcolor;

// paint();

// paint('sraka');

// -------------------------------------------------------- умовні оператори  if----
                    //  1
// if ("0") {  alert( 'Привет' );  } відповідь true;
                    
                    //  2
//  задача з медіальними вікнами і (if,elso)
// let company = prompt('Яка офіційна назва компанії що створила Js?');

// if(company =='ECMAScript'){
//     alert('yes');
// }else{
//     alert('Не знаете? ECMAScript' );
// }

                // 3
 
//   let number = prompt('Введіть число', 0);
  
//   if(number > 0) {
//       alert( 1 );
//   } else if(number < 0) {
//     alert( -1 );
//   } else  {
//     alert( 0 );
// }

                   // 4

    // let a = b = 1.3;

    //  result = (a + b < 4) ? 'Мало' : 'багато';    
     
    //  console.log (result);

                  //   5
               
                //    message = (login == 'Сотрудник') ? 'Привет' :
                //   (login == 'Директор') ? 'Здравствуйте' :
                //   (login == '') ? 'Нет логина' :
                //   '';
  // --------------------------------------логічні оператори------------------ задачі
             
// 1 alert( null || 2 || undefined ); true правда

// alert( 1 && null && 2 );  ФАЛС БО ПРОВЫРИТЬ НУЛЬ А ЦЕ ПЕРШЕ НЕПРАВДИВЕ ЗНАЧЕНННЯ;

// alert( alert(1) && alert(2) ); andefained;

// alert( null || 2 && 3 || 4 );  ansver 3;


// let age = 13;

// if (age < 14 || age > 90){          сповіщення неприходить в районі від 15 д 90 відповідає умові зад:
//     alert("true");
// };

// if (!(age >= 14 && age <= 90))
               
                                            //    задача з логінами 


// let userName = prompt("хто там?", '');

// if (userName == 'Адмін') {

//   let pass = prompt('Пароль?', '');

//   if(pass = "I em boss") {
//     alert('hi boss');
//   }else if(pass== '' || pass== null ){
//     alert('bay');
//   }else{
//     alert('censel');
//   }
// } else if (userName == '' || userName == null ){
//   alert('відміна');
// }else {
//   alert( 'ти хто')
// }



// ------------------цикли --------------------


// let i = 3;

// while (i) {
//   alert( i-- );  послідне значення 0
// }


// let i = 0;
// while (++i < 5) alert( i ); 4

// let i = 0;
// while (i++ < 5) alert( i );  5

// --------------При помощи цикла for выведите чётные числа от 2 до 10.-------

// for(let i =2 ; i <= 10; i++){
//   if(i % 2 == 0){
//   alert(i);
// }
// }
// // 




// let i = 0;

// while( i < 3 ){
//   alert( `number ${i}!` );
//   i++;
// }

// __________________________________


// let i = 0;
// do {
//   alert( i );
//   i++;
// } while (i < 3);


// let num = 100;                                     задача нписати цикл який вимагаатеме число  більше 100
// do{
//   num = prompt('введіть число більше 100.','');  
// }while (num <= 100 && num);

// -----------------------------------------------
// let red = "red";

// let arr = ['apple','peyp','bins',12, 1,red];

// console.log( arr);

// let anonym = m+esage => {
//   let count = 2;
//   return mesage + 2
// };

// console.log(anonym("анонімна функція"));

// // ------------------------------------------ задача список і метод масива !________________________________

// let myCar = {
//   drivers: [ '"Mickael"', '"David","luka",'],
//   getDriver(just){
//     console.log('Current driver --- ' + this.drivers[just]);
//   }
// }
// myCar.getDriver(2);
// ------------------------------------------------------------------------
// let heyter = {
//   firstName: 'Santa',
//   lastName: 'Claus',
//    getName() {
//     return `${this.firstName}  ${this.lastName}`;
//    }
   
  
// }
// console.log(heyter.getName());

// --------

// class Bloger {
//   constructor( profN, lastName, firstName){
//     this.profN = profN;
//     this.firstName = firstName;
//     this.lastName =  lastName;
//   }
//   sayName(){
//         console.log(`мета [${this.profN} ${this.firstName} ${this.lastName}]`);
//   }
// }

// let blgr = new Bloger('фронтендер:','nazar','kolos');
// blgr.sayName();


// ----------------------_______________-------------------------

// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

// ______________________________________________________________________//

// let element ={
//   class: 'div',    тут я міняю значення  тегу <input>  in html                      
//   value: 32,
// }

// let findElement = document.querySelector('.div');

// findElement.value = element.value ;
// ________________



// // приклад з використанням  стрілочної функції на вирахунок найбільшого ек чщтного  числа ч

// const arr = ['1','2','3','4'];

// const res = arr
// .map((el) => parseInt(el))
// .filter((num) => num%2)
// .reduce((max, value) => Math.max(max, value), 0);

// console.log(res);

// __________ДЕСТРУКТЕРИЗАЦІЯ ОБЄКТІВ______________

const dict = {
  duck:'ква',
  dog:'гав',
  mouse:'пипи'
}

const { duck, ...other } = dict;

console.log(duck,other);
