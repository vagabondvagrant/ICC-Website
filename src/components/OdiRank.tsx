import { useState } from 'react';
import ShowPlayers from '../Modals/ShowPlayers';
import { PlayersOdi } from '../FakeApi/PlayersOdi';
import { Player } from '../types/types';

const OdiRank = () => {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  const openPlayerModal = (player: Player) => {
    setSelectedPlayer(player);
  };

  const closePlayerModal = () => {
    setSelectedPlayer(null);
  };

  const players = PlayersOdi.players;

  return (
    <div className="container mx-auto">
      <h1 className="flex justify-center text-2xl font-semibold mb-0 bg-gray-900 text-white">
        Men's ODI Player Rankings
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
          {players.map((player: Player) => (
            <tr key={player.id} onClick={() => openPlayerModal(player)}>
              <td className="p-2 bg-gray-600 text-white hover:font-semibold hover:bg-gray-900 hover:text-white">
                {player.ranking}
              </td>
              <td className="p-2 bg-gray-600 text-white hover:font-semibold hover:bg-gray-900 hover:text-white">
                {player.name}
              </td>
              <td className="p-2 bg-gray-600 text-white hover:font-semibold hover:bg-gray-900 hover:text-white">
                {player.team}
              </td>
              <td className="p-2 bg-gray-600 text-white hover:font-semibold hover-bg-gray-900 hover:text-white">
                {player.matches}
              </td>
              <td className="p-2 bg-gray-600 text-white hover:font-semibold hover:bg-gray-900 hover:text-white">
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
        <ShowPlayers player={selectedPlayer} onClose={closePlayerModal} />
      )}
    </div>
  );
};

export default OdiRank;

