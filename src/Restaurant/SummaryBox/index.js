// Include popups based on user preferences
import db from "./../temp-database"
function SummaryBox({ rId }) {
    const restaurantDb = db.restaurants;
    return (
        <div>
            <h2> For You:</h2>
            To put here: <br />
            Anything that matches the user's preferences <br />
            Other restaurant detail that we can get, such as opening hours, map embed, etc <br />
            <br />
            <p>Other users say...: Gluten Free (80%)</p>
            
        </div>
    )
}

export default SummaryBox;