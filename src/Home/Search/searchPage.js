import React from "react";
import SearchBar from "./searchBar"
import {useDispatch, useSelector} from 'react-redux';
import {setSearchTerm} from './searchReducer'
import {useEffect} from 'react'

const SearchPage = () => {

    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => state.search.term);
    const searchResults = useSelector((state) => state.search.results);

    useEffect(() =>{

        dispatch(setSearchTerm(searchTerm));

    }, [dispatch, searchTerm]);

    return(
        <div className="container">
            <h1> Search </h1>
            <p>Seach for the best restaurants that cater to you needs!</p>
            <SearchBar/>
            <div>
                <h3>Search Results:</h3>
                {searchResults.length === 0 ? (<p> No Results found. </p>) : 
                (
                    <ul>
                        {searchResults.map((result) => (
                            <li key={result.id}> 
                                <strong>{result.name}</strong> - <strong>{result.cuisine}</strong>
                                <br />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <form className="container d-flex flex-column">
                <label for="restaurant">What type of food are you looking for?</label>
                <input id="restaurant" type="text"></input> <br/>
                <label for="address"> Address, City, State, or Postak Code</label>
                <input id="address" type="text"></input>
                <br/>
                <label>Filter Options</label>
            </form>
        </div>
    );
};

export default SearchPage;