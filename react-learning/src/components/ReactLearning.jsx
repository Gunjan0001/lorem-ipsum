import React, { useRef, useState } from "react";
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const strongpasswordRegex =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i;
const nameRegex = /^[a-zA-Z]+$/;
const phoneRegex = /^[0-9]{10}$/;
const ReactLearning = () => {
  const password = useRef();
  const confirmPassword = useRef();
  const [value, setValue] = useState([]);
  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [first, setfirst] = useState("true");
  const [formData, setFormData] = useState({
    Name: "",
    lastName: "",
    contact: "",
    Email: "",
    password: "",
    ConfirmPassword: "",
  });
  const Requredinput = (e) => {
    setError(true);
    console.log(emailRegex.test(formData.Email), "emailRegex");
    console.log(
      strongpasswordRegex.test(formData.password),
      "strongpasswordRegex"
    );
    console.log(nameRegex.test(formData.FirstName), "nameRegex");
    if (
      formData.FirstName !== "" &&
      formData.lastName !== "" &&
      formData.contact !== "" &&
      formData.Email !== "" &&
      formData.password !== "" &&
      formData.ConfirmPassword !== "" &&
      phoneRegex.test(formData.contact)
    ) {
      console.log(formData);
      setEmailError(true);
      value.push(formData);
      console.log(emailError, "false");
      setFormData({
        FirstName: "",
        lastName: "",
        contact: "",
        Email: "",
        password: "",
        ConfirmPassword: "",
      });
    } else {
      console.log(formData);
      setError(true);
      console.log(emailError, "true");
    }

    if (
      formData.FirstName !== "" &&
      formData.lastName !== "" &&
      formData.contact !== "" &&
      formData.Email !== "" &&
      formData.password !== "" &&
      formData.ConfirmPassword !== ""
    ) {
      console.log(formData);
      setEmailError(true);
      value.push(formData);
      console.log(emailError, "false");
      setFormData({
        FirstName: "",
        lastName: "",
        contact: "",
        Email: "",
        password: "",
        ConfirmPassword: "",
      });
    } else {
      console.log(formData);
      setError(true);
      console.log(emailError, "true");
    }
  };
  // const showPassword = () => {
  //   if (first === false) {
  //     setfirst(true);
  //   } else {
  //     setfirst(false);
  //   }
  // };
  const handleClick = (e) => {
    Requredinput();
  };
  return (
    <>
      <section>
        <div className="flex flex-col justify-center rounded-md border p-5 bg-black gap-5 px-20">
          <div className="flex gap-7">
            <label htmlFor="Name">
              <p className="text-white"> Name</p>
              <input
                className="border border-black focus-visible:outline-none px-2"
                type="text"
                value={formData.FirstName}
                onChange={(e) => {
                  setFormData({ ...formData, FirstName: e.target.value });
                }}
              />
              <p className=" text-green-400 font-semibold">
                {" "}
                {error && formData.FirstName === ""
                  ? "FirstName is required"
                  : error && !nameRegex.test(formData.FirstName)
                  ? "hdg"
                  : ""}
              </p>
            </label>
            <label htmlFor="LastName">
              <p className="text-white">LastName:</p>
              <input
                className="border border-black focus-visible:outline-none px-2"
                type="text"
                value={formData.lastName}
                onChange={(e) => {
                  setFormData({ ...formData, lastName: e.target.value });
                }}
              />
              <p className=" text-green-400 font-semibold">
                {error && formData.lastName === ""
                  ? "lastName is required"
                  : ""}
              </p>
            </label>
          </div>
          <div className="flex gap-5">
            <label htmlFor="Password">
              <p className="text-white">Password:</p>
              <input
                className="border border-black focus-visible:outline-none px-2"
                type={first ? "password" : "text"}
                value={formData.password}
                ref={password}
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                }}
              />

              <p className=" text-green-400 font-semibold">
                {error && formData.password === ""
                  ? "password is required"
                  : error && !strongpasswordRegex.test(formData.password)
                  ? "password is not strong"
                  : ""}
              </p>
              <p className=" text-green-400 font-semibold">
                {error &&
                password.current.value !== confirmPassword.current.value
                  ? "password not matched"
                  : ""}
              </p>
            </label>
            <label htmlFor="Password">
              <p className="text-white">Confirm Password:</p>
              <input
                ref={confirmPassword}
                className="border border-black focus-visible:outline-none px-2"
                value={formData.ConfirmPassword}
                type={first ? "password" : "text"}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    ConfirmPassword: e.target.value,
                  });
                }}
              />
              <p className=" text-green-400 font-semibold">
                {error && formData.ConfirmPassword === ""
                  ? "ConfirmPassword is required"
                  : ""}
              </p>
            </label>
          </div>
          <div className="flex gap-7">
            <label htmlFor="Contact">
              <p className="text-white"> phone no.</p>
              <input
                className="border border-black focus-visible:outline-none px-2"
                type="number"
                value={formData.contact}
                onChange={(e) => {
                  setFormData({ ...formData, contact: e.target.value });
                }}
              />
              <p className="text-green-400 font-semibold">
                {error && formData.contact === "" ? "contact is required" : ""}
              </p>
            </label>
            <label htmlFor=" ">
              <p className="text-white">Email:</p>
              <input
                className="border border-black focus-visible:outline-none px-2"
                type="email"
                value={formData.Email}
                onChange={(e) => {
                  setFormData({ ...formData, Email: e.target.value });
                }}
              />
              <p className=" text-green-400 font-semibold">
                {error && formData.Email === ""
                  ? "Email is required"
                  : error && !emailRegex.test(formData.Email)
                  ? "email is not valid"
                  : " "}
              </p>
            </label>
          </div>
          <div>
            <button
              className="text-white border border-white rounded-md p-2 ms-36 mt-5"
              onClick={handleClick}
            >
              Submit
            </button>{" "}
            <button type="button" className="btn" name="updateProject">
              Save Changes
            </button>
            <button type="button" className="btn" name="deleteProject">
              Delete Project
            </button>
          </div>
        </div>
        {error ? (
          <table className=" border-[2px] mt-5 bg-black ">
            <tr className="border-[2px] ">
              <th className="p-3 text-white">Name</th>
              <th className="p-3 text-white">lastName</th>
              <th className="p-3 text-white">contact</th>
              <th className="p-3 text-white">Email</th>
              <th className="p-3 text-white">password</th>
              <th className="p-3 text-white">ConfirmPassword</th>
            </tr>
            {value.map((obj, i) => {
              return (
                <>
                  <tr className="border-[2px]" key={i}>
                    <td className="px-5 text-white"> {obj.FirstName}</td>
                    <td className="px-5 text-white"> {obj.lastName}</td>
                    <td className="px-5 text-white"> {obj.contact}</td>
                    <td className="px-5 text-white"> {obj.Email}</td>
                    <td className="px-5 text-white"> {obj.password}</td>
                    <td className="px-5 text-white"> {obj.ConfirmPassword}</td>
                  </tr>
                </>
              );
            })}
          </table>
        ) : (
          ""
        )}
      </section>
    </>
  );
};
export default ReactLearning;
