import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import OdiRank from "./components/OdiRank";
import PlayersCompare from "./components/PlayersCompare";
import T20iRank from "./components/T20iRank";
import Loader from './components/Loader'
import LiveScore from "./components/LiveScore";
import MatchPrediction from "./components/MatchPrediction";
// import CricketGame from "./Game/CricketGame";
// import Notifications from "./components/Notifications";
export default function App() {
  return (
    <div className="">
      {/* <CricketGame/> */}
      <MatchPrediction/>
      {/* <Notifications/> */}
     <NavBar/>
     <OdiRank/>
     <T20iRank/>
     <LiveScore/>
     <Footer/>
     <PlayersCompare/>
     <Loader/>
   </div>
  );
}
