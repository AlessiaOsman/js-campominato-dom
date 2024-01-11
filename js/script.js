/* Recupero gli elementi */

const formElement = document.getElementById('form')
const selectElement = document.getElementById('select')
const scoreElement = document.getElementById('score-message')
const gridElement = document.getElementById('grid')
const button = document.querySelector('button')
const message = document.getElementById('user-message')

/*Preparo una variabile che tenga il punteggio dell'utente */

button.innerText = 'Play'


formElement.addEventListener('submit', (e) => {
    e.preventDefault()

    /* Inserisco flag per terminare la partita */

    let isGameOver = false

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

    let score = 0
    scoreElement.innerText = 'Punteggio: ' + score

    while (gridElement.firstChild) {
        gridElement.removeChild(gridElement.firstChild);
    }

    /* Richiamo la funzione createbomb e stampo in console*/

    const totalBombsNumber = 16

    /* Variabile per punteggio massimo*/

    maxPoints = totalCells - totalBombsNumber

    const bombs = createBombs(totalCells, totalBombsNumber)
    console.log(bombs)



    for (let i = 1; i <= totalCells; i++) {

        const cell = createCell(className)

        cell.addEventListener('click', () => {

            if(isGameOver) return
            cell.classList.add('clicked')
            console.log(i)
            /*Incremento il punteggio al click sulla cella*/
            scoreElement.innerText = `Punteggio: ${++score}`

            /* Controllo se il numero della cella è presente nell'array di bombe*/

            const isBomb = bombs.includes(i)

            /* Se è presente aggiungo la classe bomb per far diventare la cella rossa e scrivo in console messaggio hai perso con punteggio*/

            if (isBomb) {
                cell.classList.add('bomb')
                button.innerText = 'Ricomincia'
                isGameOver = true;
                message.innerText = `Hai perso con un un punteggio di: ${score}`
                

            } else {
                if (score === maxPoints){
                    isGameOver = true
                    console.log('Hai vinto')
                    button.innerText = 'Ricomincia'
                    message.innerText = `Hai vinto`
                }
                
            }

        })

        gridElement.appendChild(cell)
        cell.innerText = i


    }





})









