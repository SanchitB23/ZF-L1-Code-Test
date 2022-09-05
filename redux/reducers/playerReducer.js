import data from '../../data/data.json';

const initialState = {
  players: data,
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case '':
      return state;
    default:
      return state;
  }
};
export default reducer;
