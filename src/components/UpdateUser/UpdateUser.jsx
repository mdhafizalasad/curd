import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import background from "../../assets/images/background.jpg";
const UpdateUser = () => {
  const storedUser = useLoaderData(); // data load from API
  const navigate = useNavigate();

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
        if (data.modifiedCount > 0) {
          alert("User updated successfully!");
          navigate("/all-users");
        }
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
        <h1 className="text-3xl font-bold text-center mt-5">Update User</h1>
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
            placeholder="Enter your photo URL"
            className="input input-bordered mb-3"
            required
          />
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Update User"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
