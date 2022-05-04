
const SongFilter = (props:any) =>{
    const dropdownChangeHandler = (event:any)=> {
        props.onChangeFilter(event.target.value);
    };
    return (
        <div className="SongFilter">
            <div className="SongFilter__control">
                <label>filter by artist</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value="all">all artists</option>
                    <option value='avi bitter'>avi bitter</option>
                    <option value="white screen">white screen</option>
                    <option value="blur">blur</option>
                </select>
            </div>
        </div>
    );
};
export default SongFilter;