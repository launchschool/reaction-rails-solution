export function getBoardById(state, id) {
  return state.boards.find(board => board.id === id);
}
