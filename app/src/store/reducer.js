/*
 * State
 */
const initialState = {
  view: 'login',
  lang: 'fr',
};


/*
 * Reducer
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CHANGE_VIEW':
      return {
        ...state,
        view: action.view,
      };

    case 'CHANGE_LANG':
      return {
        ...state,
        lang: action.lang,
      };

    case 'INPUT_CHANGE':
      return {
        ...state,
        [action.name]: action.value,
      };

    default:
      return state;
  }
};


/*
 * Action creators
 */
export const changeView = view => ({
  type: 'CHANGE_VIEW',
  view,
});

export const changeLang = lang => ({
  type: 'CHANGE_LANG',
  lang,
});

export const changeInput = ({ name, value }) => ({
  type: 'INPUT_CHANGE',
  value,
  name,
});
