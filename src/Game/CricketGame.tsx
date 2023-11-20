import  { useState, useEffect } from 'react';
import './CricketGame.css';

const CricketGame = () => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [ballPosition, setBallPosition] = useState({ top: 0, left: 0 });
  const [batPosition, setBatPosition] = useState({ top: 0, left: 0 });

  const handleBallClick = () => {
    setScore(score + 1);
    moveBallRandomly();
  };

  const moveBallRandomly = () => {
    const newTop = Math.floor(Math.random() * window.innerHeight);
    const newLeft = Math.floor(Math.random() * window.innerWidth);
    setBallPosition({ top: newTop, left: newLeft });
  };

  const moveBat = (e) => {
    setBatPosition({ top: e.clientY, left: e.clientX });
  };

  useEffect(() => {
    moveBallRandomly();
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', moveBat);
    return () => document.removeEventListener('mousemove', moveBat);
  }, []);

  return (
    <div className="cricket-game-container">
      <h2>Cricket Game</h2>
      <p>Score: {score}</p>
      <p>Time Left: {timeLeft}s</p>
      <div
        className="cricket-ball"
        style={{ top: ballPosition.top, left: ballPosition.left }}
        onClick={handleBallClick}
      />
      <div
        className="cricket-bat"
        style={{ top: batPosition.top, left: batPosition.left }}
      />
    </div>
  );
};

export default CricketGame;
