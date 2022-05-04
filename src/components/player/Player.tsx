import TimeTracker from "./TimeTracker";
import {TitleAndTime} from "./TitleAndTime";
import AllButtons from "./AllButtons";
import './styles/Player.css'
export const Player = ({songs, currentSong, setCurrentSong}) => {

    return (
        <div className="Player">
            <TitleAndTime/>
            <TimeTracker/>
            <AllButtons songs={songs} currentSong={currentSong} setCurrentSong={setCurrentSong}/>
        </div>)
};
