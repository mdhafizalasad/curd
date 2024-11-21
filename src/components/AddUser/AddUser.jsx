import { data } from "autoprefixer";
import React from "react";

const AddUser = () => {
  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    // object
    const user = { name, email, image };
    //console.log(user);

    fetch("https://2421backend-server.vercel.app/user", {
        method: "POST",
        headers:{
            "content-type": "application/json",
        },
        body: JSON.stringify(user),
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.acknowledged){
        alert(`${name} Added successfully`);
        form.reset();
      }
        //console.log(data);
    });
  };

  return (
    <div>
        <h1 className="text-3xl my-5 text-center">Add New User</h1>
          {/*====== add user form ======*/}
      <div className="flex justify-center items-center mt-10">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleAddUser} className="card-body">
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="input input-bordered mb-3"
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Enter your valid email"
              className="input input-bordered mb-3"
              required
            />
            <input
              name="image"
              type="text"
              placeholder="Enter your photo url"
              className="input input-bordered mb-3"
              required
            />

            <div className="form-control mt-6">
              <input
                type="Submit"
                value="Add User"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
