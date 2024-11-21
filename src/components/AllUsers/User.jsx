import { data } from "autoprefixer";
import React from "react";
import { Link } from "react-router-dom";

const User = ({user, refetch }) => {
    const {  name, email, image, _id } = user;

    // delete function
    const handleDeleteUser =(user)=>{
      const agree = window.confirm(`Are you want to delete ${user?.name}?`);
      if(agree){
        fetch(`https://2421backend-server.vercel.app/users/${_id}`,{
          method: "DELETE",
        })
        .then(res=>res.json())
        .then(data=>{
          if (data.deletedCount >0) {
            alert("User deleted Successfully");
            refetch();
          }
        });
        }

    };

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src={image}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name} :: {_id}</h2>
        <p>{email}</p>
        <div className="card-actions justify-between">
          <button onClick={()=>handleDeleteUser(user)} className="btn btn-error text-white">Delete</button>
          <Link to={`/update/${_id}`}><button className="btn btn-info text-white">Update</button></Link>
          
        </div>
      </div>
    </div>
  );
};

export default User;
