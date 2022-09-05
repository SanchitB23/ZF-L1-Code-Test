import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/PlayerCard';
import { addPlayerInTeam } from '../redux/actions';
export default function Home() {
  const dispatch = useDispatch();
  const players = useSelector((state) => state.players.players);
  const teamError = useSelector((state) => state.team.error);
  const team = useSelector((state) => state.team.team);
  const onAdd = (id) => {
    dispatch(addPlayerInTeam(id));
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>Player List</h1>
        <Link href='/team'>
          <button>View Team</button>
        </Link>
      </div>
      <h2 style={{ color: 'red' }}>{teamError}</h2>
      <div>
        {players.length > 0 &&
          players.map((player) => (
            <Card
              key={player.id}
              player={player}
              teamLen={team.length}
              error={teamError}
              onClick={onAdd}
              isHomePage
            />
          ))}
      </div>
    </div>
  );
}
