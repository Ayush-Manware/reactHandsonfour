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
          type="text"
          id="name"
          name="name" //Vvalue={}
          placeholder="Name*"
          className="nameInput"
        />
<br /><br />
        <input
          type="text"
          id="name"
          name="name" //Vvalue={}
          placeholder="Name*"
          className="nameInput"
        />

        <input
          type="text"
          id="name"
          name="name" //Vvalue={}
          placeholder="Name*"
          className="nameInput"
        />
    <br /><br />
        <button className="cancelBtn">Cancel</button>
        <button type="submit">Submit</button>
      </div>
    </>
  );
}

export default Form;
