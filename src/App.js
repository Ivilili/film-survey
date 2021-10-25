import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "./api/survey";

import HeaderBanner from "./components/HeaderBanner/HeaderBanner";
import Form from "./components/Form/Form";
import "./App.scss";

function App() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({ film: null, review: null });
  const [required, setRequired] = useState("");
  const [error, setError] = useState();
  const history = useHistory();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const reqData = {
    answers: [
      {
        questionId: "film",
        answer: form.film,
      },
      {
        questionId: "review",
        answer: form.review,
      },
    ],
  };

  //post review
  const postReview = async (e) => {
    if (!form.review === null) {
      setRequired("Required!");
    }
    if (form.review && form.film) {
      setRequired("");
      console.log("post request");
      history.push("/success");

      await api
        .post(`${data?.id}/answers`, reqData)
        .then((res) => {
          if (res.status === 201) {
            localStorage.setItem(
              "userReview",
              JSON.stringify(res?.data?.attributes)
            );
          }
          history.push("/success");
          console.log(res, "post res!!!");
        })
        .catch((err) => console.log(err));
    }
    e.preventDefault();
  };

  //get data
  const getData = async () => {
    await api
      .get("/")
      .then((res) => {
        if (res.status === 200) {
          setData(res?.data.data);
        }
      })
      .catch((err) => {
        console.log(err.response);
        if (err?.response?.status === 500) {
          setError(err?.response?.data?.errors[0]?.detail);
        }
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <HeaderBanner data={data} />
      <Form
        data={data}
        required={required}
        error={error}
        handleChange={handleChange}
        handleSubmit={postReview}
      />
    </div>
  );
}

export default App;
