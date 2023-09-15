import React from "react";

function Form() {

 
 
  return (
    <>
      <div className="formContainer">
        <input
          type="text"
          id="name"
          name="name" //Vvalue={}
          placeholder="Name*"
          className="nameInput"
        />

        <input
          type="number"
          id="age"
          name="age" //Vvalue={}
          placeholder="Age*"
          className="ageInput"
        />

        <input
          type="text"
          id="course"
          name="course" //Vvalue={}
          placeholder="Course*"
          className="courseInput"
        />

        <input
          type="text"
          id="batch"
          name="batch" //Vvalue={}
          placeholder="Batch*"
          className="batchInput"
        />
        <br />
        <br />
        <div className="buttonDiv">
          <button className="cancelBtn">Cancel</button>
          <button type="submit">Submit</button>
        </div>
      </div>
    </>
  );
}

export default Form;
