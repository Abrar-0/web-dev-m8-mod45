import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {

    const  navigate = useNavigate();

    const sty = {
        border:'2px solid aqua',
        borderRadius: '10px',
        padding: '10px',
        margin: '10px'
    }

    const handleShowDetail = ()=>{
        navigate(`/post/${id}`)
    }    

    const{id,title} = post
    return (
        <div style={sty}>
            <h4>Post of id: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${post.id}`}>Post Detail</Link>
            <button onClick={handleShowDetail}>Click</button>
        </div>
    );
};

export default Post;
