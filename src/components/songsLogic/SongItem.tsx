import './styles/SongItem.css'
import {useState} from "react";


export const SongItem = ({Song, playNow,setCurrentSong}) => {
    const [, setLiked] = useState(false)
    const fontWeight = playNow === Song.id ? 'bold' : 'normal'
    const clickHandler = () => {
        setLiked(true);
    }

    return (
        <tr className={Song.id} style={{fontWeight}} onDoubleClick={()=>setCurrentSong(Song.id)} key={Song.id}>
            <td className='title'>{Song.title}</td>
            <td className="artist">{Song.artist}</td>
            <td className="album">{Song.album}</td>
            <td className="duration">{Song.duration}</td>
            <td className="link">{Song.link}</td>
            <td>
                <button className="liked" onClick={clickHandler}>like</button>
            </td>
        </tr>

    )
}
