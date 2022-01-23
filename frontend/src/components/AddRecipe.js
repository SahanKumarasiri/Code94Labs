import React, { useState } from "react";
import axios from "axios"; //import axios for HTTP requests
import { TextField, Button } from "@material-ui/core"; //import material UI
import { ToastContainer, toast } from "react-toastify"; //for toast messages
import "react-toastify/dist/ReactToastify.css";

const AddRecipe = (props) => {
  const [recipename, setRecipeName] = useState(""); //useState hook for state Management
  const [ingrediants, setIngrediants] = useState("");
  const [description, setDescription] = useState("");

  var m_names = new Array( //get date for the database saving
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  );

  var today = new Date();
  var curr_date = today.getDate();
  var curr_month = today.getMonth();
  var curr_year = today.getFullYear();
  var hour = today.getHours();
  var min = today.getMinutes();

  today =
    m_names[curr_month] +
    " " +
    curr_date +
    "/ " +
    curr_year +
    " " +
    hour +
    " : " +
    min;

  let r = null; //these are for referencing input boxes
  let i = null;
  let d = null;
  let submit = null;
  const [loading, setLoading] = useState(false); //additional
  const [isError, setIsError] = useState(false);

  const recipeHandler = async (e) => {
    //logic for adding data to the backend
    e.preventDefault();

    setLoading(true);
    setIsError(false); //additional

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      //exception handling
      const { data } = await axios.post(
        "http://localhost:8070/code94labs/add",
        { recipename, ingrediants, description, today },
        config
      );
      toast("Success! Recipe Added 😘");
      setRecipeName("");
      setIngrediants("");
      setDescription("");
      setLoading(false);
    } catch (error) {
      toast(
        "Error! Novel not Added Duplicate Key Found: Recipe Name must be unique"
      );
      setLoading(false);
      setIsError(true);
      setTimeout(() => {}, 5000); //5s
    }
  };

  const onKeyUp = (target, e) => {
    //this logic goes to references in input boxes
    //key pressing
    if (e.keyCode === 13) {
      //keycode 13 is "ENTER Button"
      switch (target) {
        case "recipename":
          recipename.focus(); //case success forcus the input box
          break;
        case "ingrediants":
          ingrediants.focus();
          break;
        case "description":
          description.focus();
          break;
        case "submit":
          submit.focus();
          break;
        default:
          recipename.focus();
      }
    }
  };

  return (
    <>
      <form onSubmit={recipeHandler}>
        <div className="card">
          <div className="card-header"></div>
          <div className="card-body">
            <center>
              <h5 className="card-title">Add Recipe</h5>
              <TextField
                id="outlined-with-placeholder"
                label="Enter Recipe Name"
                placeholder="ex: example recipe"
                margin="normal"
                variant="outlined"
                type="text"
                value={recipename}
                onChange={(e) => setRecipeName(e.target.value)}
                ref={(input) => {
                  r = input;
                }}
                onKeyUp={(e) => onKeyUp(e, "age")}
                required
              />
              <br />
              <TextField
                id="outlined-with-placeholder"
                label="Enter Ingrediants"
                placeholder="ex: example ingrediants"
                margin="normal"
                variant="outlined"
                type="text"
                value={ingrediants}
                onChange={(e) => setIngrediants(e.target.value)}
                ref={(input) => {
                  i = input;
                }}
                onKeyUp={(e) => onKeyUp(e, "ingrediants")}
                required
              />
              <br />
              <TextField
                id="outlined-with-placeholder"
                label="Enter Description"
                margin="normal"
                variant="outlined"
                placeholder="your description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                ref={(input) => {
                  d = input;
                }}
                onKeyUp={(e) => onKeyUp(e, "description")}
                required
              />

              <br />
              {isError && (
                <small className="mt-3 d-inline-block text-danger">
                  Something went wrong. Please try again later.
                </small>
              )}
              {/*decision*/}
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={loading}
                value={submit}
                ref={(input) => {
                  submit = input;
                }}
                onKeyUp={(e) => onKeyUp(e, "submit")}
              >
                <i class="fa fa-upload" aria-hidden="true"></i>{" "}
                <h6 style={{ marginLeft: "5px" }}> </h6>{" "}
                {loading ? "Uploading..." : "Upload"}
              </Button>
              <ToastContainer style={{ marginTop: "50px" }} />
            </center>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddRecipe;
