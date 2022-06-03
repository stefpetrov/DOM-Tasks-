function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   


   function onClick() {

      let elements = document.querySelectorAll('tbody tr')
      let search = document.getElementById('searchField')
      
      let arrOfElements = Array.from(elements)

      for (const row of arrOfElements) {
         row.classList.remove('select')

         if(row.textContent.includes(search.value) && search.value !== ""){

            row.className = "select"

         }

      }

      search.value = ""
   }
}