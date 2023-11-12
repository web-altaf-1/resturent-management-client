import db from "./../temp-database"

// Contains 
function ImageBox() {
    return (
        <div>
            <div className="image-container">
                <img src="./five-guys.jpeg" />
            </div>
            <div className="text-overlay">
                <h2>
                    {db[0].name}
                </h2>
                <h6>
                    Rating: {db[0].rating}
                </h6>
            </div>
        </div>
    )
}