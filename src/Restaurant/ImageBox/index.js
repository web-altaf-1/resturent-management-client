import db from "./../temp-database"
import restaurantBanner from "./fiveguys.jpeg"

// Contains 
function ImageBox() {
    const restaurantDb = db.restaurants;
    const cuisinesList = restaurantDb[0].cuisines;

    let displayCuisines;
    if (cuisinesList.length > 3) {
        displayCuisines = cuisinesList.slice(0, 3).join(', ') + '...';
    }
    else {
        displayCuisines = cuisinesList.join(', ');
    }

    return (
        <div>
            <div className="image-container">
                <img src={restaurantBanner} alt="restaurantimage" />
                <div className="text-overlay">
                    <h1>
                        {restaurantDb[0].name}
                    </h1>
                    <h4>
                        {displayCuisines}<br />
                        Rating: {restaurantDb[0].rating}
                    </h4>
                </div>
            </div>
        </div>

    )
}

export default ImageBox;