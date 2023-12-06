import {React, useState} from "react";
import {Link} from 'react-router-dom';
import SearchBar from "./searchBar"
import {useDispatch, useSelector} from 'react-redux';
import {setSearchName, setDistance} from './searchReducer'
import {useEffect} from 'react'
import StarRating from "./starRating"
import ApiImport from "./ApiImport";
import "./styling/search.css";

const SearchPage = () => {

    const dispatch = useDispatch();
    const searchName = useSelector((state) => state.search.name);
    const searchResults = useSelector((state) => state.search.results);
    const searchDistance = useSelector((state) => state.search.distance);

    const [userLocation, setUserLocation] = useState(null);
    const [restaurantDistance, setRestaurantDistance] = useState([]);

    const getUserLocation = () => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) =>
            {
                const location = {
                    lat: position.coords.latitude,
                    long: position.coords.longitude,
                };
                setUserLocation(location);
                console.log(location);
            },
            (error) => {
                console.error('Error getting user location:', error.message)
            }
            );
        }
        else{
            console.error('Geolocation is not supported in your browser.')
        }
    };

    function calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 3958.8; // Earth radius in miles
      
        const dLat = toRadians(lat2 - lat1);
        const dLon = toRadians(lon2 - lon1);
      
        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
      
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      
        const distance = R * c; // Distance in miles
        return distance;
      }
      
      function toRadians(degrees) {
        return degrees * (Math.PI / 180);
      }

    useEffect(() =>{

        getUserLocation();

        //Add entire restaurant list when there is no search terms
        dispatch(setSearchName(searchName));

        console.log("Search Results:", searchResults);

    },[]);

    useEffect(() => {

        if(userLocation && searchResults?.length > 0){
            const updateResults = searchResults?.map((restaurant) => {
                const distance = calculateDistance(userLocation?.lat, userLocation?.long, restaurant?.Lat, restaurant?.Long);
                return {distance};
            });
            dispatch(setDistance(updateResults));
        }


    }, [userLocation]);

    const avgRating = (rating) => {
        let sum = 0;
        for (var i = 0; i < rating.length; i++){
            sum += rating[i];
        }
        return (sum / rating.length);
    }


    return(
        <div className="container">
            <h1> Search </h1>
            <p>Seach for the best restaurants that cater to you needs!</p>
            <SearchBar/>
            <div>
                <h3>Search Results:</h3>
                {searchResults?.length === 0 ? (<ApiImport />) : 
                (
                    <ol>
                    
                        {searchResults?.map((result) => (
                            <Link key={result.id} to={`/restaurant/${result.id}`}>
                                <li key={result.id} className="restaurantList"> 
                                    <h3 style={{color: "blue"}}>{result.name}</h3>  
                                    <div className="d-flex">
                                    <StarRating rating={avgRating(result.reviews)}/> <p>{result?.reviews?.length} reviews</p>
                                    </div>
                                    <strong>{searchDistance?.length === 0 ? "" : Math.round(searchDistance[result.id -1].distance * 10)/10 + " mi away"} </strong>
                                    <h5>{result.streetAddress}, {result.City}, {result.zipCode}</h5>
                                    <h5>{result.cuisine}</h5>
                                </li>
                            </Link>
                        ))}
                    </ol>
                )}
            </div>
        </div>
    );
};

export default SearchPage;