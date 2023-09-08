import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Student from "./component/Student";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";
import Form from "./Form/Form";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Student" element={<Student />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Forms" element={<Form />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
