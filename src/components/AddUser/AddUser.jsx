import { data } from "autoprefixer";
import React from "react";
import background from "../../assets/images/background.jpg";

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
    <div
      className="min-h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="card bg-white bg-opacity-80 backdrop-blur-md w-full max-w-sm shadow-2xl">
        <h1 className="text-3xl font-bold text-center mt-5">Add New User</h1>
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
            placeholder="Enter your photo URL"
            className="input input-bordered mb-3"
            required
          />
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Add User"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
