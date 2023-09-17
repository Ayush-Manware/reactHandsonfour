import React, { useState } from "react";

function Profile() {
  const [tableData, setTableData] = useState([]);
  const [, setFormObject] = useState({
    name: "",
    age: "",
    course: "",
    batch: "",
  });

  const onValueChange = (event) => {
    const value = (res) => ({
      ...res,
      [event.target.name]: event.target.value,
    });
    setFormObject(value);
  };

  const onFormSumbit = (event) => {
    event.preventDefault();
    const checkVal = !Object.values
  };
  return <></>;
}

export default Profile;
