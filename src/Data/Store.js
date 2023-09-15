import { useState } from "react";
import ContextApi from "../context/ContextApi";
import Home from "../component/Home";
import Contact from "../component/Contact";
import Navbar from "../component/Navbar";
import Form from "../Form/Form";
// import ContextApi from "./context/ContextApi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from "../component/Student";

function Routing() {
    const [Store, setStore] = useState([
        {
          name: "Ayush",
          age: 21,
          course: "MERN",
          batch: 24,
          id: 1,
        },
        {
          name: "Rani",
          age: 22,
          course: "MERN",
          batch: 23,
          id: 2,
        },
        {
          name: "Sriyansh",
          age: 24,
          course: "MERN",
          batch: 22,
          id: 3,
        },
        {
          name: "ketan",
          age: 22,
          course: "MERN",
          batch: 25,
          id: 4,
        },
        {
          name: "Teesha",
          age: 24,
          course: "MERN",
          batch: 24,
          id: 5,
        },
        {
          name: "Balam",
          age: 23,
          course: "MERN",
          batch: 24,
          id: 6,
        },
      ]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Student"
            element={
              <ContextApi.Provider>
                <Student value={[Store, setStore]} />
              </ContextApi.Provider>
            }/>
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routing;
