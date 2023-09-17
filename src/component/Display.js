import React, { useState } from "react";
import Home from "./Home"
import Student from "./Student";
import Contact from "./Contact";
import Navbar from "./Navbar";
import { NewStudent } from "./NewStudent";
import EditStudent from "./EditStudent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from "../Store/Store";

const Display = () => {
  const [data, setData] = useState([
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
              <Store.Provider value={[data, setData]}>
                <Student />
              </Store.Provider>
            }
          />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/newStudent" element={
            <Store.Provider value={[data]}>
              <NewStudent />
            </Store.Provider>
          } />

          <Route path="/EditStudent" element={
            <Store.Provider value={[data]}>
              <EditStudent />
            </Store.Provider>
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Display;
