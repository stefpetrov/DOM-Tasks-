function search() {

   let text = document.getElementById('searchText').value

   let cities =Array.from(document.getElementsByTagName("li"))

   let counter = 0
   for (let city of cities) { 
      if(city.textContent.includes(text) && text !== ""){ // text !== ""  optional
         counter++
         city.style.textDecoration = "underline"
         city.style.fontWeight = "bolder"

      }else{
         city.style.textDecoration = "none"
         city.style.fontWeight = "normal"
      }
      
   }
   let result = document.getElementById('result')

   result.textContent = `${counter} matches found`

   
  
}
