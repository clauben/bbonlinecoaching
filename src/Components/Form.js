import React from "react";
import "../App.css";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function Form() {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const [{ user }, dispatch] = useStateValue();

  const onSubmit = (data) => {
    console.log(data);
    console.log(user);
    submitUser(data);
    history.push("/about");
  };

  const submitUser = (data) => dispatch({ type: "SET_USER", user: data.naam });

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1 className="userInputTitel">Fill in your contact details.</h1>
        </div>
        <div className="home">
          <div className="home_userInput">
            <div className="row">
              <div className="col-25">
                <label>name</label>
              </div>
              <div className="col-75">
                <input name="naam" type="text" ref={register}></input>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label>age</label>
              </div>
              <div className="col-75">
                <input name="age" type="text" ref={register}></input>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label>city</label>
              </div>
              <div className="col-75">
                <input name="city" type="text" ref={register}></input>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label>Country</label>
              </div>
              <div className="col-75">
                <input name="country" type="text" ref={register}></input>
              </div>
            </div>
            <div className="row">
              <button>Submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
