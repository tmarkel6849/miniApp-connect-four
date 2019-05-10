/*_________CONSTANTS_____________*/

let tie = 'tie';
let winner = 'winner';

class ConnectFour {
  constructor() {
    this.board = [
      ['', '', '', ''],
      ['', '', '', ''],
      ['', '', '', ''],
      ['', '', '', '']
    ];
    this.startBoard = [
      ['', '', '', ''],
      ['', '', '', ''],
      ['', '', '', ''],
      ['', '', '', '']
    ];
    this.red = 'red';
    this.black = 'black'
    this.piece = this.black;
    this.playCount = 0;
    this.winningCount = 4;
  }
  togglePiece() {
    this.piece === 'black' ? this.piece = this.red : this.piece = this.black;
  }

  checkForTie() {
    this.playCount++;
    if (this.playCount >= 42) return tie;
    // this.togglePiece();

    return null;
  }
  placePiece(row, col) {
    this.board[row][col] = this.piece;
    if (this.checkForWin(row, col)) return winner;
    return (this.checkForTie());
  }

  /*______________Check for win logic____________*/
  checkRow(row, col) {
    let count = 1;
    let rightCol = col + 1, leftCol = col -1;
    let currentCircle = this.board[row][rightCol];
    while (currentCircle === this.piece) {
      if (++count >= this.winningCount) return true;
      currentCircle = this.board[row][++rightCol];
    }

    currentCircle = this.board[row][leftCol];
    while (currentCircle === this.piece) {
      if (++count >= this.winningCount) return true;
      currentCircle = this.board[row][--leftCol];
    }
    return null;
  }

  checkCol(row, col) {
    let count = 1;
    let upRow = row + 1, subRow = row -1;
    let currentCircle;
    if (this.board[upRow]){
      currentCircle = this.board[upRow][col];
      while (currentCircle === this.piece) {
        if (++count >= this.winningCount ) return true;
        if (!this.board[++upRow]) break;
        currentCircle = this.board[upRow][col]
      }
    }
      if (this.board[subRow]){
      currentCircle = this.board[subRow][col];
      while (currentCircle === this.piece) {
        if (++count >= this.winningCount) return true;
        if (!this.board[--subRow]) break;
          currentCircle = this.board[subRow][col];
      }
    }
    return null;
  }

  checkLeftDiagonal(row, col) {
    let count = 1;
    let upRow = row + 1, upCol = col - 1;
    let subRow = row - 1;
    let downCol = col + 1;
    let currentCircle;

    if (this.board[upRow]) {
      currentCircle = this.board[upRow][upCol];
      while (currentCircle === this.piece) {
        if (++count >= this.winningCount) return true;
        if (!this.board[++upRow]) break;
        currentCircle = this.board[upRow][--upCol];
      }
    }
    if (this.board[subRow]) {
      currentCircle = this.board[subRow][downCol];
      while (currentCircle === this.piece) {
        if (++count >= this.winningCount) return true;
        if (!this.board[--subRow]) break;
          currentCircle = this.board[subRow][++downCol];
      }
    }
    return null;
  }

  checkRightDiagonal(row, col) {
    let count = 1;
    let upRow = row + 1, upCol = col + 1;
    let subRow = row - 1;
    let  downCol = col - 1;
    let currentCircle;

    if (this.board[upRow]){
      currentCircle = this.board[upRow][upCol]
      while (currentCircle === this.piece) {
        if (++count >= this.winningCount) return true;
        if (!this.board[++upRow]) break;
        currentCircle = this.board[upRow][++upCol];
      }
    }
    if (this.board[subRow]) {
      currentCircle = this.board[subRow][downCol];
      while (currentCircle === this.piece) {
        if (++count >= this.winningCount) return true;
        if (!this.board[--subRow]) break;
          currentCircle = this.board[subRow][--downCol];
      }
    }
    return null;
  }

  checkForWin(row, col) {
    if (this.checkRow(row, col) || this.checkCol(row, col) || this.checkLeftDiagonal(row, col) || this.checkRightDiagonal(row, col)) {
      return true;
    }
    return null;
  }


}

let connectBoard = new ConnectFour();