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

// const pokemons = [
//     {
//         id: 1,
//         img: "https://www.serebii.net/pokemongo/pokemon/001.png"
//     },
//     {
//         id: 1,
//         img: "https://www.serebii.net/pokemongo/pokemon/013.png"
//     },
//     {
//         id: 1,
//         img: "https://www.serebii.net/pokemongo/pokemon/002.png"
//     },
//     {
//         id: 1,
//         img: "https://www.serebii.net/pokemongo/pokemon/014.png"
//     },
//     {
//         id: 1,
//         img: "https://www.serebii.net/pokemongo/pokemon/004.png"
//     },
//     {
//         id: 1,
//         img: "https://www.serebii.net/pokemongo/pokemon/015.png"
//     },
//     {
//         id: 1,
//         img: "https://www.serebii.net/pokemongo/pokemon/005.png"
//     },
//     {
//         id: 1,
//         img: "https://www.serebii.net/pokemongo/pokemon/016.png"
//     },
//     {
//         id: 1,
//         img: "https://www.serebii.net/pokemongo/pokemon/006.png"
//     },
//     {
//         id: 1,
//         img: "https://www.serebii.net/pokemongo/pokemon/017.png"
//     },
//     {
//         id: 1,
//         img: "https://www.serebii.net/pokemongo/pokemon/007.png"
//     },
//     {
//         id: 1,
//         img: "https://www.serebii.net/pokemongo/pokemon/025.png"
//     },
//     {
//         id: 1,
//         img: "https://www.serebii.net/pokemongo/pokemon/008.png"
//     },
//     {
//         id: 1,
//         img: "https://www.serebii.net/pokemongo/pokemon/019.png"
//     },
//     {
//         id: 1,
//         img: "https://www.serebii.net/pokemongo/pokemon/009.png"
//     }
// ]

let arr = [], c = 0, arrOfImg = [], clicked = [], ball = 0, timer = 180
let box__list = document.querySelector('.box__list')
let time = document.querySelector('.time')
// ekranga joylashtirish

for (let i = 0; i < 4; i++) {
    arrOfImg.push(pokemons)
}

arrOfImg = arrOfImg.flat().sort(() => .5 - Math.random())

for (let a = 0; a < 6; a++) {
    let simple = []
    for (let b = 0; b < 10; b++, c++) {
        simple.push({index:b, img:arrOfImg.flat()[c].id, link:arrOfImg.flat()[c].img})
    }
    arr.push(simple)
}

for (let el = 0; el < arr.length; el++) {
    for (let i = 0; i < arr[el].length; i++) {
        box__list.innerHTML += `<li class="box__item" id="cells" row=${el} index=${arr[el][i].index} imgId = ${arr[el][i].img}>
        <img class="box__img" src="${arr[el][i].link}" alt="img">
        </li>`
    }
}

// oyinni tekshirish
for (let cell of cells) {
    cell.onclick = () => {
        clicked.push(cell)
        // bosilishini tekshirish
        if (clicked.length == 2) {
            let firstClick = {row: clicked[0].getAttribute('row'), index: clicked[0].getAttribute('index'), imgId: clicked[0].getAttribute('imgId')}, secondClick = {row: clicked[1].getAttribute('row'), index: clicked[1].getAttribute('index'), imgId: clicked[1].getAttribute('imgId')}
            
            // agar 1ta bosganini yana bosza
            if (firstClick.row == secondClick.row && secondClick.index == firstClick.index) {clicked = []; return}
            
            // chetidaligini va tengligini tekshirish
            else if ((firstClick.row == 0 && secondClick.row == 0 && firstClick.imgId == secondClick.imgId) || (firstClick.row == arr.length - 1 && secondClick.row == arr.length - 1 && firstClick.imgId == secondClick.imgId) || (firstClick.index == 0 && secondClick.index == 0 && firstClick.imgId == secondClick.imgId) || (firstClick.index == arr[0].length - 1 && secondClick.index == arr[0].length - 1 && firstClick.imgId == secondClick.imgId)) {
                star.textContent = ++ball
                
                setTransparent(clicked[1], clicked[0])
                
                setNull(firstClick.row, firstClick.index)
                setNull(secondClick.row, secondClick.index)
            }
            
            // yonma yon turgan bolsa
            else if ((firstClick.row == secondClick.row && (firstClick.index == secondClick.index - 1 || firstClick.index - 1 == secondClick.index) && firstClick.imgId == secondClick.imgId)) {
                setTransparent(clicked[1], clicked[0])
                star.textContent = ++ball
                
                
                setNull(firstClick.row, firstClick.index)
                setNull(secondClick.row, secondClick.index)
            }
            
            // tepa past turgan bolsa
            else if ((firstClick.index == secondClick.index && (firstClick.row == secondClick.row - 1 || firstClick.row - 1 == secondClick.row) && firstClick.imgId == secondClick.imgId)) {
                setTransparent(clicked[1], clicked[0])
                star.textContent = ++ball
                
                
                setNull(firstClick.row, firstClick.index)
                setNull(secondClick.row, secondClick.index)
            }
            
            // qolgan holatlar
            else if (firstClick.imgId == secondClick.imgId) {
                let check = false
                
                // yonlamachasiga orasi nulligini tekshirish
                check = rowsNulls(firstClick, secondClick)
                
                if (check) {
                    setTransparent(clicked[0], clicked[1])
                    star.textContent = ++ball
                    
                    setNull(firstClick.row, firstClick.index)
                    setNull(secondClick.row, secondClick.index)
                } else {
                    
                    // tepadan pastga orasi nulligini tekshirish
                    check = indexsNulls(firstClick, secondClick)
                    
                    if (check) {
                        setTransparent(clicked[0], clicked[1])
                        star.textContent = ++ball
                        
                        setNull(firstClick.row, firstClick.index)
                        setNull(secondClick.row, secondClick.index)
                        
                    } else {
                        
                        // chapi yoki o'ng tomoni polni null mi deb tekshirilishii
                        check = checkRightAndLeft(firstClick, secondClick)
                        
                        if (check) {
                            setTransparent(clicked[0], clicked[1])
                            star.textContent = ++ball
                            
                            setNull(firstClick.row, firstClick.index)
                            setNull(secondClick.row, secondClick.index)
                            
                        } else {
                            
                            // tepasi yoki pasti polni null mi deb tekshirlishi
                            check = checkTopAndBottom(firstClick, secondClick)
                            
                            if (check) {
                                setTransparent(clicked[0], clicked[1])
                                star.textContent = ++ball
                                
                                setNull(firstClick.row, firstClick.index)
                                setNull(secondClick.row, secondClick.index)
                                
                            } else {
                                
                                // qolgan holatlar
                                check = otherwise(firstClick, secondClick)
                                
                                if (check) {
                                    setTransparent(clicked[0], clicked[1])
                                    star.textContent = ++ball
                                    
                                    setNull(firstClick.row, firstClick.index)
                                    setNull(secondClick.row, secondClick.index)
                                }
                            }
                        }
                        
                    }
                }
            }
            
            // oxirida 
            clicked = []
            
        }
        
    }
}

restart.onclick = () => {
    window.location.reload()
}

let interval = setInterval(() => {
    if (ball == 30) {
        score.textContent = ball
        infoText.textContent = 'You win'
        modalBox.classList.add('show')
    }
    
    checkTime(timer)
    --timer
    
    if (timer == -1 || ball == 30) {
        clearInterval(interval)
    }
}, 1000);

// functions
function setNull(row, index) {
    for (let i = 0; i < arr.length; i++) {
        if (i == row) {
            for (let j = 0; j < arr[i].length; j++) {
                if (index == j) {
                    arr[i][j] = null
                }
            }
            break
        }
    }
}

function setTransparent(first, second) {
    first.innerHTML = null, second.innerHTML = null, first.classList.add('transparent'), second.classList.add('transparent')
}

function checkTopAndBottom(first, second) {
    let bottom = true, top = true
    
    // pastga tekshirish
    if (first.row != arr.length - 1) {
        for (let i = +first.row + 1; i < arr.length; i++) {
            if (arr[i][first.index] != null) bottom = false
        }
    }
    if (bottom) {
        if (second.row != arr.length - 1) {
            for (let i = +second.row + 1; i < arr.length; i++) {
                if (arr[i][second.index] != null) bottom = false
            }
        }
        if (bottom) {
            return true
        }
    }
    
    // tepaga tekshirish
    if (first.row != 0) {
        for (let i = +first.row - 1; i >= 0; i--) {
            if (arr[i][first.index] != null) top = false
        }
    }
    if (top) {
        if (second.row != 0) {
            for (let i = +second.row - 1; i >= 0; i--) {
                if (arr[i][second.index] != null) top = false
            }
        }
        if (top) {
            return true
        }
    }
}

function checkRightAndLeft(first, second) {
    let right = true, left = true
    
    // onga tekshirish
    if (first.index != arr[0].length - 1) {
        for (let i = +first.index + 1; i < arr[0].length; i++) {
            if (arr[first.row][i] != null) right = false
        }
    }
    if (right) {
        if (second.index != arr[0].length - 1) {
            for (let i = +second.index + 1; i < arr[0].length; i++) {
                if (arr[second.row][i] != null) right = false
            }
        }
        if (right) {
            return true
        }
    }
    
    // chapga tekshirish
    if (first.index != 0) {
        for (let i = +first.index - 1; i >= 0; i--) {
            if (arr[first.row][i] != null) left = false
        }
    }
    if (left) {
        if (second.index != 0) {
            for (let i = +second.index - 1; i >= 0; i--) {
                if (arr[second.row][i] != null) left = false
            }
        }
        if (left) {
            return true
        }
    }
}

function rowsNulls(firstClick, secondClick) {
    if (firstClick.imgId == secondClick.imgId && firstClick.row == secondClick.row) {
        let count = 0
        if (firstClick.index > secondClick.index) {
            for (let i = firstClick.index - 1; i > secondClick.index; i--) {
                if (arr[firstClick.row][i] == null) count++;
            }
            
            if (count == firstClick.index - secondClick.index - 1) {
                return true
            }
        } else if (firstClick.index < secondClick.index) {
            for (let i = secondClick.index - 1; i > firstClick.index; i--) {
                if (arr[secondClick.row][i] == null) count++;
            }
            
            if (count == secondClick.index - firstClick.index - 1) {
                return true
            }
        }
    }
}

function indexsNulls(firstClick, secondClick) {
    if (firstClick.imgId == secondClick.imgId && firstClick.index == secondClick.index) {
        let count = 0
        if (firstClick.row > secondClick.row) {
            for (let i = firstClick.row - 1; i > secondClick.row; i--) {
                if (arr[i][firstClick.index] == null) count++;
            }
            
            if (count == firstClick.row - secondClick.row - 1) {
                setTransparent(clicked[1], clicked[0])
                star.textContent = ++ball
                
                setNull(firstClick.row, firstClick.index)
                setNull(secondClick.row, secondClick.index)
                return true
            }
        } if (secondClick.row > firstClick.row) {
            for (let i = secondClick.row - 1; i > firstClick.row; i--) {
                if (arr[i][secondClick.index] == null) count++;
            }
            
            if (count == secondClick.row - firstClick.row - 1) {
                setTransparent(clicked[1], clicked[0])
                star.textContent = ++ball
                
                setNull(secondClick.row, secondClick.index)
                setNull(firstClick.row, firstClick.index)
                return true
            }
        }
    }
}

function otherwise(first, second) {
    if (first.imgId === second.imgId) {
        
        // ong tomonga yurish, 1 rasmdan
        if (!arr[first.row][+first.index + 1] && first.index != arr[0].length - 1) {
            // on tomonga yurvotdi
            for(let i = +first.index + 1; i < arr[0].length; i++) {
            
                // agar null bosa ong tomondagi
                if (!arr[first.row][i]) {
            
                    // osha linyaga tegb turgan bolsa 
                    if (i == second.index && first.row - 1 == second.row || i == second.index && +first.row + 1 == second.row) return true
            
                    // tepaga yurish
                    if (first.row > second.row) {
            
                        // agar tepadagi null bosa
                        if (!arr[+first.row - 1][i]) {
                            for (let j = first.row - 1; j >= second.row; j--) {
            
                                // tepaga chiqayotganida 2 bosganiga teng bolibb qolsa
                                if (j == second.row && i == second.index) return true 
            
                                if (j == second.row) {
                                    // onga tepaga keyin yana onga yuradigan for shu
                                    for (i; i <= second.index; i++) {
                                        if (i == second.index) return true 
                                        if (arr[j][i]) break
                                    }
            
                                    // onga tepaga keyin chapga yuradigan for shu
                                    for (i; i => second.index; i--) {
                                        if (i == second.index) return true 
                                        if (arr[j][i]) break
                                    }
                                }
                            }
                        } 
            
                    // pastga yurish 
                    } else {
            
                        // agar pasidagi null bosa
                        if (!arr[+first.row + 1][i]) {
                            for (let j = +first.row + 1; j <= second.row; j++) {
            
                                // pasga tushayotganda 2 bosganiga teng bolib qosa
                                if (j == +second.row && i == second.index) return true 
            
                                if (j == second.row) {
            
                                    // onga pastga keyin yana onga yuradigan for shu
                                    for (i; i <= second.index; i++) {
                                        if (i == second.index) return true 
                                        if (arr[j][i]) break
                                    }
            
                                    // onga tepaga keyin chapga yuradigan for shu
                                    for (i; i => second.index; i--) {
                                        if (i == second.index) return true 
                                        if (arr[j][i]) break
                                    }
                                }
                            }
                        }
                    }
                } else break
            }
        }
        
        //  chapga yurish, 1 rasmdan
        if (!arr[first.row][+first.index - 1] && first.index != 0) {
            // chap tomonga yuryapti
            for(let i = +first.index - 1; i >= 0; i--) {
            
                // agar null bosa chap tomondagi
                if (!arr[first.row][i]) {
            
                    // osha linyaga tegib turgan bolsa 
                    if (i == second.index && first.row - 1 == second.row || i == second.index && +first.row + 1 == second.row) return true
            
                    // tepaga yurish
                    if (first.row > second.row) {
            
                        // agar tepadagi null bolsa
                        if (!arr[+first.row - 1][i]) {
                            for (let j = first.row - 1; j >= second.row; j--) {
            
                                // tepaga chiqayotkanda 2 bosganiga teng bolibb qosa
                                if (j == second.row && i == second.index) return true 
            
                                if (j == second.row) {
                                    // chapga tepaga keyin yana onga yuradigan for shu
                                    for (i; i <= second.index; i++) {
                                        if (i == second.index) return true 
                                        if (arr[j][i]) break
                                    }
            
                                    // chapga tepaga keyin chapga yuradigan for shu
                                    for (i; i => second.index; i--) {
                                        if (i == second.index) return true 
                                        if (arr[j][i]) break
                                    }
                                }
                            }
                        } 
            
                    // pasga yurish 
                    } else {
            
                        // agar pasidigi null bosa
                        if (!arr[+first.row + 1][i]) {
                            for (let j = +first.row + 1; j <= second.row; j++) {
            
                                // pasga tushayotganda 2 bosganiga teng bolibb qosa
                                if (j == +second.row && i == second.index) return true 
            
                                if (j == second.row) {
            
                                    // chapga pasga keyin yana onga yuradigan for shu
                                    for (i; i <= second.index; i++) {
                                        if (i == second.index) return true 
                                        if (arr[j][i]) break
                                    }
            
                                    // chapga tepaga keyin chapga yuradigan for shu
                                    for (i; i => second.index; i--) {
                                        if (i == second.index) return true 
                                        if (arr[j][i]) break
                                    }
                                }
                            }
                        }
                    }
                } else break
            }
        }
        
        //  pasga yurish, 1 rasmdan
        if (first.row != arr.length - 1 && !arr[+first.row + 1][first.index] && first.index != second.index) {
            // pastga yuryaptii
            for(let i = +first.row + 1; i < arr.length; i++) {
                if (!arr[i][first.index]) {
                    //    pastga tushayotganda yonida bolib qosa srazu true qaytaradi
                    if (i == second.row && (second.index == first.index - 1 || second.index == first.index + 1)) return true
                    
                    // chapga yurishi
                    if (first.index > second.index) {
                        // chapda nul bolsa
                        if (!arr[i][first.index - 1]) {
                            for (let j = first.index - 1; j >= second.index; j--) {
                                // yonida bolsa true qaytarish
                                if (i == second.row && j == second.index) return true
                                
                                // nul bolmasa chiqib ketilishi
                                if (arr[i][j]) break

                                // tepasida yoki pasida null bolsa osha yerga kirishi
                                if (j == second.index) {
                                    for (i; i >= second.row; i--) {
                                       // yonida bolsa true qaytarish
                                        if (i == second.row && j == second.index) return true
                                        // null bolmasa chiqib ketish
                                        if (arr[i][j]) break
                                    }
                                    for (i; i <= second.row; i++) {
                                        // yonida bolsa true qaytarish
                                         if (i == second.row && j == second.index) return true
                                         // null bolmasa chiqib ketish
                                         if (arr[i][j]) break
                                     }   
                                }
                            }
                        }
                       //  onga yurishi
                    } else {
                        for (let j = +first.index + 1; j <= second.index; j++) {
                            // yonida bolsa true qaytarish
                            if (i == second.row && j == second.index) return true
                            
                            // null bolmasa chiqib ketilishi
                            if (arr[i][j]) break

                            // tepasida yoki pastida null bolsa osha yerga kirishi
                            if (j == second.index) {
                                for (i; i >= second.row; i--) {
                                   // yonida bosa true qaytarish
                                    if (i == second.row && j == second.index) return true
                                    // null bolmasa chiqib ketish
                                    if (arr[i][j]) break
                                }
                                for (i; i <= second.row; i++) {
                                    // yonida bosa true qaytarish
                                     if (i == second.row && j == second.index) return true
                                     // null bolmasa chiqib ketish
                                     if (arr[i][j]) break
                                 }   
                            }
                        }
                    }
                } else break
            }
        }
        
        //  tepaga yurish, 1 rasmdan
        if (first.row != 0 && !arr[+first.row - 1][first.index] && first.index != second.index) {
            // tepaga yurayapti
            for(let i = +first.row - 1; i >= 0; i--) {
                if (!arr[i][first.index]) {
                    //    tepaga chiqayotganda yonida bolibb qolsa srazu true qaytaradi
                    if (i == second.row && (second.index == first.index - 1 || second.index == first.index + 1)) return true
                    
                    // chapga yurishi
                    if (first.index > second.index) {
                        // chapda null bosa
                        if (!arr[i][first.index - 1]) {
                            for (let j = first.index - 1; j >= second.index; j--) {
                                // yonida bosa true qaytarish
                                if (i == second.row && j == second.index) return true
                                
                                // null bomasa chiqib ketilishi
                                if (arr[i][j]) break

                                // tepasida yoki pasida null bolsa osha yerga kirishi
                                if (j == second.index) {
                                    for (i; i >= second.row; i--) {
                                       // yonida bolsa true qaytarish
                                        if (i == second.row && j == second.index) return true
                                        // null bolmasa chiqib ketish
                                        if (arr[i][j]) break
                                    }
                                    for (i; i <= second.row; i++) {
                                        // yonida bolsa true qaytarish
                                         if (i == second.row && j == second.index) return true
                                         // null bolmasa chiqib ketish
                                         if (arr[i][j]) break
                                     }   
                                }
                            }
                        }
                        // onga yurishi
                    } else {
                        for (let j = +first.index + 1; j <= second.index; j++) {
                            // yonida bolsa true qaytarish
                            if (i == second.row && j == second.index) return true
                            
                            // null bolmasa chiqib ketilishi
                            if (arr[i][j]) break

                            // tepasida yoki pasida nul bosa osha yerga kirishi
                            if (j == second.index) {
                                for (i; i >= second.row; i--) {
                                   // yonida bosa true qaytariw
                                    if (i == second.row && j == second.index) return true
                                    // null bolmasa chiqib ketish
                                    if (arr[i][j]) break
                                }
                                for (i; i <= second.row; i++) {
                                    // yonida bosa true qaytarish
                                     if (i == second.row && j == second.index) return true
                                     // null bolmasa chiqib ketish
                                     if (arr[i][j]) break
                                 }   
                            }
                        }
                    }
                } else break
            }
        }
    }
}

function checkTime(timer) {
    let minut = timer / 60 | 0, secund = timer - (minut * 60)
    time.textContent = `${minut}:${secund}`
    
    if (timer == 0) {
        score.textContent = ball
        infoText.textContent = 'You lose'
        modalBox.classList.add('show')
    }
}




