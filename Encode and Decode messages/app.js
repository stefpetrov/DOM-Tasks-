function encodeAndDecodeMessages() {

    let textElement = document.querySelector('div textarea:nth-of-type(1)')
    let textElementDecoded = document.querySelectorAll('textarea')[1]

    let encodeButtonElement = document.querySelector('div button:nth-of-type(1)')

    encodeButtonElement.addEventListener('click',()=>{
        let encodedText = textElement.value
        let encodedTextArr = encodedText.split("")
        let asciiArr = []
        encodedTextArr.forEach((el) =>{
           el = (el.charCodeAt(0) + 1)
           asciiArr.push(el)
        })
        let asciiArrAsLetters = []
        asciiArr.forEach(el =>{
            el = String.fromCharCode(el)
            asciiArrAsLetters.push(el)
        })


    textElementDecoded.value = asciiArrAsLetters.join("")
    textElement.value = ""

    
    })

    let decodeButtonElement = document.getElementsByTagName('button')[1]

    decodeButtonElement.addEventListener('click',()=>{

        let decodedText = textElementDecoded.value
        let decodedTextArr = decodedText.split("")
        let asciiArr = []
        decodedTextArr.forEach((el) =>{
           el = (el.charCodeAt(0) - 1)
           asciiArr.push(el)
        })
        let asciiArrAsLetters = []
        asciiArr.forEach(el =>{
            el = String.fromCharCode(el)
            asciiArrAsLetters.push(el)
        })

        textElementDecoded.value = asciiArrAsLetters.join("");

    })

}
