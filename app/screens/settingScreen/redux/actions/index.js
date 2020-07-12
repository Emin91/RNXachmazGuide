import { SHOW_SIMPLE_NEWS_CARD, INCREASE_NEWS_COUNT, DECREASE_NEWS_COUNT } from "../constants";

export const newsActions = (value) => {
    return {
        type: SHOW_SIMPLE_NEWS_CARD,
        payload: value,
    }
}
export const increaseNewsCountActions = (increased) => {
    console.log('value:', increased)
    return {
        type: INCREASE_NEWS_COUNT,
        payload: increased,
    }
}
export const decreaseNewsCountActions = (decreased) => {
    console.log('value:', decreased)
    return {
        type: DECREASE_NEWS_COUNT,
        payload: decreased,
    }
}