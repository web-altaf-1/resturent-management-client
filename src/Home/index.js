import React from "react";
import SearchBar from "./Home_Components/searchBar";

function Home() {
    const homeStyle = {display: "flex", alignItems: "center", flexDirection: "column", backgroundColor: "#36454F", height: "60vh"};
    return (
        <>
            <div style={homeStyle}>
                <h1>Welcome to Restaurant Dev branch Justin's Version</h1>
                <SearchBar/>
            </div>
        </>
    )
}

export default Home;