import React from 'react'

const EditStudent = () => {
  return (
    <>
   <div className="formContainer">
        <h1 className="addStudentText">Edit Details</h1>
        <label htmlFor="name">Name :</label> <br />
        <input
          type="text"
          id="name"
          name="name" //Vvalue={}
        //   placeholder="Name*"
          className="nameInput"
        />{" "}
        <br />
        <label htmlFor="age">Age :</label> <br />
        <input
          type="number"
          id="age"
          name="age" //Vvalue={}
        //   placeholder="Age*"
          className="ageInput"
        />
        <label htmlFor="course">Course :</label> <br />
        <input
          type="text"
          id="course"
          name="course" //Vvalue={}
        //   placeholder="Course*"
          className="courseInput"
        />
        <label htmlFor="batch">Batch :</label> <br />
        <input
          type="text"
          id="batch"
          name="batch" //Vvalue={}
        //   placeholder="Batch*"
          className="batchInput"
        />
        <br />
        <br />
        <div className="buttonDiv">
          <button className="cancelBtn">Cancel</button>
          <button className="addBtn" type="submit">Submit</button>
        </div>
      </div>
  </>
  )
}

export default EditStudent