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
  const game = new GamePlay();
  game.init();
  test('init method should draw a new game board', () => {
    const holes = document.querySelectorAll('.hole');
    expect(holes.length).toBe(16);
  });

  test('activateHole (deactivateHole) method should add (remove) class to the index', () => {
    game.activateHole(3);
    expect(game.holes[3].classList.contains('hole_has-goblin')).toBeTruthy();
    game.deactivateHole(3);
    expect(game.holes[3].classList.contains('hole_has-goblin')).toBeFalsy();
  });

  test('getPosition method should return random number', () => {
    const random = new GamePlay().getPosition();
    expect(random).toBeTruthy();
  });
});
