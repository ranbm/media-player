export type Song = {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  link: string;
  like:boolean;
};
const DUMMY_SONGS: Song[] = [
        {id: 0, title: 'song 2', artist: 'blur', album: 'best of', duration: '2:22', link:'#', like:false},
        {id: 1, title: 'crying in the rain', artist: 'avi bitter', album: 'best of', duration: '3:22', link:'#', like:false},
        {id: 2, title: 'white screen', artist: 'white screen', album: 'test', duration: '5:21', link:'#', like:false}
    ];

console.log(DUMMY_SONGS);
export const songLoader = (): Song[] => DUMMY_SONGS;