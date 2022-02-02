import * as types from './types';

export const setQuote = (payload) => ({ type: types.SET_QUOTE, payload });

// GET QUOTE OF THE DAY
export const getQuote = (axios) => (dispatch, getState) => {
  const state = getState();
  if (state.quoteOfTheDay.quote) {
    return;
  }

  axios
    .get('https://quotes.rest/qod')
    .then(({ data }) => {
      const contents = data.contents.quotes[0];
      dispatch(setQuote({ quote: contents.quote, author: contents.author }));
    })
    .catch((error) => {
      let message = 'There was an error getting quote of the day';
      if (error.response) {
        message = `Server responded with status ${error.response.status}`;
      }
      dispatch(
        setQuote({
          quote: message,
        })
      );
    });
};

// INCREMENT COUNTER BY 1
export const incrementCount = () => ({ type: types.INCREMENT });

// DECREMENT COUNTER BY 1
export const decrementCount = () => ({ type: types.DECREMENT });

// RESET COUNTER
export const resetCount = () => ({ type: types.RESET });
