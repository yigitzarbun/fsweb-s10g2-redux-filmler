import {
  TOGGLE_FAVORITES,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  INITIAL_FAVS,
} from "../actions/favoritesActions";

const initialState = {
  favorites: [],
  displayFavorites: true,
};

const key = "fav";

function writeToLocalStorage(data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function readFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function getInitialFavs(key) {
  const savedFavs = localStorage.getItem(key);
  if (savedFavs) {
    return readFromLocalStorage(key);
  } else {
    return initialState.favorites;
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIAL_FAVS:
      return {
        ...state,
        favorites: getInitialFavs(key),
      };
    case ADD_FAVORITE:
      writeToLocalStorage([...state.favorites, action.payload]);
      const favoriteMovie = {
        id: action.payload.id,
        title: action.payload.title,
      };

      return {
        ...state,
        favorites: [...state.favorites, favoriteMovie],
      };

    case REMOVE_FAVORITE:
      const copyFavs = state.favorites.filter(
        (item) => action.payload !== item.id
      );
      writeToLocalStorage([...copyFavs]);
      return {
        ...state,
        favorites: [...copyFavs],
      };

    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };

    default:
      return state;
  }
};
export default reducer;
