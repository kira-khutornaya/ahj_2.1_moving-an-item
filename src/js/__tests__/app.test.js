import GameBoard from '../GameBoard';
import GamePlay from '../GamePlay';

describe('GameBoard:', () => {
  test('should return the markup of a new field', () => {
    const board = new GameBoard().createGameBoard(4);
    const holes = board.querySelectorAll('.hole');
    expect(holes.length).toBe(16);
  });
});

describe('GamePlay:', () => {
  test('should draw a new game board', () => {
    new GamePlay().drawGameBoard();
    const holes = document.querySelectorAll('.hole');
    expect(holes.length).toBe(16);
  });
});
