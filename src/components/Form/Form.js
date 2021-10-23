import React from "react";
import "./Form.scss";

const Form = (props) => {
  const { data, handleChange, required, error, handleSubmit } = props;

  console.log("data", data);

  return (
    <div className="Form">
      <form id="survey-form" autoComplete="off" onSubmit={handleSubmit}>
        <div className="form-column">
          {data?.attributes?.questions &&
            data?.attributes?.questions.map((question, index) => (
              <div key={index}>
                {question?.attributes === null ? (
                  <div className="Form__question-container">
                    <label
                      htmlFor={question?.questionId}
                      id="movie-name-label"
                      className="Form__question"
                    >
                      {question?.label}
                    </label>
                    <input
                      type={question?.questionType}
                      name={question?.questionId}
                      id={question?.questionId}
                      placeholder="Enter the name of the film"
                      autoComplete="nope"
                      required={question?.required}
                      onChange={handleChange}
                    />
                  </div>
                ) : (
                  <>
                    <div className="radio-buttons">
                      <h3 className="Form__question">{question?.label}</h3>

                      <div className="radio-button">
                        <input
                          type="radio"
                          name="review"
                          value="movie-review-bad"
                          id="movie-review-bad"
                          onChange={handleChange}
                          required={question?.required}
                        />
                        <label
                          htmlFor="movie-review-bad"
                          className="radio-button-label"
                        >
                          <span className="radio-button-span"></span>
                          {question?.attributes?.min}
                        </label>
                      </div>

                      <div className="radio-button">
                        <input
                          type="radio"
                          name="review"
                          value="movie-review-good"
                          id="movie-review-good"
                          required={question?.required}
                          onChange={handleChange}
                        />
                        <label
                          htmlFor="movie-review-good"
                          className="radio-button-label"
                        >
                          <span className="radio-button-span"></span>
                          {question?.attributes?.max}
                        </label>
                      </div>
                    </div>
                    {required && <div> {required}</div>}
                  </>
                )}
              </div>
            ))}
          <div className="Form__button">
            <input
              className="Form__button-submit"
              type="submit"
              value="Submit"
              id="submit"
            />
            {error && <div> {error}</div>}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
