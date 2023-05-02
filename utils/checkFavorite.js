export default function checkFavorite(favorite, story) {
  return favorites.some((favorite) => favorite.id === story.id);
}
