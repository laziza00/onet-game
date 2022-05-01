
// function randomArr(arr) {
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

// const pokemonsArr = randomArr(pokemons);
// let boxList = document.querySelector('.box__list');

// function renderElements(arr) {
//     boxList.innerHTML = null;
  
//     for (let i = 0; i < arr.length; i++) {
//       let elItem = document.createElement('li');
//       elItem.classList = 'box__item'

//         let elImg = document.createElement('div');
//         elImg.className = 'box__item-img';
//         elImg.innerHTML = ` 
          
//                 <img class="box__img" src="${arr[i].img}" alt="img">
//             `
//         elImg.dataset.id = arr[i].id;
//         elImg.dataset.index = i;
  
//         elItem.appendChild(elImg);
//         boxList.appendChild(elItem);
//     }
// }
// renderElements(pokemonsArr)

// let elImgBox = document.querySelectorAll('.box__item-img');

// generatedArr(elImgBox);

// function generatedArr(list) {
//     list.forEach((item, index) => {
//         console.log(item);
//     });
// }

