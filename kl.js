const pokemons = [
    {
        id: 1,
        img: "https://www.serebii.net/pokemongo/pokemon/001.png"
    },
    {
        id: 2,
        img: "https://www.serebii.net/pokemongo/pokemon/013.png"
    },
    {
        id: 3,
        img: "https://www.serebii.net/pokemongo/pokemon/002.png"
    },
    {
        id: 4,
        img: "https://www.serebii.net/pokemongo/pokemon/014.png"
    },
    {
        id: 5,
        img: "https://www.serebii.net/pokemongo/pokemon/004.png"
    },
    {
        id: 6,
        img: "https://www.serebii.net/pokemongo/pokemon/015.png"
    },
    {
        id: 7,
        img: "https://www.serebii.net/pokemongo/pokemon/005.png"
    },
    {
        id: 8,
        img: "https://www.serebii.net/pokemongo/pokemon/016.png"
    },
    {
        id: 9,
        img: "https://www.serebii.net/pokemongo/pokemon/006.png"
    },
    {
        id: 10,
        img: "https://www.serebii.net/pokemongo/pokemon/017.png"
    },
    {
        id: 11,
        img: "https://www.serebii.net/pokemongo/pokemon/007.png"
    },
    {
        id: 12,
        img: "https://www.serebii.net/pokemongo/pokemon/025.png"
    },
    {
        id: 13,
        img: "https://www.serebii.net/pokemongo/pokemon/008.png"
    },
    {
        id: 14,
        img: "https://www.serebii.net/pokemongo/pokemon/019.png"
    },
    {
        id: 15,
        img: "https://www.serebii.net/pokemongo/pokemon/009.png"
    }
]
let newArr = [];
let arr = []
let images = [];
let images_length = 60;

for (let i = 1; i <= 8; i++) {

    for (let j = 1; j <= 12; j++) {
        let obj = {
            x: i,
            y: j,
        }
        arr.push(obj)
    }
}

for (let i = 2; i <= 7; i++) {
    for (let j = 2; j <= 11; j++) {
        let obj = {
            x: i,
            y: j,
        }
        newArr.push(obj)
    }
}
for (let i = 0; i < 4; i++) {
    pokemons.forEach((el) => {
        images.push(el.id)
    })
}
for (let i = 0; i < 100; i++) {

    let one = Math.floor(Math.random() * images_length);
    let two = Math.floor(Math.random() * images_length);
    let temp = images[one];

    images[one] = images[two];
    images[two] = temp;
}

images.forEach((el, i) => {
    newArr[i].i = el
})

let list = document.querySelector('.box__list')

arr.forEach((el)=>{
    let li = document.createElement('li')
    li.className = `box__item x_${el.x} y_${el.y} game__item`
    li.id = el.i
    list.appendChild(li)
})

let items = document.querySelectorAll(".box__item")
let game__item = document.querySelectorAll('.game__item')

items.forEach((el)=>{
    newArr.forEach((elem)=>{
        if (el.className.includes(`x_${elem.x}`) && el.className.includes(`y_${elem.y}`)) {
            let box = document.createElement('div')
            box.className = `box__item-img x_${elem.x} y_${elem.y}`
            box.id = elem.i
            el.id = elem.i
            // console.log(box.id);
            el.appendChild(box)
        }
    })
    // console.log(newArr);
})

let box = document.querySelectorAll('.box__item-img')

box.forEach((images)=>{
    pokemons.forEach((imgs)=>{
        if (images.id == imgs.id) {
            images.innerHTML = `<img class="box__img" src="${imgs.img}" alt="img">`
        }
    })
})

let count =0
let span = document.querySelector('.span')



let cordArr =[]
let gameArr =[]
let idArr =[]

let son =0

// 1 chi element  2 martta bosish kerak  2 chi elemnet 1 marta  bosiladi
//  1 chi elementni 2 chi bosishni 2 element bosilgandan keyin bosing 


items.forEach((item, index)=> {

    item.addEventListener('click', (el)=> {

        el.target.classList.add('bosh')
        console.log(el.target);
        let yCor = el.currentTarget.classList[1].split('_')[1]
        let xCor = el.currentTarget.classList[2].split('_')[1] 
     
        let a = el.currentTarget.id
        console.log(item);
        cordArr.push(yCor, xCor)
        gameArr.push(a)

        console.log(cordArr);
        console.log(gameArr);
        if(item.classList.contains('bosh')) {
            son++
        }
        if(son==2) {
            console.log(son);
        }
        if(gameArr.length==2 && gameArr[0]==gameArr[1] && cordArr.length==4) {
       

            el.target.remove()
            el.target.remove()

            console.log("ssss");
            if((cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]+1) ||
               (cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]+2) ||
               (cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]+3) ||
               (cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]+4) ||
               (cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]+5) ||
               (cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]+6) ||
               (cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]+7) ||
               (cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]+8) || 
               (cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]+9) ||
               (cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]+10) ||
               (cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]+11) ||
               (cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]-1) ||
               (cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]-2) ||
               (cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]-3) ||
               (cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]-4) ||
               (cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]-5) ||
               (cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]-6) ||
               (cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]-7) ||
               (cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]-8) ||
               (cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]-9) ||
               (cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]-10) ||
               (cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]-11)) {

                el.target.remove()
                count++
                span.innerHTML= `${count-1}`
                console.log("ok");
           
               }
                if((cordArr[0]==(cordArr[2]+1) && cordArr[1]==cordArr[3]) ||
                (cordArr[0]==(cordArr[2]+2) && cordArr[1]==cordArr[3]) ||
                (cordArr[0]==(cordArr[2]+3) && cordArr[1]==cordArr[3]) ||
                (cordArr[0]==(cordArr[2]+4) && cordArr[1]==cordArr[3]) ||
                (cordArr[0]==(cordArr[2]+5) && cordArr[1]==cordArr[3]) ||
                (cordArr[0]==(cordArr[2]+6) && cordArr[1]==cordArr[3]) ||
                (cordArr[0]==(cordArr[2]+7) && cordArr[1]==cordArr[3]) ||
                (cordArr[0]==(cordArr[2]+8) && cordArr[1]==cordArr[3]) ||
                (cordArr[0]==(cordArr[2]+9) && cordArr[1]==cordArr[3]) ||
                (cordArr[0]==(cordArr[2]+10) && cordArr[1]==cordArr[3]) ||
                (cordArr[0]==(cordArr[2]+11) && cordArr[1]==cordArr[3]) ||
                (cordArr[0]==(cordArr[2]-1) && cordArr[1]==cordArr[3]) ||
                (cordArr[0]==(cordArr[2]-2) && cordArr[1]==cordArr[3]) ||
                (cordArr[0]==(cordArr[2]-3) && cordArr[1]==cordArr[3]) ||
                (cordArr[0]==(cordArr[2]-4) && cordArr[1]==cordArr[3]) ||
                (cordArr[0]==(cordArr[2]-5) && cordArr[1]==cordArr[3]) ||
                (cordArr[0]==(cordArr[2]-6) && cordArr[1]==cordArr[3]) ||
                (cordArr[0]==(cordArr[2]-7) && cordArr[1]==cordArr[3]) ||
                (cordArr[0]==(cordArr[2]-8) && cordArr[1]==cordArr[3]) ||
                (cordArr[0]==(cordArr[2]-9) && cordArr[1]==cordArr[3]) ||
                (cordArr[0]==(cordArr[2]-10) && cordArr[1]==cordArr[3]) ||
                (cordArr[0]==(cordArr[2]-11) && cordArr[1]==cordArr[3])) {

                    el.target.remove()
                    count++
                    span.innerHTML= `${count-1}`
                    console.log("ok");
                }
                else {
                    console.log("buggg");
                }
        }
        if(gameArr.length>=2 && cordArr.length>=4) {
            gameArr.length =0
            cordArr.length =0
            console.log("ddd");
        }
    })
})

// 1 chi element  2 martta bosish kerak  2 chi 1 chi elemnet 1 marta  bosiladi 

// items.forEach((item, index)=> {

//     item.addEventListener('click', (el)=> {

//         // console.log(item);
//         let yCor = el.currentTarget.classList[1].split('_')[1]
//         let xCor = el.currentTarget.classList[2].split('_')[1] 
     
//         // item.classList.add('border')
//         let a = el.currentTarget.id
//         // console.log(a);
//         // console.log(yCor, xCor);
//         // console.log(el.target);
//         cordArr.push(yCor, xCor)
//         gameArr.push(a)

//         console.log(cordArr);
//         console.log(gameArr[0], gameArr[1]);
  
//         if(gameArr.length==2 && gameArr[0]==gameArr[1] && cordArr.length==4) {
//             // item.classList.remove('border')

//             // el.target.remove()
//             // el.target.remove()

//             console.log("ssss");
//             if((cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]+1) ||
//                (cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]+2) ||
//                (cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]+3) ||
//                (cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]+4) ||
//                (cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]+5) ||
//                (cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]+6) ||
//                (cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]+7) ||
//                (cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]+8) || 
//                (cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]+9) ||
//                (cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]+10) ||
//                (cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]+11) ||
//                (cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]-1) ||
//                (cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]-2) ||
//                (cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]-3) ||
//                (cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]-4) ||
//                (cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]-5) ||
//                (cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]-6) ||
//                (cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]-7) ||
//                (cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]-8) ||
//                (cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]-9) ||
//                (cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]-10) ||
//                (cordArr[0]==cordArr[2] && cordArr[1]==cordArr[3]-11) ) 
//                 // if( item.id==gameArr[0] &&  item.id==gameArr[1]) {
//                 // item.innerHTML= null
//                 // console.log("aaaa")
//                 // item.nextSibling.innerHTML = null
//                 //  }
              
//             //    xCor.parentNodes.remove()
//             //    yCor.parentNodes.remove()
//                 el.target.remove()
//                 el.target.remove()
//                 count++
//                 // item.innerHTML = null
//                 // item.firstChild.innerHTML =null
//                 span.innerHTML= `${count-1}`
            
//                 console.log("ok");
//                 // gameArr.length =0
//                 // cordArr.length =0

//         }
//         if(gameArr.length>=2 && cordArr.length>=4) {
//             gameArr.length =0
//             cordArr.length =0
//             // console.log(gameArr);
//             console.log("ddd");
//         }
//         else {
//             console.log("buggg");
//         }
     
//     })
// })