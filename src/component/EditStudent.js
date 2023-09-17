import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Store from "../Store/Store";

const EditStudent = () => {
  const handleCancel = useNavigate();

  const locationData = useLocation();

  const indexData = locationData.state.index;

  const [contextData] = useContext(Store);

  console.log(locationData.state.index);
  console.log(contextData);

  const obj = {
    name: contextData[indexData].name,
    age:contextData[indexData].age,
    batch:contextData[indexData].batch,
    course:contextData[indexData].course,
  }

  console.log(obj)

const handlechange = (e)=> {
    obj[e.target.name] = e.target.value
  }
  

const handleSumbit = ()=>{
    contextData[indexData] = obj
    handleCancel(-1)
  }

  return (
    <>
      <div className="formContainer">
        <h1 className="addStudentText">Edit Details</h1>
        <label htmlFor="name">Name :</label> <br />
        <input
          type="text"
          id="name"
          name="name"
          onChange={handlechange}
          className="nameInput"
        />{" "}
        <br />
        <label htmlFor="age">Age :</label> <br />
        <input
          type="number"
          id="age"
          name="age"
          onChange={handlechange}
          className="ageInput"
        />
        <label htmlFor="course">Course :</label> <br />
        <input
          type="text"
          id="course"
          name="course"
          onChange={handlechange}
          className="courseInput"
        />
        <label htmlFor="batch">Batch :</label> <br />
        <input
          type="text"
          id="batch"
          name="batch"
          onChange={handlechange}
          className="batchInput"
        />
        <br />
        <br />
        <div className="buttonDiv">
          <button
            className="cancelBtn"
            onClick={() => handleCancel("/Student")}
          >
            Cancel
          </button>
          <button className="addBtn" type="submit" onClick={handleSumbit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default EditStudent;
