
function createUl(array){
    
    const ul = document.querySelector("ul")
    ul.replaceChildren()

    array.forEach((disco) => {
        const li = document.createElement('li')
        li.classList = "card flex column m-bot-7"
        
        const img = document.createElement('img')
        img.src = disco.img
        li.appendChild(img)

        const divText = document.createElement('div')
        divText.classList = "margin-card-text"
        li.appendChild(divText)
    
        const div = document.createElement('div')
        div.classList = "flex gap-2 m-bot-5"
        divText.appendChild(div)
    
        const smallNomeBanda = document.createElement('small')
        smallNomeBanda.classList = "small text-color-1"
        smallNomeBanda.innerText = disco.band
        div.appendChild(smallNomeBanda)
    
        const smallAnoBanda = document.createElement('small')
        smallAnoBanda.classList = "small text-color-1"
        smallAnoBanda.innerText = disco.year
        div.appendChild(smallAnoBanda)
    
        const h3 = document.createElement('h3')
        h3.classList = "title-1 m-bot-6 text-color-2" 
        h3.innerText = disco.title
        divText.appendChild(h3)
    
        const divComprar = document.createElement('div')
        divComprar.classList = "flex a-itens-center j-content-between"
        divText.appendChild(divComprar)
    
        const span = document.createElement('span')
        span.classList = "title-2 text-color-2"
        span.innerText = `R$ ${disco.price.toFixed(2)}`
        divComprar.appendChild(span)
    
        const button = document.createElement('button')
        button.classList = "btn btn-primary-ligth"
        button.innerText = "Comprar"
        divComprar.appendChild(button)  
        
        
        
        ul.appendChild(li)
        return ul
    });
}

createUl(products)

