import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ViewRecipe = () => {
  const [recipename, setRecipeName] = useState([]); //useState hook for state Management
  const [ingrediants, setIngrediants] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const { id } = useParams(); //catch parameters whih we passed
  let navigate = useNavigate(); //navigate to the desired page like redirect

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `http://localhost:8070/code94labs/get/${id}` //getting relavent Recipe by using id
      );

      setRecipeName(data.recipename); //set data
      setIngrediants(data.ingrediants);
      setDescription(data.description);
      setDate(data.today);
    };
    getData();
  }, [id]);

  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure you want to proceed?")) {
      //Alert logic
      //proceed
      try {
        await axios.delete(`http://localhost:8070/code94labs/delete/${id}`); //delete relavant item
        alert("Recipe Deleted");
        navigate("/"); //redirect to the root page
      } catch (error) {
        alert(error);
      }
    } else {
      alert("Discarded the process"); //if user pressed cancel, discard changes
    }
  };

  return (
    <>
      <div className="card text-center">
        <div className="card-header">
          <span style={{ color: "red" }}>{recipename}</span>
        </div>
        <div className="card-body">
          <h5 className="card-title">Ingrediants</h5>
          <p className="card-text">{ingrediants}</p>
          <h5 className="card-title">Description</h5>
          <p className="card-text">{description}</p>
          <button
            className="btn btn-danger shadow-none"
            onClick={() => deleteHandler(id)}
            style={{ marginRight: "5px" }}
          >
            <span style={{ fontSize: "12px" }}>
              <i className="fa fa-trash-o" aria-hidden="true"></i> Delete
            </span>
          </button>
          <Link to={`/edit/${id}`}>
            <button className="btn btn-success shadow-none">
              <span style={{ fontSize: "12px" }}>
                <i className="fa fa-pencil" aria-hidden="true"></i> Update
              </span>
            </button>
          </Link>
        </div>
        <div className="card-footer text-muted">Date created : {date}</div>
      </div>
    </>
  );
};

export default ViewRecipe;
