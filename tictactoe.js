
boardState = [[0, 0, 1], 
            [2, 1, 1], 
            [2, 0, 1]]
            
function checkWin() {
    if (checkRow() > 0) {
        return checkRow()
    }
    if (checkDiagonal() > 0) {
        return checkDiagonal()
    }
    if (checkColumn() > 0) {
        return checkColumn()
    }
    return 0
}

function checkRow() {
    for (let player = 1; player < 3; player++) {
        for (row of boardState) {
            if (row[0] === player && row[1] === player && row[2] === player) {
                return player;
            }
        }
    }
    return 0;
}

function checkColumn() {
    for (let player = 1; player < 3; player++) {
        for (let i = 0; i < 3; i++) { // check column
            for (let j = 0; j < 3; j++) { // check row (per column)
                if (boardState[j][i] != player){
                    break
                }
                if (j == 2) {
                    return player
                }
            }
        }
    }
    return 0
}

function checkDiagonal() {
    for (let player = 1; player < 3; player++) {
        for (let i = 0; i < 3; i++) {
            if (boardState[i][i] != player) {
                break
            }  
            if (i == 2) {
                return player
            }
        }
        for (let i = 0, j = 2; i < 3; i++, j--) {
            if (boardState[i][j] != player) {
                break
            }
            if (i == 2) {
                return player
            }
        }
    }
    return 0
}

let print = [boardState[0], '\n',"___.___.___", '\n', boardState[1], '\n',"___.___.___", '\n', boardState[2]].toString()
print = print.replaceAll(1," O ")
print = print.replaceAll(2," X ")
print = print.replaceAll(",","|")
print = print.replaceAll(0,"   ")
console.log("|"+print+"|")
