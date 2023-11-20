import  { useState } from 'react';
import { PlayersOdi } from '../FakeApi/PlayersOdi';

const PlayersCompare = () => {
  const [player1, setPlayer1] = useState<string>('');
  const [player2, setPlayer2] = useState<string>('');
  const [player1Data, setPlayer1Data] = useState(PlayersOdi.players.find(player => player.name === '') || null);
  const [player2Data, setPlayer2Data] = useState(PlayersOdi.players.find(player => player.name === '') || null);

  const comparePlayers = () => {
    const foundPlayer1 = PlayersOdi.players.find(player => player.name.toLowerCase() === player1.toLowerCase());
    const foundPlayer2 = PlayersOdi.players.find(player => player.name.toLowerCase() === player2.toLowerCase());

    setPlayer1Data(foundPlayer1 || null);
    setPlayer2Data(foundPlayer2 || null);
  };

  return (
    <div className="bg-gray-900 h-40 flex justify-center">
      <div>
        <h1 className="text-white text-2xl">Compare Players</h1>
        <div className="flex flex-col items-center">
          <input
            list="playerNames" 
            type="text"
            placeholder="Enter Player 1"
            value={player1}
            onChange={e => setPlayer1(e.target.value)}
            className="m-2 p-2"
          />
          <datalist id="playerNames">
            {PlayersOdi.players.map((player) => (
              <option key={player.id} value={player.name} />
            ))}
          </datalist>
          <input
            list="playerNames" 
            type="text"
            placeholder="Enter Player 2"
            value={player2}
            onChange={e => setPlayer2(e.target.value)}
            className="m-2 p-2"
          />
          <button onClick={comparePlayers} className="bg-blue-500 text-white p-2 rounded">
            Compare
          </button>
        </div>
      </div>
      <div className="text-white mt-4">
        {player1Data && player2Data && (
          <div>
            <h2>Comparison Results:</h2>
            <div>
              <p>{`${player1Data.name} vs ${player2Data.name}`}</p>
              <p>{`Team: ${player1Data.team} vs ${player2Data.team}`}</p>
              <p>{`Position: ${player1Data.position} vs ${player2Data.position}`}</p>
              <p>{`Ranking: ${player1Data.ranking} vs ${player2Data.ranking}`}</p>
              <p>{`Matches: ${player1Data.matches} vs ${player2Data.matches}`}</p>
              <p>{`Runs: ${player1Data.runs} vs ${player2Data.runs}`}</p>
              <p>{`Average: ${player1Data.average} vs ${player2Data.average}`}</p>
              <p>{`Strike Rate: ${player1Data.strikeRate} vs ${player2Data.strikeRate}`}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlayersCompare;
