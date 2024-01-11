/* Recupero gli elementi */

const formElement = document.getElementById('form')
const selectElement = document.getElementById('select')

const gridElement = document.getElementById('grid')

/*Preparo una variabile che tenga il punteggio dell'utente */

let score = 0


formElement.addEventListener('submit', (e) => {
    e.preventDefault()

    

    let userChoice = selectElement.value

    let rows = 10;
    let cols = 10;


    let className = 'c-100'

    if (userChoice === '2') {
        rows = 9
        cols = 9
        className = 'c-81'
    } else if (userChoice === '3') {
        rows = 7
        cols = 7
        className = 'c-49'
    }

    let totalCells = rows * cols

    while (gridElement.firstChild) {
        gridElement.removeChild(gridElement.firstChild);
    }

    /* Richiamo la funzione createbomb e stampo in console*/

    const totalbombs = createBombs(totalCells, 16)
    console.log(totalbombs)

    

    for (let i = 1; i <= totalCells; i++) {

        const cell = createCell(className)

        cell.addEventListener('click', () => {
            cell.classList.add('clicked')
            console.log(i)
            /*Incremento il punteggio al click sulla cella*/
            score++
            console.log(score)

        })

        gridElement.appendChild(cell)
        cell.innerText = i


    }



    console.log(userChoice)




})









