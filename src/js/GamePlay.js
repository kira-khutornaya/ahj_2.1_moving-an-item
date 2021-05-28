import GameBoard from './GameBoard';

export default class GamePlay {
  constructor(boardSize = 4) {
    this.boardSize = boardSize;
    this.board = new GameBoard();
  }

  init() {
    this.drawGameBoard();
    this.start();
  }

  drawGameBoard() {
    document.body.appendChild(this.board.createGameBoard(this.boardSize));
    this.holes = [...document.querySelectorAll('.hole')];
  }

  getPosition() {
    return Math.floor(Math.random() * (this.boardSize ** 2));
  }

  activateHole(index) {
    this.holes[index].classList.add('hole_has-goblin');
  }

  deactivateHole(index) {
    this.holes[index].classList.remove('hole_has-goblin');
  }

  start() {
    let activeHole = this.getPosition();
    let currentPosition;

    setInterval(() => {
      this.deactivateHole(activeHole);

      do {
        currentPosition = this.getPosition();
      } while (activeHole === currentPosition);
      activeHole = currentPosition;

      this.activateHole(activeHole);
    }, 800);
  }
}
