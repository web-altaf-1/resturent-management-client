import React, { useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import restaurants from "../../Database/restaurants.json"
import {useDispatch, useSelector} from 'react-redux';
import {setSearchTerm} from './searchReducer'

const SearchBar = () => {
  //const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.search.term);

  const handleSearchChange = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  const fetchData = (value) => {

  }

  const searchStyle = {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc", 
    borderRadius: "5px",
  };

  const searchBarForm = {
    display: "flex",
    alignItems: "center"
  }

  const buttonStyle = {
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    padding: '12px 20px',
    marginLeft: '0px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={{width: "100%"}}>
        <input
          style={searchStyle}
          type="text"
          placeholder="Search for restaurants, businesses, etc."
          value={searchTerm}
          onChange={handleSearchChange}
        />
    </div>
  );
};

export default SearchBar;