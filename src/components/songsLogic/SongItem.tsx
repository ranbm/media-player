import './styles/SongItem.css'
import {useState} from "react";
import {Song} from "../../data/songs";
export type SongItemProps = {
    Song:Song,
    setCurrentSong(id:number):void,
    playNow: number|undefined
}

export const SongItem = (props:SongItemProps) => {
    const [, setLiked] = useState(false)
    const fontWeight = props.playNow === props.Song.id ? 'bold' : 'normal'
    const clickHandler = () => {
        setLiked(true);
    }

    return (
        <tr className="song" style={{fontWeight}} onDoubleClick={()=>props.setCurrentSong(props.Song.id)} key={props.Song.id}>
            <td className='title'>{props.Song.title}</td>
            <td className="artist">{props.Song.artist}</td>
            <td className="album">{props.Song.album}</td>
            <td className="duration">{props.Song.duration}</td>
            <td className="link">{props.Song.link}</td>
            <td>
                <button className="liked" onClick={clickHandler}>like</button>
            </td>
        </tr>

    )
}
