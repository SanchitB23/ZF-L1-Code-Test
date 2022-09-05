import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/PlayerCard';
import { removePlayerFromTeam } from '../redux/actions';
const Team = () => {
  const dispatch = useDispatch();
  const players = useSelector((state) => state.team).team;
  const onRemove = (id) => {
    dispatch(removePlayerFromTeam(id));
  };
  return (
    <Fragment>
      <h1 style={{ textAlign: 'center' }}>Dream 7 Team</h1>
      {players.length > 0 &&
        players.map((player) => (
          <Card key={player.id} player={player} onClick={onRemove} />
        ))}
    </Fragment>
  );
};

export default Team;
