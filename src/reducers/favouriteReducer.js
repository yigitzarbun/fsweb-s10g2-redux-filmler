import {
  TOGGLE_FAVORITES,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from "../actions/favoritesActions";

const initialState = {
  favorites: [],
  displayFavorites: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      const favoriteMovie = {
        id: action.payload.id,
        title: action.payload.title,
      };

      return {
        ...state,
        favorites: [...state.favorites, favoriteMovie],
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((item) => action.payload !== item.id),
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
