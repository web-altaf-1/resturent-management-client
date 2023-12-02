import React from "react";
import PostsList from "./Posts/postsList";
import AddPostForm from "./Posts/addPostForm";

function Home() {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h2>Featured Restaurants</h2>
                <AddPostForm />
                <PostsList />
            </div>
        </>
    )
}

export default Home;