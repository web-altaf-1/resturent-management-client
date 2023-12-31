import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setSearchName, setCuisineFilter, setZipCodeFilter, setCityFilter, setStreetAddressFilter} from './searchReducer'

const SearchBar = () => {
  //const [searchTerm, setSearchTerm] = useState('');
  //const [searchResults, setSearchResults] = useState([]);

  const dispatch = useDispatch();
  const {searchName, cuisine, zipCode, city, streetAddress} = useSelector((state) => state.search);

  const handleNameChange = (event) => {
    console.log(event.target.value);
    dispatch(setSearchName(event.target.value));
    console.log(`New Name: ${event.target.value}`);
  };

  const handleCuisineChange = (newCuisine) => {
    dispatch(setCuisineFilter(newCuisine));
  };

  const handleZipCodeChange = (newZipCode) => {
    dispatch(setZipCodeFilter(newZipCode));
  };

  const handleCityChange = (newCity) => {
    dispatch(setCityFilter(newCity));
  };

  const handleStreetAddressChange = (newStreetAddress) => {
    dispatch(setStreetAddressFilter(newStreetAddress));
  };

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
      <label htmlFor='name'>Restaurant Name</label>
        <input
          style={searchStyle}
          id="name"
          type="text"
          placeholder="Search by Restaurant Name"
          value={searchName}
          onChange={handleNameChange}
        />
      <label htmlFor='cuisine'>Cuisine</label>
      <input style={searchStyle} id="cuisine" type="text" placeholder="Search by Cuisine" value={cuisine} onChange={(e) => handleCuisineChange(e.target.value)} />
      <label htmlFor='zip'>Zip Code</label>
      <input style={searchStyle} id="zip" type="text" placeholder="Search by ZIP Code" value={zipCode} onChange={(e) => handleZipCodeChange(e.target.value)} />
      <label htmlFor='city'>City</label>
      <input style={searchStyle} id="city" type="text" placeholder="Search by City" value={city} onChange={(e) => handleCityChange(e.target.value)} />
      <label htmlFor='address'>Address</label>
      <input style={searchStyle} id="address" type="text" placeholder="Search by Street Address" value={streetAddress} onChange={(e) => handleStreetAddressChange(e.target.value)} />
    </div>
  );
};

export default SearchBar;