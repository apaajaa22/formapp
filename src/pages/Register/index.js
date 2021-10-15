import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

function Register() {
  const [form, setForm] = useState({});
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("Male");
  const [email, setEmail] = useState("");
  const [jobdesc, setJobdesc] = useState([{ jobdesc: "" }]);

  useEffect(() => {
    const getForm = window.localStorage.getItem("user");
    const newData = JSON.parse(getForm);
    setForm(newData);
    console.log(form);
  }, []);

  const inputForm = (value, idx) => {
    const _jobdesc = [...jobdesc];
    _jobdesc[idx].jobdesc = value;
    setJobdesc(_jobdesc);
  };

  const onAddForm = (e) => {
    e.preventDefault();
    const _jobdesc = [...jobdesc];
    _jobdesc.push({ jobdesc: "" });
    setJobdesc(_jobdesc);
  };

  const deleteForm = (idx) => {
    const _jobdesc = jobdesc.filter((e, index) => index !== idx);
    setJobdesc(_jobdesc);
  };
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const form = {
      firstname,
      lastname,
      gender,
      email,
      jobdesc,
    };
    localStorage.setItem("user", JSON.stringify(form));
    history.push("/register/next");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-yellow-200">
      <form onSubmit={onSubmit} className="bg-gray-50 w-2/6 p-10 rounded-md">
        <h2 className="text-xl font-medium mb-10">Information A</h2>
        {/* section pertama */}
        <div className="flex flex-row mb-2">
          <div className="flex flex-col flex-1">
            <label className="font-bold">First name</label>
            <input
              type="text"
              className="border-2 border-black rounded p-1 mt-2"
              placeholder="first name"
              onChange={(e) => setFirstname(e.target.value)}
              value={firstname || form?.firstname}
              required
            />
          </div>
          <div className="w-10" />
          <div className="flex flex-col flex-1">
            <label className="font-bold">Last name</label>
            <input
              type="text"
              className="border-2 border-black rounded p-1 mt-2"
              placeholder="last name"
              onChange={(e) => setLastname(e.target.value)}
              value={lastname || form?.lastname}
              required
            />
          </div>
        </div>
        {/* section kedua */}
        {jobdesc.map((data, idx) => {
          return (
            <div className="flex flex-col mb-2">
              <label className="font-bold">Jobdesc: </label>
              <div className="w-full flex ">
                <input
                  type="text"
                  className="border-2 border-black rounded p-1 mt-2 flex-1"
                  placeholder="jobdesc"
                  value={data.jobdesc}
                  onChange={(e) => inputForm(e.target.value, idx)}
                  required
                />
                <button
                  type="button"
                  onClick={onAddForm}
                  className="font-bold text-2xl ml-2"
                >
                  +
                </button>
                {jobdesc.length > 1 && (
                  <button
                    type="button"
                    onClick={() => deleteForm(idx)}
                    className="font-bold text-2xl ml-2"
                  >
                    -
                  </button>
                )}
              </div>
            </div>
          );
        })}
        {/* gender */}
        <div className="flex flex-col mb-2">
          <label className="font-bold">Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="border-2 border-black rounded p-1 mt-2"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        {/* email */}
        <div className="flex flex-col mb-2">
          <label className="font-bold">Email</label>
          <input
            type="email"
            className="border-2 border-black rounded p-1 mt-2"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email || form?.email}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-400 py-2 px-8 rounded-md float-right mt-5"
        >
          Next
        </button>
      </form>
    </div>
  );
}

export default Register;
