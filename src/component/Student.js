import React, { useContext } from "react";
import Store from "../Store/Store";
import { Link, useNavigate } from "react-router-dom";

function Student() {

  const [received] = useContext(Store);

  const handleCancel = useNavigate();

  console.log(received)

  function submitnew(){
   handleCancel("/Student") 
  }

  return (
    <>
      <div className="studentMainContainer">
        <div className="div1">
          <span className="StudentDetail">Student Details</span>
           <Link to={"/newStudent"}><button className="addStudent" onClick={submitnew}> + </button></Link> 
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
            {received.map((item, index) => {
              return (
                <>
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.course}</td>
                    <td>{item.batch}</td>
                    <td>
                      <Link to={"/EditStudent"} state={{index}} >Edit</Link>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Student;
