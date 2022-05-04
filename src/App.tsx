import './App.css';
import React, {useState} from "react";
import NewSearch from "./components/newSearch/NewSearch"
import {songLoader} from "./data/songs";
import {SongList} from "./components/songsLogic/SongList";
import {Player} from "./components/player/Player";

function App() {
    const [currentSong, setCurrentSong] = useState<number>(-1);

    const songs = songLoader();
    return (
        <div className="main">
            <NewSearch/>
            <Player songs={songs} currentSong={currentSong} setCurrentSong={setCurrentSong}/>
            <p>show this</p>
            <SongList songs={songs} currentSong={currentSong} setCurrentSong={setCurrentSong}/>
        </div>

    )
}
export default App;
