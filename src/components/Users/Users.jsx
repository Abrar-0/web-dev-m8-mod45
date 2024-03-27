import { Link, useLoaderData } from "react-router-dom";

const Users = () => {

    const users = useLoaderData();
    const style = {
        gap:'10px',
        display:'grid',
        gridTemplateColumns: 'repeat(3,1fr)'
    }
    const sty = {
        border:'2px solid yellow',
        borderRadius: '10px',
        padding: '10px',
        margin: '10px'
    }

    return (
        <div>
            <h2>Our Users: {users.length}</h2>
            <p>Fantastic users</p>
            <div style={style}>
            {
                users.map(user => <div style={sty}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                    <Link to={`/user/${user.id}`}>Show Details</Link>
                    <Link to={`/user/${user.id}`}>
                        <button>Click me</button>
                    </Link>
                </div>)
            }
            </div>
        </div>
    );
};

export default Users;
