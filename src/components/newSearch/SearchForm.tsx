import {useState} from "react";
const SearchForm = () => {
    const [searchVal,setSearchVal] = useState('');
    const searchHandler = (event:any) => {
        setSearchVal(event.target.value)
    };
    const submitHandler=(event:any)=> {
        event.preventDefault();
        console.log(searchVal);


        function getDeezerResult(searchVal:string) {
            const url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/version/service/id/method/?q='+searchVal+'&output=jsonp';
            console.log(url);
            const response = fetch(url,{mode:'cors'});
            console.log(response)
            const data = response//.json();
            console.log(data);
        }
        getDeezerResult(searchVal);
    };

    return (<form onSubmit={submitHandler}>
            <div className='search_val'>
                <label>search songs</label>
                <input type='text' value={searchVal} onChange={searchHandler}/>
            </div>
            <div className="search_action">
                <button type="submit"  >search</button>
            </div>
        </form>
    )
};

export default SearchForm;