import {Song} from "../../data/songs";

export const TitleAndTime = (props:{songs:Song[],currentSong:number}) =>{
    if (props.currentSong!=-1){
    return(
    <p>{props.songs[props.currentSong].title}</p>
    )
        }
    else{
        return (<p>hi and welcome</p>)

    }
}
