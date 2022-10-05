/* Desenvolva sua lógica aqui ... */

const btnFilter = document.querySelectorAll('.btn-filter')
const ul = document.querySelector("ul")

function clickFilter(){
    btnFilter.forEach(button =>{
        button.addEventListener('click', () =>{
            ul.replaceChildren()
            const category = button.innerText
    
            if(category === 'Todos'){
                createUl(products)
            }else{
                const filteredCategory = filterCategory(category)
    
                createUl(filteredCategory)
            }
    
           
        })
    })
}


function filterCategory(text) {
    const filteredDiscos = products.filter(product => categories[product.category].includes(text))

    return filteredDiscos
}

clickFilter()


//FILTRAR POR PREÇO

function maxPriceFilter(array){
    return array.reduce((previusValue, currentValue) => {
        if(previusValue < currentValue.price){
            return currentValue.price
        }
        return previusValue
    },0)

}

const maxPrice = document.querySelector('.max-price')
maxPrice.innerText = `R$ ${maxPriceFilter(products).toFixed(2)}`

const maxInput = document.querySelector('.input')
maxInput.max = `${maxPriceFilter(products).toFixed(2)}`

maxInput.addEventListener('input',(event) =>{
    maxPrice.innerText = `R$ ${parseFloat(maxInput.value).toFixed(2)}`
   
    createUl(products.filter(product => {
        return product.price <= parseFloat(maxInput.value)
    }) )

} )

