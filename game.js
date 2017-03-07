let game = {
  board: [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]
};

const renderBoardState = () => {
  require('./board.json').board.forEach(row => console.log(row));
};

const createBoard = () => {
  fs.writeFile('board.json', JSON.stringify(game), 'utf8', (err, data) => {
    if (err) { console.log(err); }
  });
};

const play = (row, col, player) => {
  fs.readFile('board.json', 'utf8', (err, data) => {
    if (err) { console.log(err); } else {
      game = JSON.parse(data);
      // console.log(game.board.forEach());
      if (game.board[row][col]) {
        console.log('Spot already occupied with', game.board[row][col]);
        return;
      }
      game.board[row][col] = player;
      fs.writeFile('board.json', JSON.stringify(game), 'utf8', (err, data) => {
        if (err) { console.log(err); }
      });
    }
  });
};

module.exports = {
  renderBoardState,
  createBoard,
  play,
};