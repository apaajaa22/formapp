import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

function Confirmation() {
  const history = useHistory();
  useEffect(() => {
    const getForm = localStorage.getItem("user");
    const newData = JSON.parse(getForm);
    setData(newData);
  }, []);

  const [data, setData] = useState({});

  const onSubmit = () => {
    localStorage.removeItem("user");
    history.push("/register/success");
  };
  return (
    <div className="flex justify-center items-center h-screen bg-yellow-200">
      <div className="bg-gray-50 w-2/6 p-10 rounded-md font-medium space-y-4">
        <h2 className="text-xl font-medium mb-10">
          Confirmation data of entry
        </h2>
        <p>Fullname: {`${data?.firstname} ${data?.lastname}`}</p>
        <p>Gender: {data?.gender}</p>
        <p>E-mail: {data?.email}</p>
        <p>Have a Laptop/PC: {data?.option}</p>
        <p>Mobile number: {data?.phone}</p>
        <p>Address: {data?.address}</p>
        {
          data?.jobdesc?.map((res) => {
            return <p>Jobdesc: {res.jobdesc}</p>
          })
        }
        <div className="flex flex-row justify-center gap-2">
          <Link
            to="/register/next"
            type="button"
            className="bg-red-400 py-2 px-8 rounded-md"
          >
            Back
          </Link>
          <button
            type="button"
            onClick={onSubmit}
            className="bg-blue-400 py-2 px-8 rounded-md"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
