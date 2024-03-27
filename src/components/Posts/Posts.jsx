import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {

    const posts = useLoaderData();

    const style = {
        gap:'10px',
        display:'grid',
        gridTemplateColumns: 'repeat(3,1fr)'
    }

    return (
        <div>
            <h2>Posts: {posts.length}</h2>
            <div style={style}>
                {
                    posts.map(post => <Post post={post} key={post.id}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;
