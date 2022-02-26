import { useRef } from 'react';
import {getHike} from '../../utils/API'


const SearchBar = () => {

    const SearchHike = useRef();

async function getHikingData(){

    const hike = await getHike();
    console.log(hike)
    console.log(SearchHike.current.value)
}
    return (
        <div>
            <label htmlFor="header-search">
                <span className="visually-hidden">Search for Hikes</span>
            </label>
            <input
                ref={SearchHike}
                type="text"
                id="header-search"
                placeholder="Search for Hikes"
                name="s"
            />
            <button onClick={getHikingData} >Search</button> 
        </div>    
    );


}

export default SearchBar;