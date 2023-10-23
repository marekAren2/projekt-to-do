let inputTask = document.getElementById("input-task");
let inputButton = document.getElementById("input-button");
let orderedList = document.getElementById("ordered-lista");
let tablica = [];
// FIXME 3
// let inputvalue = intputTaskValue


function wstawInputTaskdoTablicy() {
    tablica.push(inputTask.value);
    // czyszczenie value inputu
    // inputTask.value = "";
}
//popraw nazwe
function wyiterujZadaniZtablicy(tablicaF) {
    const allRowHtml = [];
    console.log('----------- czyscimy ekran i odswierzamy wyswietlajac na nowo');
    for (let tabElement of tablicaF) { 
        console.log("🚀 ~ file: main.js:8 ~ wyiterujZadaniZtablicy ~ tabElement:", tabElement)
        // allRowHtml = allRowHtml + recordZmienNaLi(tabElement);
        // allRowHtml.push(recordZmienNaLi(tabElement));
        console.log("🚀 ~ file: main.js:20 ~ wyiterujZadaniZtablicy ~ recordZmienNaLi(tabElement):", recordZmienNaLi(tabElement))
        console.log("🚀 ~ file: main.js:20 ~ wyiterujZadaniZtablicy ~ tabElement:", tabElement)
        console.log("🚀 ~ file: main.js:19 ~ wyiterujZadaniZtablicy ~ allRowHtml:", allRowHtml)
        // orderedList.appendChild(recordZmienNaLi(tabElement));
    }
// FIXME 2
}
function wyswietlOstatniElement(inputValueF) {
    recordZmienNaLi(inputValueF);
    dodajDzieckoDoParenta(recordZmienNaLi(inputValueF));
    
}

function dodajDzieckoDoParenta(elementListyF) {
    orderedList.appendChild(elementListyF)
}

function recordZmienNaLi(recordT) {
    // FIXME 1
    const rowHtml = document.createElement("li");
    rowHtml.innerText = recordT;
    // rowHtml.className = "list-table";
    rowHtml.tagName = recordT;
    console.log("🚀 ~ file: main.js:45 ~ recordZmienNaLi ~ rowHtml.tagName:", rowHtml.tagName)

    console.log("🚀 ~ file: main.js:25 ~ recordZmienNaLi ~ rowHtml.innerText:", rowHtml.innerText)

    console.log("🚀 ~ file: main.js:24 ~ recordZmienNaLi ~ rowHtml:", rowHtml)

    // orderedList.appendChild(rowHtml);
    return rowHtml
}

inputButton.addEventListener('click', () => {
    const intputTaskValue = inputTask.value;
    if (intputTaskValue != '') {
        wstawInputTaskdoTablicy();
        // wyiterujZadaniZtablicy(tablica);
        wyswietlOstatniElement(inputTask.value);
    }
    inputTask.value = '';
})
console.log("🚀 ~ file: main.js:64 ~ ****** begin wyiterujZadaniZtablicy(tablica):", wyiterujZadaniZtablicy(tablica))
wyiterujZadaniZtablicy(tablica);
console.log("🚀 ~ file: main.js:64 ~ ****** end wyiterujZadaniZtablicy(tablica):", wyiterujZadaniZtablicy(tablica))



