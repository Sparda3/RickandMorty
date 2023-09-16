import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "../Redux/action-types";

const initialState = {
  myFavorites: [], // [char1, char2, char3]
  allCharacters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      // return {
      //   ...state,
      //   allCharacters: [...state.allCharacters, action.payload],
      //   myFavorites: [...state.myFavorites, action.payload],
      // };
      return {
        ...state,
        myFavorites: payload,
        allCharacters: payload,
      };
    case REMOVE_FAV:
      return { ...state, myFavorites: payload };
    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharacters.filter((e) => e.gender === payload),
      };

    case ORDER:
      let orderFavorites;
      if (payload === "A") {
        orderFavorites = state.myFavorites.sort((a, b) =>
          a.id > b.id ? 1 : -1
        );
      } else {
        orderFavorites = state.myFavorites.sort((a, b) =>
          a.id < b.id ? 1 : -1
        );
      }
      return {
        ...state,
        myFavorites: [...orderFavorites],
      };
    default:
      return state;
  }
};

export default rootReducer;
