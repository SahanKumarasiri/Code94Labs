import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    //logic for getting all data
    const fetchData = async () => {
      const res = await fetch("http://localhost:8070/code94labs");
      const json = await res.json();
      setRecipes(json);
    };
    fetchData();
  }, []);

  let filteredData = recipes.filter(
    (el) =>
      el.recipename.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) >= 0
  ); //filtering the data acording to the search

  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure you want to proceed?")) {
      //Alert logic
      //proceed
      try {
        await axios.delete(`http://localhost:8070/code94labs/delete/${id}`); //delete relavant item
        alert("Recipe Deleted");
        const res = await fetch("http://localhost:8070/code94labs"); //callback again all data
        const json = await res.json(); //convert result to the JSON Format
        setRecipes(json);
        filteredData = recipes.filter((el) => el.recipename !== id);
      } catch (error) {
        alert(error);
      }
    } else {
      alert("Discarded the process"); //if user pressed cancel, discard changes
    }
  };

  return (
    <div className="div">
      <table class="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Recipe Name</th>
            <th scope="col">Ingrediants</th>
            <th scope="col">Description</th>
            <th scope="col">
              <form class="form-inline">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </form>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length === 0 ? ( //check whether filtered data is equal to the 0; if 0, then data not found
            <tr>
              <td>No data found</td>
            </tr>
          ) : (
            //else part of the conditional statement
            filteredData.map((el, index) => {
              //map all the data which we filtered
              return (
                <tr key={el._id}>
                  <th scope="row">{index + 1}</th>
                  <Link to={`/view/${el._id}`} style={{ color: "lightgreen" }}>
                    <td style={{ maxWidth: "10rem" }}>{el.recipename}</td>
                  </Link>
                  <td style={{ maxWidth: "10rem" }}>
                    <span style={{ fontSize: "12px" }}>{el.ingrediants}</span>
                  </td>
                  <td style={{ maxWidth: "10rem" }}>
                    <span style={{ fontSize: "12px" }}>{el.description}</span>
                  </td>
                  <td style={{ maxWidth: "10rem" }}>
                    <button
                      className="btn btn-danger shadow-none"
                      onClick={() => deleteHandler(el._id)}
                      style={{ marginRight: "5px" }}
                    >
                      <span style={{ fontSize: "12px" }}>
                        <i className="fa fa-trash-o" aria-hidden="true"></i>{" "}
                        Delete
                      </span>
                    </button>
                    <Link to={`/edit/${el._id}`}>
                      <button className="btn btn-success shadow-none">
                        <span style={{ fontSize: "12px" }}>
                          <i className="fa fa-pencil" aria-hidden="true"></i>{" "}
                          Update
                        </span>
                      </button>
                    </Link>
                  </td>
                  <td style={{ maxWidth: "10rem" }}>
                    <span style={{ fontSize: "10px" }}>
                      Date created : {el.today}
                    </span>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
