import { ADD_MOVIE, DELETE_MOVIE } from "../actions/movieActions.js";
import movies from "../data.js";

const initialState = {
  movies: movies,
  appTitle: "IMDB Movie Database",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((item) => action.payload !== item.id),
      };
    case ADD_MOVIE:
      const newMovie = {
        id: Date.now(),
        title: action.payload.title,
        director: action.payload.director,
        metascore: action.payload.metascore,
        genre: action.payload.genre,
        description: action.payload.description,
      };
      const newMovies = [...state.movies, newMovie];

      return {
        ...state,
        movies: newMovies,
      };
    default:
      return state;
  }
};
export default reducer;
