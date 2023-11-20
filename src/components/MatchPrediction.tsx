import { useState } from 'react';

const MatchPrediction = () => {
  const [team1, setTeam1] = useState('');
  const [team2, setTeam2] = useState('');
  const [prediction, setPrediction] = useState('');

  const handlePrediction = () => {
    if (team1 && team2) {
      const teams = [team1, team2];
      const randomWinner = teams[Math.floor(Math.random() * teams.length)];

      setPrediction(`Prediction: ${randomWinner} will win!`);
    } else {
      setPrediction('Please enter both teams\' names for prediction.');
    }
  };

  return (
    <div className='flex flex-col items-center bg-gray-900 text-black'>
      <h1 className='text-3xl text-white'>Match Prediction</h1>
      <label className='text-white'>
        Team 1:
        <input
          type="text"
          className='text-black'
          value={team1}
          onChange={(e) => setTeam1(e.target.value)}
        />
      </label>
      <br/>
      <label className='text-white'>
        Team 2:
        <input
          type="text"
          value={team2}
          className='text-black'
          onChange={(e) => setTeam2(e.target.value)}
        />
      </label>
      <br />
      <div className='text-white'>
      <button onClick={handlePrediction}>Predict Winner</button>
      </div>
      <br />
      {prediction && <p className='text-white'>{prediction}</p>}
    </div>
  );
};

export default MatchPrediction;
