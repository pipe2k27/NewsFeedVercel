export const loadingError = (bool) => ({
  type: 'LOADING_ERROR',
  hasErrored: bool,
});

export const loadingInProgress = (bool) => ({
  type: 'LOADING_IN_PROGRESS',
  isLoading: bool,
});

export const loadingSuccess = (news) => ({
  type: 'LOADING_SUCCESS',
  news,
});

export const clearNews = () => ({
  type: 'CLEAR_NEWS',
});

export const getNews = (category) => {
  return (dispatch) => {
    dispatch(clearNews());

    dispatch(loadingError(false));

    dispatch(loadingInProgress(true));

    if (category === 'home') {
      fetch(`https://api.canillitapp.com/latest/2020-04-29`)
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          }

          dispatch(loadingInProgress(false));

          return response;
        })
        .then((response) => response.json())
        .then((news) => dispatch(loadingSuccess(news)))
        .catch(() => dispatch(loadingError(true)));
    } else {
      fetch(`https://api.canillitapp.com/news/category/${category}`)
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          }

          dispatch(loadingInProgress(false));

          return response;
        })
        .then((response) => response.json())
        .then((news) => dispatch(loadingSuccess(news)))
        .catch(() => dispatch(loadingError(true)));
    }
  };
};
