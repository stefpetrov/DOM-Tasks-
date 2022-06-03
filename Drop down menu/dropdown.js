function addItem() {

    inputElement = document.getElementById('newItemText')
    valueElement = document.getElementById('newItemValue')

    let optionName = inputElement.value
    let optionValue = valueElement.value

    let optionElement = document.createElement('option')
    optionElement.textContent = optionName
    optionElement.value = optionValue

    let parentElement = document.getElementById('menu')

    parentElement.appendChild(optionElement)

    inputElement.value = ""
    valueElement.value = ""
    


}