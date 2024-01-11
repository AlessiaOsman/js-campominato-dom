/* Recupero gli elementi */

const formElement = document.getElementById('form')
const selectElement = document.getElementById('select')

const gridElement = document.getElementById('grid')

/* Dati di partenza*/


formElement.addEventListener('submit', (e) => {
    e.preventDefault()

    let userChoice = selectElement.value

    let rows = 10;
    let cols = 10;
    

    let className = 'c-100'

    if(userChoice === '2'){
        rows = 9
        cols = 9
        className = 'c-81'
    } else if (userChoice === '3'){
        rows = 7    
        cols = 7
        className = 'c-49'
    }

    let totalCells = rows*cols

    while (gridElement.firstChild) {
        gridElement.removeChild(gridElement.firstChild);
}
    
    for(let i = 0; i<totalCells; i++){

        const cell = createCell(className)
    
        cell.addEventListener('click', ()=>{
            cell.classList.toggle('clicked')
            console.log(i+1)
        })
    
        gridElement.appendChild(cell)
        cell.innerText = i+1
    }
    
   
   
    console.log(userChoice)

    

    
})









