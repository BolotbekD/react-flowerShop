let cards = document.querySelector('.cards'),
    li = document.querySelectorAll('header li'),
    boxCart = document.querySelector('.boxCart'),
    btnCart = document.querySelector('.cart'),
    countCart = document.querySelector('.countCart'),
    searchProducts = document.querySelector('.search'),
    select = document.querySelector('.priceSelection')

let category = '',

    arrCart = JSON.parse(localStorage.getItem('cart')) || [],

    arrSearch = [],

    valueSelected = 'default'

    let saveCartLS = () => {
        localStorage.setItem('cart', JSON.stringify(arrCart))
    }

let renderCart = () => {
    boxCart.innerHTML = '<h1 class="cart__close">X</h1> <h4 class="priceCart">0</h4>'
    arrCart.forEach((el) => {
        boxCart.innerHTML += `
        <div class="oneCart">
            <img src="${el.image}">
            <h4>${el.title}</h4>
            <h5>Price: ${el.price}</h5>
            <div class="cartItemController">
                <button class="decrease" data-id=${el.id}>-</button>
                <h6>${el.counter}</h6>
                <button class="increase" data-id=${el.id}>+</button>
            </div>
        </div>
        `
    })

    let priceCart = document.querySelector('.priceCart')
        priceCart.textContent = "Total: " + arrCart.reduce((acc, rec) => {
            if(rec.counter === 'max'){
                return priceCart.textContent = rec.price * 15
            }
            else{
                return acc + rec.price * rec.counter
            }
        },0)


    let increaseItemCart = document.querySelectorAll('.increase')
        increaseItemCart.forEach((el) => {
            el.addEventListener('click', () => {
                arrCart.forEach((item) => {
                    if (item.id === +el.dataset.id) {
                        if (item.counter >= 14 || item.counter === 'max') {
                            item.counter = 'max'

                        } else {
                            item.counter += 1
                        }                                                        
                    }
                })
                saveCartLS()
                renderCart()
            })
        })
    
    
    let decreaseItemCart = document.querySelectorAll('.decrease')
    decreaseItemCart.forEach((el) => {
        el.addEventListener('click', () => {
            arrCart.map((item, index) => {
                if (item.id === +el.dataset.id) {
                    if (item.counter <= 1) {
                        arrCart.splice(index, 1)

                        let clickBtnCart = document.querySelector(`.btn__cart[data-id="${item.id}"]`)
                        if (clickBtnCart) {
                            clickBtnCart.classList.remove('active')
                            clickBtnCart.textContent = "В корзину"
                        }
                    }
                    else if (item.counter === 'max') {
                        item.counter = 14

                    } else {
                       return {...item,counter:--item.counter}
                    }
                    
                } 
                countCart.textContent = arrCart.length 
                
            })  
            saveCartLS()
            renderCart()   
        })
    })

    let closeCart = document.querySelector('.cart__close')
    closeCart.addEventListener('click', () => {
        boxCart.classList.contains('active')
        boxCart.classList.remove('active')
    })
}


let showProduct = () => {
    cards.innerHTML = ''
    fetch(`https://fakestoreapi.com/products/${category === 'jewelery'?'category/jewelery'
        :category === "men's clothing"?"category/men's clothing"
        :category === 'electronics'?'category/electronics'
        :category === "women's clothing"?"category/women's clothing":''}`)
    .then((res) => res.json())
    .then((data) => {
        data.sort((a,b) => {
            if (valueSelected === 'default') {
                return data
            } else if (valueSelected === 'descending') {
                return b.price - a.price
            } else if (valueSelected === 'ascending') {
                return a.price - b.price
            }
        })
        .forEach((el) => {
            arrSearch.push(el)
            const sameId = arrCart.find((item) => item.id === el.id)
            const isInCart = sameId ? true : false;
            cards.innerHTML += `
                <div class="card">
                    <div class="card__info">
                        <a href="oneProduct/oneProduct.html#${el.id}">
                        <img src="${el.image}" alt="">
                        </a>
                        <h4 >${el.title}</h4>
                        <h3 >Price: ${el.price}</h3>
                        <p class="textDescription">${el.description.slice(0, 30)}</p>
                        <button class="btnMore" data-id="${el.id}">(...)</button> 
                    </div>
                    <button class="btn__cart ${isInCart ? 'active' : ''}" data-id="${el.id}">
                    ${isInCart ? 'Убрать из корзины' : 'В корзину'}
                    </button>                  
                </div>
                `
                renderCart() 
                                
        })
        let btnsCart = document.querySelectorAll('.btn__cart')
        let btnsMore = document.querySelectorAll('.btnMore')
            btnsMore.forEach((el) => {
                el.addEventListener('click', () => {
                    let card = el.closest('.card')
                    let cardsDescription = card.querySelector('.textDescription')
                    
                    if (el.textContent === '(...)') {
                        btnsCart.forEach((btn) => {  
                            if (btn.dataset.id === el.dataset.id) {
                                btn.style.display = 'none'
                            }
                        })

                        el.textContent = 'Скрыть'
                        el.style.background = 'white' 
                        el.style.zIndex = 200
                    
                        data.forEach((item) => {
                            if (item.id === +el.dataset.id) {
                               cardsDescription.textContent = item.description
                               cardsDescription.style.zIndex = 100
                               cardsDescription.style.color = 'blue'
                            } 
                        }) 

                    } else {
                        btnsCart.forEach((btn) => {  
                            if (btn.dataset.id === el.dataset.id) {
                                btn.style.display = 'block'
                            }
                        })

                        el.textContent = '(...)'
                        el.style.background = 'rgb(208, 255, 0)'
                        cardsDescription.style.color = 'black'

                        data.forEach((item) => {
                            if (item.id === +el.dataset.id) {
                                cardsDescription.textContent = item.description.slice(0, 30) 
                            } 
                    })
                }
                })
            })
            
            
        btnsCart.forEach((el) => {
            el.addEventListener('click', () => { 
                if (!el.classList.contains('active')) {
                    let find = data.find((item) => item.id === +el.dataset.id),
                    sameId = arrCart.find((item) => item.id === find.id)
                    if (sameId) {
                        sameId.counter = sameId.counter + 1                                                   
                    } else {
                        find.counter = 1
                        arrCart.push(find)
                    }
                    countCart.textContent = arrCart.length > 9 ? '9+' : arrCart.length;
                    el.textContent = 'Убрать из корзины'
                    el.classList.add('active')
                    
                } else {
                    el.textContent = 'В корзину'
                    arrCart.map((item, index) => {
                        if (item.id === +el.dataset.id) {
                            if (item.counter <= 1 || item.counter > 1 || item.counter === 'max') {
                                arrCart.splice(index, 1)
                            }}
                        })
                        countCart.textContent = arrCart.length < 10 ? arrCart.length : '9+'; 
                        el.classList.remove('active');                      
                }
                saveCartLS()
                renderCart()
            })          
        })                             
    })
    countCart.textContent = arrCart.length
}
saveCartLS()

const searchInput = document.querySelector('.search')
const searchOptions = document.querySelector('.options')

let getOptions = (word, arrSearch) => {

    return arrSearch.filter (p => {

        const regex = new RegExp(word, 'gi')
        return p.title.match(regex)
        
    })
}

let displayOptions = (value) => {

    const options = getOptions(value, arrSearch)
    
    const html = options.map(products => {

        const regex = new RegExp(value, 'gi')

        const productName = products.title.replace(regex,
            `<span class="hl">${value}</span>`
        )
        return `<li><span><a href="oneProduct/oneProduct.html#${products.id}">${productName}</span></li>`
    }).slice(0,5).join('')

    searchOptions.innerHTML = value ? html : null
}



searchInput.addEventListener('keyup', (event) => {
    event.preventDefault()
    displayOptions(searchInput.value)
})




li.forEach((el) => {
    el.addEventListener('click', (event) => {
    category = el.textContent
    li.forEach(el => el.classList.remove('actived'))
    event.target.classList.add('actived')
        showProduct()
    })
})

btnCart.addEventListener('click', () => {
    boxCart.classList.toggle('active')
})

select.addEventListener('change', (event) => {
    valueSelected = event.target.value
    showProduct()
})

showProduct()
   
