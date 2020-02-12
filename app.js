let car = {
    color: 'green',
    maxSpeed: 120,
    cost: 1000001,
    audio: {
        type: 'sony',
        wolume: '120hz' 
    }

};

if (car.cost > 1000000){
    console.log('car expensive')
}else{
    console.log('cheap car')
}



// if(car.color == 'red') {
//    console.log('car red');
// }else if (car.color == 'green')  {
//     console.log('car green');
// }else{
//     console.log('невідомий колір');
// }

car.color == 'green' ? console.log('green') : console.log('red');


console.log("2" * "3" );
// 6
console.log(4+5+"px" );
// 9px
console.log(""-1 + 0 );
// -1
console.log( " " + 1 + 0);
// 10
console.log(true+false);
// 1
console.log( "$"+ 4 + 7 );
// $47
console.log("4"- 2 );
// 2
console.log("4px" - 2 );
// nan
console.log(7/0 );
// infinity
console.log(  "  -9  " + 5);
// -9 5
console.log( "  -9  " - 5);
