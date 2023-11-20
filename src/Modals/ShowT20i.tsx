import { T20IPlayer } from '../types/types';

export const ShowT20i: React.FC<T20IPlayer> = ({ player, onClose }) => {
  
  const randomMatches = Math.floor(Math.random() * 500); // Generates a random number between 0 and 499
  const randomRuns = Math.floor(Math.random() * 10000); // Generates a random number between 0 and 9999
  const randomAverage = (Math.random() * (60 - 20) + 20).toFixed(2); // Generates a random number between 20 and 60 with 2 decimal places
  const randomStrikeRate = (Math.random() * (150 - 80) + 80).toFixed(2); // Generates a random number between 80 and 150 with 2 decimal places
  const randomCenturies = Math.floor(Math.random() * 10); // Generates a random number between 0 and 9
  const randomFifties = Math.floor(Math.random() * 10); // Generates a random number between 0 and 9

  return player ? (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="w-2/3 max-w-3xl p-4 mx-auto bg-white rounded shadow-lg">
        <div className="flex justify-end">
          <button className="p-2 text-gray-500 hover:text-red-500" onClick={onClose}>
            Close
          </button>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">{player.name}</h2>
          <p>Team: {player.team}</p>
          <p>Rank: {player.ranking}</p>
          <p>Matches: {randomMatches}</p>
          <p>Runs: {randomRuns}</p>
          <p>Average: {randomAverage}</p>
          <p>Strike Rate: {randomStrikeRate}</p>
          <p>Centuries: {randomCenturies}</p>
          <p>Fifties: {randomFifties}</p>
        </div>
      </div>
    </div>
  ) : null;
};

export default ShowT20i;
