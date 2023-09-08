import { Link } from "react-router-dom"

function Student(){
    return(
        <>
            <div className="studentMainContainer">
                <div className="div1">
                    <span className="StudentDetail">Student Details</span>
                    <button className="addStudent"> + </button>
                </div>
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
                        <td>John</td>
                        <td>26</td>
                        <td>MERN</td>
                        <td>October</td>
                        <td><Link to={"/Form/Forms"}>Edit</Link></td>
                    </tr>
                    <tr>
                        <td>John</td>
                        <td>26</td>
                        <td>MERN</td>
                        <td>October</td>
                        <td><Link to={"/Form/Forms"}>Edit</Link></td>
                    </tr>
                    <tr>
                        <td>John</td>
                        <td>26</td>
                        <td>MERN</td>
                        <td>October</td>
                        <td><Link to={"/Form/Forms"}>Edit</Link></td>
                    </tr>
                    <tr>
                        <td>John</td>
                        <td>26</td>
                        <td>MERN</td>
                        <td>October</td>
                        <td><Link to={"/Form/Forms"}>Edit</Link></td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default Student