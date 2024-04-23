import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users,setUsers]=useState(loadedUsers);

    const handleDeleteUser = _id => {
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`,{
            method:'DELETE'
        })
         .then(res => res.json())
         .then(data => {
            console.log(data);
            if(data.deletedCount>0  ){
                alert('user deleted successfully')
                const remaining =users.filter(user => user._id !==_id);
                setUsers(remaining);
            }
          });
       
    };
    return (
        <div>
            <h3>total users:{users.length}</h3>
            <div>
                {users.map(user => <p key={user._id}>
                    {user.name}: {user.email} 
                    <Link to={`/users/${user._id}`}><button>update</button></Link>
                <button onClick={()=>handleDeleteUser(user._id)}>X</button></p>)}
            </div>
        </div>
    );
};

export default Users;