const Card = ({ player, teamLen, isHomePage, onClick }) => (
  <div key={player.id} style={{ border: '2px solid yellow', padding: '10px' }}>
    <h3>{player.name}</h3>
    <p>{player.role}</p>
    <p>{player.points}</p>
    {isHomePage && teamLen != 7 && (
      <button onClick={() => onClick(player.id)}>Add to Team</button>
    )}
    {!isHomePage && (
      <button onClick={() => onClick(player.id)}>Remove From Team</button>
    )}
  </div>
);

export default Card;
