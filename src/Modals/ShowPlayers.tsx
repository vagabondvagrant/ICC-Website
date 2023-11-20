import React from 'react';
import { UpdatedPlayer } from '../types/types';

interface ShowPlayersProps {
  player: UpdatedPlayer | null;
  onClose: () => void;
}

const ShowPlayers: React.FC<ShowPlayersProps> = ({ player, onClose }) => {
  const randomCenturies = Math.floor(Math.random() * 20);
  const randomFifties = Math.floor(Math.random() * 50);
  const randomMatches = Math.floor(Math.random() * 200); // Generate a random number for matches
  const randomRuns = Math.floor(Math.random() * 10000); // Generate a random number for runs
  const randomAverage = (Math.random() * 50 + 30).toFixed(2); // Generate a random average between 30 and 80
  const randomStrikeRate = (Math.random() * 200 + 50).toFixed(2); // Generate a random strike rate between 50 and 250

  return player ? (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="w-2/3 max-w-3xl p-4 mx-auto bg-white rounded shadow-lg">
        <div className="flex justify-end">
          <button className="p-2 text-gray-500 hover:text-red-500" onClick={onClose}>
            X
          </button>
        </div>
        <div className=''>
          <div className='bg-gray-900 flex justify-center'>
          </div>
          <h2 className="text-2xl font-semibold mb-4">{player.name}</h2>
          <p>Team: {player.team}</p>
          <p>Position: {player.position}</p>
          <p>Rank: {Math.floor(Math.random() * 50) + 1}</p> {/* Generate a random rank between 1 and 50 */}
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

export default ShowPlayers;
