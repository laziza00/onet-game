document.querySelector('.time').innerHTML =
  05 + ":" + 1;
timeStart();


function timeStart() {
  var justTime = document.querySelector('.time').innerHTML;
  var arrTime = justTime.split(/[:]+/);
  var j = arrTime[0];
  var k = checkSecond((arrTime[1] - 1));
  if(k==59){j=j-1}
  if(j<0){
    return
  }
  document.querySelector('.time').innerHTML =
    j + ":" + k;
  setTimeout(timeStart, 1000); 
}
function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; 
  if (sec < 0) {sec = "59"};
  return sec;
}

// const pokemons = [
//     {
//       id:1,
//       img: "https://www.serebii.net/pokemongo/pokemon/001.png"
//     },
//     {
//       id:2,
//       img: "https://www.serebii.net/pokemongo/pokemon/013.png"
//     },
//     {
//       id:3,
//       img: "https://www.serebii.net/pokemongo/pokemon/002.png"
//     },
//     {
//       id:4,
//       img: "https://www.serebii.net/pokemongo/pokemon/014.png"
//     },
//     {
//       id:5,
//       img: "https://www.serebii.net/pokemongo/pokemon/004.png"
//     },
//     {
//       id:6,
//       img: "https://www.serebii.net/pokemongo/pokemon/015.png"
//     },
//     {
//       id:7,
//       img: "https://www.serebii.net/pokemongo/pokemon/005.png"
//     },
//     {
//       id:8,
//       img: "https://www.serebii.net/pokemongo/pokemon/016.png"
//     },
//     {
//       id:9,
//       img: "https://www.serebii.net/pokemongo/pokemon/006.png"
//     },
//     {
//       id:10,
//       img: "https://www.serebii.net/pokemongo/pokemon/017.png"
//     },
//     {
//       id:11,
//       img: "https://www.serebii.net/pokemongo/pokemon/007.png"
//     },
//     {
//       id:12,
//       img: "https://www.serebii.net/pokemongo/pokemon/025.png"
//     },
//     {
//       id:13,
//       img: "https://www.serebii.net/pokemongo/pokemon/008.png"
//     },
//     {
//       id:14,
//       img: "https://www.serebii.net/pokemongo/pokemon/019.png"
//     },
//     {
//       id:15,
//       img: "https://www.serebii.net/pokemongo/pokemon/009.png"
//     },      
//   ]


// let box__list = document.querySelector('.box__list')
// // let randomNum = pokemons.sort(()=> .5 - Math.random());
// let arr =[]
// // let randomNum =  Math.floor(Math.random() * 15);
// const pokemonsArr = randomArr(pokemons)

// for(let i=1; i<=8; i++) {
//       for(let j =1; j<=12; j++) {
//           let obj = {
//               y:i,
//               x:j,
//           }
//           arr.push(obj)
//       }
// }

// // for(let i=0; i<arr.length; i++){
// //         let li = document.createElement('li');
// //         li.classList.add('a' + arr[i].x, 'b' + arr[i].y, 'box__item')
// //         li.id = arr[i].id
// //         li.textContent = arr[i].x + "." + arr[i].y

// //         // if(arr[i].y==1 && arr[i].x ==1 && arr[i].x==12 && arr[i].y==8) {
// //         //     continue
// //         // }else {

// // }
// console.log(box__list);

// pokemonsArr.forEach(item => {
//   let li = document.createElement('li');
//   li.classList.add('a' + item.x, 'b' + item.y, 'box__item')
//   // li.id = arr[i].id
//   li.textContent = item.x + "." + item.y
//   li.innerHTML = `
//           <img class="box__img" src="${item.img}" alt="img">
//                `
//     box__list.appendChild(li);
// })

// let itemOnet = document.querySelectorAll('.box__item')

// console.log(itemOnet);

//   // itemOnet.forEach((item, index)=> {

//   //   item.addEventListener('click', (el)=> {

//   //       let xCor = el.target.classList[0].split('')[1]
//   //       let yCor = el.target.classList[1].split('')[1] 
//   //       console.log(xCor, yCor);

//   //       itemOnet.forEach(idx=> {
//   //           let xxx = idx.classList[0].split('')[1]
//   //           let yyy = idx.classList[1].split('')[1]

//   //           // console.log(xxx, yyy);
//   //       })
//   //   })
//   // })  

//   function randomArr(arr) {
//     let newRandomArray = Array(4).fill(arr).flat(1);
  
//     for (let i = 0; i < 150; i++) {
//       var indexA = parseInt(Math.random() * 60);
  
//       var rendomItem = newRandomArray.splice(indexA, 1)[0];
  
//       if (rendomItem) {
//         newRandomArray = [...newRandomArray, rendomItem];
//       }
//     }
  
//     return newRandomArray;
// }