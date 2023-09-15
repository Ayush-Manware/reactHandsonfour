import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Student from "./component/Student";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";
import { NewStudent } from "./component/NewStudent";
import EditStudent from "./component/EditStudent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Student" element={<Student />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/newStudent" element={<NewStudent/>} />
          <Route path="/EditStudent" element={<EditStudent/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
