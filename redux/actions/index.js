export const addPlayerInTeam = (id) => (dispatch, getState) => {
  const {
    players: { players },
    team: { team, points },
  } = getState();
  const player = players.find((elem) => elem.id === id);
  console.log(
    'playe',
    team.find((elem) => elem.id === id),
    team.length > 0 && !!team.find((elem) => elem.id === id)
  );
  if (points + parseInt(player.points) > 75) {
    dispatch({
      type: 'TEAM_ERROR',
      payload: 'Value Exceeds 75',
    });
  } else if (team.length > 0 && !!team.find((elem) => elem.id === id))
    dispatch({
      type: 'TEAM_ERROR',
      payload: 'Duplicate Player Added',
    });
  else if (
    team.filter((p) => p.role === 'Batsman').length > 3 ||
    team.filter((p) => p.role === 'All-Rounder').length > 2 ||
    team.filter((p) => p.role === 'Bowler').length > 2
  ) {
    dispatch({
      type: 'TEAM_ERROR',
      payload: 'Roles Exceed Max',
    });
  } else
    dispatch({
      type: 'ADD_PLAYER_IN_TEAM',
      payload: player,
    });
};

export const removePlayerFromTeam = (id) => (dispatch, getState) => {
  const {
    team: { team },
  } = getState();
  const players = team.filter((elem) => elem.id !== id);
  let points;
  if (players.length > 0) {
    if (players.length === 1) {
      points = players[0].points;
    } else
      points = players.reduce(
        (a, b) => parseInt(a.points) + parseInt(b.points)
      );
  } else points = 0;

  dispatch({
    type: 'REMOVE_PLAYER_FROM_TEAM',
    payload: {
      team: players,
      points,
    },
  });
};
