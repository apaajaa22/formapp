import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

function NextRegister() {
  const history = useHistory();
  const [option, setOption] = useState("Yes");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [form, setForm] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    const form = {
      option,
      address,
      phone,
    };
    const getForm = localStorage.getItem("user");
    const newData = JSON.parse(getForm);
    const results = { ...newData, ...form };
    localStorage.setItem("user", JSON.stringify(results));
    history.push("/register/confirmation");
  };

  useEffect(() => {
    const getForm = window.localStorage.getItem("user");
    const newData = JSON.parse(getForm);
    setForm(newData);
    console.log(form);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-yellow-200">
      <form onSubmit={onSubmit} className="bg-gray-50 w-2/6 p-10 rounded-md">
        <h2 className="text-xl font-medium mb-10">Information B</h2>
        <div className="space-y-4">
          <label>Have a Laptop / PC ?</label>
          <div className="flex flex-row space-x-4">
            <div className="flex flex-row items-center space-x-1">
              <input
                type="radio"
                name="gender"
                value="Yes"
                onChange={(e) => setOption(e.target.value)}
              />
              <label>Yes</label>
            </div>
            <div className="flex flex-row items-center space-x-1">
              <input
                type="radio"
                name="gender"
                value="No"
                onChange={(e) => setOption(e.target.value)}
                checked
              />
              <label>No</label>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-4">
          <label className="font-bold mb-2">Address</label>
          <textarea
            className="border-2 border-black rounded-md p-2"
            placeholder="address.."
            value={address || form?.address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="flex flex-col mt-4">
          <label className="font-bold mb-2">Mobile number</label>
          <input
            type="number"
            className="border-2 border-black rounded p-2 mt-2"
            placeholder="mobile number"
            value={phone || form?.phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="flex flex-row justify-center gap-2 mt-5">
          <Link
            to="/"
            type="button"
            className="bg-red-400 py-2 px-8 rounded-md"
          >
            Back
          </Link>
          <button type="submit" className="bg-blue-400 py-2 px-8 rounded-md">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default NextRegister;
