import React from "react";
import SearchBar from "./searchBar"
import {useDispatch, useSelector} from 'react-redux';
import {setSearchName} from './searchReducer'
import {useEffect} from 'react'

const SearchPage = () => {

    const dispatch = useDispatch();
    const searchName = useSelector((state) => state.search.name);
    const searchResults = useSelector((state) => state.search.results);

    useEffect(() =>{

        dispatch(setSearchName(searchName));

    }, [dispatch, searchName]);

    return(
        <div className="container">
            <h1> Search </h1>
            <p>Seach for the best restaurants that cater to you needs!</p>
            <SearchBar/>
            <div>
                <h3>Search Results:</h3>
                {searchResults.length === 0 ? (<p> No Results found. </p>) : 
                (
                    <ol>
                        {searchResults.map((result) => (
                            <li key={result.id}> 
                                <h3>{result.name}</h3>  
                                <p>{result.reviews.length} reviews</p>
                                <h5>{result.streetAddress}, {result.City}, {result.zipCode}</h5>
                                <h5>{result.cuisine}</h5>
                            </li>
                        ))}
                    </ol>
                )}
            </div>
        </div>
    );
};

export default SearchPage;