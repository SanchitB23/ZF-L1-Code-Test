import data from '../../data/data.json';

const initialState = {
  team: [],
  points: 0,
  error: '',
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case 'TEAM_ERROR':
      return { ...state, error: actions.payload };
    case 'ADD_PLAYER_IN_TEAM':
      const points = state.points + parseInt(actions.payload?.points);
      return {
        points,
        error: '',
        team: [...state.team, actions.payload],
      };
    case 'REMOVE_PLAYER_FROM_TEAM':
      return {
        points: actions.payload.points,
        error: '',
        team: actions.payload.team,
      };
    default:
      return state;
  }
};
export default reducer;
