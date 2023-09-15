import React from "react";
import Store from "../Data/Store";
import { Link } from "react-router-dom";
// import { useEffect } from "react";
import { useContext } from "react";
import ContextApi from "../context/ContextApi";

function Student() {

    const contextData = useContext(ContextApi);
    console.log(contextData)

  return (
    <>

      <div className="studentContainer">
        <div className="div1">
          <span className="StudentDetail">Student Details</span>
          <button className="addStudent"> + </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Course</th>
              <th>Batch</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
            {/* {Store && Store.length > 0
              ? */}
              {Store.map((item) => {
                return (
                    <>
                      <tr>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.course}</td>
                        <td>{item.batch}</td>
                        <td>
                          <Link to={"/Form"}>Edit</Link>
                        </td>
                      </tr>
                    </>
                )
               })}
                {/* })
              : alert("No data available")} */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Student;
