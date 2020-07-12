import { SHOW_SIMPLE_NEWS_CARD, INCREASE_NEWS_COUNT, DECREASE_NEWS_COUNT } from "../../constants";

const initialState = {
  counter: 3,
  isNewsWithImage: true,
};

const newsReducer = (state = initialState, action) => {
  console.log('action.payload:', action.payload)
  switch (action.type) {
    case SHOW_SIMPLE_NEWS_CARD:
      return {
        ...state,
        isNewsWithImage: !state.isNewsWithImage};
    case INCREASE_NEWS_COUNT:
      return {
        ...state,
        counter: action.payload++,
      }    
    case DECREASE_NEWS_COUNT:
      return {
        ...state,
        counter: action.payload--,
      }    
    default:
      return state;
  }
};

export default newsReducer;