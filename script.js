console.log('hello')
/* declaration du button (-) */
var BtnMn = document.querySelectorAll('.min')
console.log(BtnMn)

/* declaration du button (+) */
var PlsBtn = document.querySelectorAll('.pls')
console.log(PlsBtn)

/* declaration du inputs quantité */
var qte = document.querySelectorAll('.qte')
console.log(qte)
console.log(qte[0].value)
console.log(typeof (+qte[0].value))

/* declaration du input total */
var tot = document.querySelector('.tot')
console.log(+tot.value)

/* declaration du inputs du price du cards */
var price = document.querySelectorAll('.price')
console.log(+price.value)

/* declaration du button delete */
var dlt = document.querySelectorAll('.dlt')

/* fonction d'incrimentation  */
for (let i = 0; i < PlsBtn.length; i++) {
    PlsBtn[i].addEventListener('click' , () => {
        +qte[i].value ++ ,
        /* update du total */
        tot.value = +tot.value + (+(price[i].value))
    })   
}

/* fonction de décrémentation  */
for (let i = 0; i < BtnMn.length; i++) {
    BtnMn[i].addEventListener('click' , ()=> {
        if (+qte[i].value > 0) {
            +qte[i].value --
            /* update du total */
            tot.value = +tot.value - (+(price[i].value))
        }
        
    })
    
}

/* fonction delete */
for (let i = 0; i < dlt.length; i++) {
    dlt[i].addEventListener('click' , ()=>{
        dlt[i].parentElement.remove()
        /* update du total */
        tot.value = +tot.value - (+qte[i].value * +(price[i].value))
    })
    
}

