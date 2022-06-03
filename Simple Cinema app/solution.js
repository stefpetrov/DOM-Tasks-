function solve() {

    let onScreenButton = document.querySelector('button')
    onScreenButton.addEventListener("click", onScreen)

    function onScreen(e){
        e.preventDefault()

        let [nameEl,hallEl,priceEl] = ((document.querySelectorAll('div[id="container"] input')))

        if(nameEl.value !== "" && hallEl.value !== "" && priceEl.value !== "" && !isNaN(Number(priceEl.value))){

           let liElement = document.createElement('li')
           let spanElement = document.createElement('span')
           let strongElement =document.createElement('strong')
           spanElement.textContent = nameEl.value
           strongElement.textContent = `Hall: ${hallEl.value}`

           let ulElement = document.querySelector('ul')

            liElement.appendChild(spanElement)
            liElement.appendChild(strongElement)
            ulElement.appendChild(liElement)

           let divElement =document.createElement('div')
           let strongInDivElement =document.createElement('strong')
           let inputElement =document.createElement('input')
           let buttonElement =document.createElement('button')

            strongInDivElement.textContent = Number(priceEl.value).toFixed(2)
            inputElement.placeholder = "Tickets Sold"
            buttonElement.textContent = "Archive"

            divElement.appendChild(strongInDivElement)
            divElement.appendChild(inputElement)
            divElement.appendChild(buttonElement)
            liElement.appendChild(divElement)

            let archiveButton = liElement.querySelector('div button')

            archiveButton.addEventListener('click', archive)
            
        }
        nameEl.value = ""
        hallEl.value = ""
        priceEl.value = ""
    }
    
    function archive(e){

        let inputQtyTickets = e.target.parentElement.querySelector("input")
        let price = e.target.parentElement.querySelector("strong")
        let movieName = e.target.parentElement.parentElement.querySelector('span').textContent

        if(!isNaN(Number(inputQtyTickets.value)) && inputQtyTickets.value !== ""){


            let totalAmount = Number(price.textContent) * Number(inputQtyTickets.value)

            let span = document.createElement('span')
            let strong = document.createElement('strong')
            let button = document.createElement('button')

            span.textContent = movieName
            strong.textContent = `Total amount: ${totalAmount.toFixed(2)}`
            button.textContent = "Delete"

            let liElement = document.createElement('li')
            liElement.appendChild(span)
            liElement.appendChild(strong)
            liElement.appendChild(button)

            let ulElement = document.querySelector('#archive > ul')
            ulElement.appendChild(liElement)
            let liElementToArchive = e.target.parentElement.parentElement
            liElementToArchive.remove()

            let deleteButtons = Array.from(document.querySelectorAll('#archive > ul > li > button'))
            deleteButtons.forEach(b => b.addEventListener('click', deleteEL))
        }
    }

    let clearButton = document.querySelector('#archive > button')
    clearButton.addEventListener("click", clear)

    function clear(){

        let itemsToDelete = Array.from(document.querySelectorAll('#archive > ul > li'))
        itemsToDelete.map((el) => el.remove())
    }

    function deleteEL(e){
    
        let liElementToDelete = e.target.parentElement
        liElementToDelete.remove()

    }

}
