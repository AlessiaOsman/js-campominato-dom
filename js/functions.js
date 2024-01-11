const createCell = (className) => {
    let secondClassName = className
    const newCell = document.createElement('div')
    newCell.className = `cell ${secondClassName}`

    return newCell
    
}