import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const UpdateUser = () => {
  const storedUser = useLoaderData(); // data load from api and set in state default value
  //console.log(user);

  //const [user, setUser] = useState(storedUser); // {user.name} {user._id} 

  const handleUpdateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    const user = { name, email, image };

    fetch(`https://2421backend-server.vercel.app/user/${storedUser._id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(user),
    })
    .then((res) => res.json())
    .then((data) => {
        if (data.modifiedCount > 0){
            alert("User updated sucessfully!");
            //form.reset();
        }
    }); 

  };

  return (
    <div>
      <h1 className="my-5 text-3xl text-center">Update User </h1> 

      <div className="flex justify-center items-center mt-10">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleUpdateUser} className="card-body">
            <input
              name="name"
              defaultValue={storedUser.name}
              type="text"
              placeholder="Enter your name"
              className="input input-bordered mb-3"
              required
            />

            <input
              name="email"
              type="email"
              defaultValue={storedUser.email}
              placeholder="Enter your valid email"
              className="input input-bordered mb-3"
              required
            />
            <input
              name="image"
              defaultValue={storedUser.image}
              type="text"
              placeholder="Enter your photo url"
              className="input input-bordered mb-3"
              required
            />

            <div className="form-control mt-6">
              <input
                type="Submit"
                value="Update User"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
