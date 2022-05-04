import TimeTracker from "./TimeTracker";
import {TitleAndTime} from "./TitleAndTime";
import AllButtons from "./AllButtons";
import './styles/Player.css';
import {Song} from "../../data/songs";

export type PlayerProps = {
    songs:Song[],
    currentSong:number,
    setCurrentSong(id:number):void
}
export const Player = (props:PlayerProps) => {
    return (
        <div className="Player">
            <TitleAndTime songs={props.songs} currentSong={props.currentSong}/>
            <TimeTracker/>
            <AllButtons songs={props.songs} currentSong={props.currentSong} setCurrentSong={props.setCurrentSong}/>
        </div>)
};
