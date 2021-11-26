
import "./Admin.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Admin = () => {
 
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
      console.log(data)
    fetch("https://macabre-cheateau-65418.herokuapp.com//trips", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("User trips");
          reset()
        }
      });
  };

  return (
    <div className="admin-container">
      <div className="left-container">
        <h5>add our trips</h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name", { required: true })} placeholder="name" />
          <textarea {...register("description")} placeholder="description" />
          <input {...register("price")} placeholder="price" />
          <input {...register("img")} placeholder="img" />
          <input {...register("Duration")} placeholder="Duration" />
          <input {...register("star")} placeholder="Rating" />
          <input {...register("type")} placeholder="internal/external" />
          <input {...register("about")} placeholder="About discount" />
          <input type="submit" />
        </form>
      </div>
      <div className="right-container">
      <div className="container">
        <Link as={Link} to="/manageorder">Manage order</Link>
        <Link as={Link} to="/admin">Add Trip</Link>
      </div>
      </div>
    </div>
  );
};

export default Admin;
