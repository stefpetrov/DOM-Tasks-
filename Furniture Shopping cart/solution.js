function solve() {
  let inputElement = document.getElementsByTagName("textarea")[0];
  let generateButton = document.getElementsByTagName("button")[0];
  let tbodyElement = document.querySelector("tbody");

  generateButton.addEventListener("click", onClick);

  function onClick() {
    let inputAsArr = JSON.parse(inputElement.value);


    for (let obj of inputAsArr) {
      let newTrElement = document.createElement("tr");
      let newTdElement1 = document.createElement("td");
      let newTdElement2 = document.createElement("td");
      let newTdElement3 = document.createElement("td");
      let newTdElement4 = document.createElement("td");
      let newTdElement5 = document.createElement("td");
      let newImgElement = document.createElement("img");
      let newPElement1 = document.createElement("p");
      let newPElement2 = document.createElement("p");
      let newPElement3 = document.createElement("p");
      let newInputElement = document.createElement("input");

      newPElement1.textContent = obj.name;
      newImgElement.src = obj.img;
      newPElement2.textContent = obj.price;
      newPElement3.textContent = obj.decFactor

      newInputElement.type = "checkbox";

      tbodyElement.appendChild(newTrElement);
      newTrElement.appendChild(newTdElement1);
      newTdElement1.appendChild(newImgElement);
      newTrElement.appendChild(newTdElement2);
      newTdElement2.appendChild(newPElement1);
      newTrElement.appendChild(newTdElement3);
      newTdElement3.appendChild(newPElement2);
      newTrElement.appendChild(newTdElement4);
      newTdElement4.appendChild(newPElement3);
      newTrElement.appendChild(newTdElement5);
      newTdElement5.appendChild(newInputElement);
    }
  }
  
  let buyButtonElement = document.getElementsByTagName("button")[1];
  let resultElement = document.getElementsByTagName("textarea")[1];

  buyButtonElement.addEventListener("click", buy);

  function buy() {
    
    let checkboxElements = document.getElementsByTagName("input");
    let furniture = [];
    let totalPrice = 0;
    let decFactor = 0;

    for (const checkbox of Array.from(checkboxElements)) {
      if (checkbox.checked) {
        let info = checkbox.parentElement.parentElement;

        let p = Array.from(info.getElementsByTagName("p"));

        furniture.push(p[0].textContent);
        totalPrice += Number(p[1].textContent);
        decFactor += Number(p[2].textContent);
      }
    }

    let avgDecFactor = decFactor / furniture.length;
    let output = "";
    
    output += `Bought furniture: ${furniture.join(", ")}
Total price: ${totalPrice.toFixed(2)}
Average decoration factor: ${avgDecFactor ? avgDecFactor : 0}`;

    resultElement.value = output;
  }
}
