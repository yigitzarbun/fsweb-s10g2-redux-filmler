export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const INITIAL_FAVS = "INITIAL_FAVS";

export const loadInitialFavs = () => {
  return { type: INITIAL_FAVS };
};
export const toggleFavorites = () => {
  return { type: TOGGLE_FAVORITES };
};

export const addFavorite = (movie) => {
  return { type: ADD_FAVORITE, payload: movie };
};

export const removeFavorite = (id) => {
  return { type: REMOVE_FAVORITE, payload: id };
};
