
const createCell = (className) => {
    let secondClassName = className
    const newCell = document.createElement('div')
    newCell.className = `cell ${secondClassName}`

    return newCell
    
}

/* Creata funzione per generare 16 numeri casuali compresi tra 1 e il massimo delle caselle */

/**
 * to create an array of tot number between 1 and max
 * @param {number} max 
 * @param {number} totalNumber 
 * @returns {Array}  array of number
 */

const createBombs = (max, totalNumber) => {

    const bombs = []
    
    while (bombs.length < totalNumber ){
        const randomNumber = Math.floor(Math.random() * max) +1;
        if (!bombs.includes(randomNumber)) bombs.push(randomNumber)
    }

    return bombs
}