// Include popups based on user preferences
import db from "./../temp-database"
function SummaryBox() {
    const restaurantDb = db.restaurants;
    return (
        <div>
            <h2> For You:</h2>
            To put here: <br />
            Anything that matches the user's preferences <br />
            Other restaurant detail that we can get, such as opening hours, map embed, <br />
            <br />
            
            
        </div>
    )
}

export default SummaryBox;