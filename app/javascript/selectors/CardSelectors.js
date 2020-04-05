export function listCards(state, listId, sortFunction) {
  const cards = state.cards.filter(
    card => !card.archived && card.list_id === listId
  );
  if (typeof sortFunction === "function") {
    return cards.sort(sortFunction);
  } else {
    return cards;
  }
}
