// document.querySelector('.time').innerHTML =
//   05 + ":" + 1;
// timeStart();


// function timeStart() {
//   var justTime = document.querySelector('.time').innerHTML;
//   var arrTime = justTime.split(/[:]+/);
//   var j = arrTime[0];
//   var k = checkSecond((arrTime[1] - 1));
//   if(k==59){j=j-1}
//   if(j<0){
//     return
//   }
//   document.querySelector('.time').innerHTML =
//     j + ":" + k;
//   setTimeout(timeStart, 1000); 
// }
// function checkSecond(sec) {
//   if (sec < 10 && sec >= 0) {sec = "0" + sec}; 
//   if (sec < 0) {sec = "59"};
//   return sec;
// }

// const pokemons = [
//   {
//       id: 1,
//       img: "https://www.serebii.net/pokemongo/pokemon/001.png"
//   },
//   {
//       id: 2,
//       img: "https://www.serebii.net/pokemongo/pokemon/013.png"
//   },
//   {
//       id: 3,
//       img: "https://www.serebii.net/pokemongo/pokemon/002.png"
//   },
//   {
//       id: 4,
//       img: "https://www.serebii.net/pokemongo/pokemon/014.png"
//   },
//   {
//       id: 5,
//       img: "https://www.serebii.net/pokemongo/pokemon/004.png"
//   },
//   {
//       id: 6,
//       img: "https://www.serebii.net/pokemongo/pokemon/015.png"
//   },
//   {
//       id: 7,
//       img: "https://www.serebii.net/pokemongo/pokemon/005.png"
//   },
//   {
//       id: 8,
//       img: "https://www.serebii.net/pokemongo/pokemon/016.png"
//   },
//   {
//       id: 9,
//       img: "https://www.serebii.net/pokemongo/pokemon/006.png"
//   },
//   {
//       id: 10,
//       img: "https://www.serebii.net/pokemongo/pokemon/017.png"
//   },
//   {
//       id: 11,
//       img: "https://www.serebii.net/pokemongo/pokemon/007.png"
//   },
//   {
//       id: 12,
//       img: "https://www.serebii.net/pokemongo/pokemon/025.png"
//   },
//   {
//       id: 13,
//       img: "https://www.serebii.net/pokemongo/pokemon/008.png"
//   },
//   {
//       id: 14,
//       img: "https://www.serebii.net/pokemongo/pokemon/019.png"
//   },
//   {
//       id: 15,
//       img: "https://www.serebii.net/pokemongo/pokemon/009.png"
//   }
// ]
