import React, { useState } from "react";
import axios from "axios";
import "./Footer.css";

const Footer = () => {
  var m_names = new Array(
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
  var curr_year = today.getFullYear();

  today = curr_year;

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const sendEmailHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "http://localhost:8070/api/auth/sendEmail",
        { email },
        config
      );

      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000); //5s
    }
  };
  return (
    <>
      <footer
        className="text-center text-white"
        style={{ backgroundColor: "#171717" }}
      >
        <div className="container p-4">
          <section className="">
            <div className="row">
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <img
                    src="https://i.ibb.co/gMJ61C0/breakfast-recipes.jpg"
                    className="w-100 zoom"
                    style={{ width: "100px", height: "100px" }}
                  />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <img
                    src="https://i.ibb.co/8xTrF4g/download.jpg"
                    className="w-100 zoom"
                    style={{ width: "100px", height: "100px" }}
                  />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <img
                    src="https://i.ibb.co/5cqxrX4/images-1.jpg"
                    className="w-100 zoom"
                    style={{ width: "100px", height: "100px" }}
                  />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <img
                    src="https://i.ibb.co/YRqzHkt/images.jpg"
                    className="w-100 zoom"
                    style={{ width: "100px", height: "100px" }}
                  />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <img
                    src="https://i.ibb.co/rtL1C78/Directly-above-shot-of-woman-with-a-basket-full-of-freshly-picked-apples-on-table-with-cake-baking-i.jpg"
                    className="w-100 zoom"
                  />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <img
                    src="https://i.ibb.co/fvpcPvL/stewed-kale-cooking-pot-rustic-kitchen-table-ingredients-vegan-recipes-nuts-garlic-olives-oil-top-vi.jpg"
                    className="w-100 zoom"
                    style={{ width: "100px", height: "100px" }}
                  />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          style={{ color: "gray" }}
        >
          © {today} All Rights Reserved :<span>Code94Labs</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
