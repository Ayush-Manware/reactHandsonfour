import React from "react";
// import { useContextVariable } from "../CreateContext/CreateContext";
import Store from "../Store/Store";
import { Link } from "react-router-dom";

function Student() {
  // const data = useContextVariable(Store);
  return (
    <>
      <div className="studentMainContainer">
        <div className="div1">
          <span className="StudentDetail">Student Details</span>
           <Link to={"/newStudent"}><button className="addStudent"> + </button></Link> 
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
            {Store.map((item, index) => {
              return (
                <>
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.course}</td>
                    <td>{item.batch}</td>
                    <td>
                      <Link to={"/EditStudent"}>Edit</Link>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* 
              
                <table className="table">
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Batch</th>
                        <th>Change</th>
                    </tr>
                    <tr>
                        <td>John</td>
                        <td>26</td>
                        <td>MERN</td>
                        <td>October</td>
                        <td><Link to={"/Form/Forms"}>Edit</Link></td>
                    </tr>
                    <tr>
                        <td>Ayush</td>
                        <td>21</td>
                        <td>MERN</td>
                        <td>November</td>
                        <td><Link to={"/Form/Forms"}>Edit</Link></td>
                    </tr>
                    <tr>
                        <td>Ankit</td>
                        <td>25</td>
                        <td>MERN</td>
                        <td>December</td>
                        <td><Link to={"/Form/Forms"}>Edit</Link></td>
                    </tr>
                    <tr>
                        <td>Bhanupriya</td>
                        <td>23</td>
                        <td>MERN</td>
                        <td>September</td>
                        <td><Link to={"/Form/Forms"}>Edit</Link></td>
                    </tr>
                    <tr>
                        <td>Srishti</td>
                        <td>22</td>
                        <td>MERN</td>
                        <td>April</td>
                        <td><Link to={"/Form/Forms"}>Edit</Link></td>
                    </tr> 
                </table>
            </div>*/}
    </>
  );
}

export default Student;
