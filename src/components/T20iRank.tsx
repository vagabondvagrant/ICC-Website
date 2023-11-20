import { useState } from 'react';
import { T20IPlayer } from '../types/types'; 
import { t20iPlayers } from '../FakeApi/T20Players'; 
import {ShowT20i} from '../Modals/ShowT20i';
const T20iRank = () => {
  const [selectedPlayer, setSelectedPlayer] = useState<T20IPlayer | null>(null); 

  const openPlayerModal = (player: T20IPlayer) => {
    setSelectedPlayer(player);
  };

  const closePlayerModal = () => {
    setSelectedPlayer(null);
  };

  const players = t20iPlayers.players; 

  return (
    <div className="container mx-auto">
      <h1 className="flex justify-center text-2xl font-semibold mb-0 bg-gray-900 text-white">
        Men's T20I Player Rankings 
      </h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-900 text-white">
            <th className="p-2 hover:bg-gray-700">Rank</th>
            <th className="p-2 hover-bg-gray-700">Player</th>
            <th className="p-2 hover-bg-gray-700">Team</th>
            <th className="p-2 hover-bg-gray-700">Matches</th>
            <th className="p-2 hover-bg-gray-700">Runs</th>
            <th className="p-2 hover-bg-gray-700">Average</th>
            <th className="p-2 hover-bg-gray-700">Strike Rate</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player: T20IPlayer) => (
            <tr key={player.name} onClick={() => openPlayerModal(player)}>
              <td className="p-2 bg-gray-600 text-white hover:font-semibold hover:bg-gray-900 hover:text-white">
                {player.ranking}
              </td>
              <td className="p-2 bg-gray-600 text-white hover:font-semibold hover:bg-gray-900 hover:text-white">
                {player.name}
              </td>
              <td className="p-2 bg-gray-600 text-white hover:font-semibold hover-bg-gray-900 hover:text-white">
                {player.team}
              </td>
              <td className="p-2 bg-gray-600 text-white hover:font-semibold hover-bg-gray-900 hover:text-white">
                {player.matches}
              </td>
              <td className="p-2 bg-gray-600 text-white hover:font-semibold hover-bg-gray-900 hover:text-white">
                {player.runs}
              </td>
              <td className="p-2 bg-gray-600 text-white hover:font-semibold hover-bg-gray-900 hover:text-white">
                {player.average}
              </td>
              <td className="p-2 bg-gray-600 text-white hover:font-semibold hover-bg-gray-900 hover:text-white">
                {player.strikeRate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedPlayer && (
        <ShowT20i player={selectedPlayer} onClose={closePlayerModal} />
      )}
    </div>
  );
};

export default T20iRank;
