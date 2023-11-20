import React, { useState, useEffect } from "react";

const teams: string[] = ["Pakistan", "Afghanistan", "Australia", "England", "New Zealand", "Netherlands", "India", "South Africa", "West Indies", "Sri Lanka"];
const getRandomTeam = (): string => teams[Math.floor(Math.random() * teams.length)];

interface BattingStats {
  runs: number;
  ballsFaced: number;
}

interface BowlingStats {
  wickets: number;
  oversBowled: number;
}

interface Player {
  name: string;
  batting: BattingStats;
  bowling: BowlingStats;
}

const playerNames: string[] = [
  "Babar Azam",
  "Virat Kohli",
  "Steve Smith",
  "Kane Williamson",
  "Joe Root",
  "David Warner",
  "Quinton de Kock",
  "Chris Gayle",
  "Kusal Perera",
  "Rashid Khan",
  "Shakib Al Hasan",
];

const playerTemplate: Player = {
  name: "",
  batting: {
    runs: 0,
    ballsFaced: 0,
  },
  bowling: {
    wickets: 0,
    oversBowled: 0,
  },
};

const generateRandomPlayer = (index: number): Player => {
  const player: Player = { ...playerTemplate };
  player.name = playerNames[index];
  player.batting.runs = Math.floor(Math.random() * 200);
  player.batting.ballsFaced = Math.floor(Math.random() * 150);
  player.bowling.wickets = Math.floor(Math.random() * 5);
  player.bowling.oversBowled = Number((Math.random() * 10).toFixed(1));
  return player;
};

const LiveScoreComponent: React.FC = () => {
  const [team1, setTeam1] = useState<string>(getRandomTeam());
  const [team2, setTeam2] = useState<string>(getRandomTeam());
  const [playersTeam1, setPlayersTeam1] = useState<Player[]>([]);
  const [playersTeam2, setPlayersTeam2] = useState<Player[]>([]);

  useEffect(() => {
    const generateRandomPlayers = () => {
      const team1Players = Array.from({ length: 11 }, (_, i) => generateRandomPlayer(i));
      const team2Players = Array.from({ length: 11 }, (_, i) => generateRandomPlayer(i));

      setPlayersTeam1(team1Players);
      setPlayersTeam2(team2Players);
    };

    generateRandomPlayers();
    const interval = setInterval(generateRandomPlayers, 5000); // Update players every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="bg-gray-900 text-white flex justify-center ">
      <div className="">
      <h1 className="text-center text-4xl hover:bg-black hover:text-white">Live Score</h1>
        <h1 className="text-2xl">{team1} vs {team2}</h1>
        <h3>{team1} Players</h3>
        <table className="border-collapse border border-gray-600 m-2">
          <thead>
            <tr>
              <th className="border border-gray-600 p-2">Player Name</th>
              <th className="border border-gray-600 p-2">Batting Runs</th>
              <th className="border border-gray-600 p-2">Balls Faced</th>
              <th className="border border-gray-600 p-2">Bowling Wickets</th>
              <th className="border border-gray-600 p-2">Overs Bowled</th>
            </tr>
          </thead>
          <tbody>
            {playersTeam1.map((player, index) => (
              <tr key={index}>
                <td className="border border-gray-600 p-2">{player.name}</td>
                <td className="border border-gray-600 p-2">{player.batting.runs}</td>
                <td className="border border-gray-600 p-2">{player.batting.ballsFaced}</td>
                <td className="border border-gray-600 p-2">{player.bowling.wickets}</td>
                <td className="border border-gray-600 p-2">{player.bowling.oversBowled}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3>{team2} Players</h3>
        <table className="border-collapse border border-gray-600 m-2">
          <thead>
            <tr>
              <th className="border border-gray-600 p-2">Player Name</th>
              <th className="border border-gray-600 p-2">Batting Runs</th>
              <th className="border border-gray-600 p-2">Balls Faced</th>
              <th className="border border-gray-600 p-2">Bowling Wickets</th>
              <th className="border border-gray-600 p-2">Overs Bowled</th>
            </tr>
          </thead>
          <tbody>
            {playersTeam2.map((player, index) => (
              <tr key={index}>
                <td className="border border-gray-600 p-2">{player.name}</td>
                <td className="border border-gray-600 p-2">{player.batting.runs}</td>
                <td className="border border-gray-600 p-2">{player.batting.ballsFaced}</td>
                <td className="border border-gray-600 p-2">{player.bowling.wickets}</td>
                <td className="border border-gray-600 p-2">{player.bowling.oversBowled}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LiveScoreComponent;
