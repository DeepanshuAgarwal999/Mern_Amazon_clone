import React from "react";
import { useState } from "react";
import { ToastContainer, toast, cssTransition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "animate.css/animate.min.css";
import { Link } from "react-router-dom";
const Signup = () => {
  const [register, setRegister] = useState({
    semail: "",
    spassword: "",
    fname: "",
    mobile: "",
  });
  // console.log(register);
  const addData = (e) => {
    const { name, value } = e.target;
    setRegister((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fname, semail, mobile, spassword } = register;

    try {
      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname,
          semail,
          spassword,
          mobile,
        }),
      });
      const data = await res.json();
      // console.log(data);
      if (res.status == 402 || !data) {
        toast.warn("Credentials are not valid!!", {
          position: "top-center",
          pauseOnHover: false,
        });
      } else {
        toast.success("Register Successfully", {
          position: "top-center",
          pauseOnHover: false,
        });
        setRegister({ fname: "", mobile: "", semail: "", spassword: "" });
      }
    } catch (error) {
      console.log(error + "sign up error");
    }
  };

  return (
    <section className="h-screen ">
      <figure className="w-[120px] py-5 mx-auto">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt=""
            className="w-[100px] inline "
          />
          <span>.in</span>
        </Link>
      </figure>

      <main className="w-[390px] mx-auto border rounded-xl border-black/20">
        <section className="px-5 py-3 text-[13px]">
          <h1 className="text-3xl">Create Account</h1>
          <form action="POST">
            <label htmlFor="name" className="mt-5 block font-semibold">
              Your name
            </label>
            <input
              type="text"
              value={register.fname}
              name="fname"
              onChange={addData}
              placeholder="first and last name"
              className="w-full  border border-black/40 outline-blue-500 h-[30px] rounded-[3px] p-2"
            />

            <label htmlFor="" className="mt-5 block font-semibold">
              Mobile number
            </label>
            <input
              type="number"
              placeholder=""
              onChange={addData}
              name="mobile"
              value={register.mobile}
              className="w-full  border border-black/40 outline-blue-500 h-[30px] rounded-[3px] p-2"
            />
            <label htmlFor="" className="mt-5 block font-semibold">
              Email
            </label>
            <input
              type="email"
              placeholder=""
              name="semail"
              value={register.semail}
              onChange={addData}
              className="w-full  border border-black/40 outline-blue-500 h-[30px] rounded-[3px] p-2"
            />
            <label htmlFor="" className="mt-5 block font-semibold">
              Password
            </label>
            <input
              type="Password"
              value={register.spassword}
              name="spassword"
              onChange={addData}
              placeholder="At least 6 characters"
              className="w-full  border border-black/40 outline-blue-500 h-[30px] rounded-[3px] p-2 "
            />
            <p className="py-1 text-xs">
              <span className="text-[16px] font-semibold text-blue-500 italic font-serif">
                i
              </span>
              &nbsp; Passwords must be at least 6 characters.
            </p>
            <p className="py-2 text-xs w-full">
              To verify your number, we will send you a text message with a
              temporary code. Message and data rates may apply.
            </p>

            <button
              className="bg-[#FFD814] w-full mt-[16px] h-[34px] hover:bg-[#F7CA00] rounded-[8px] font-medium"
              onClick={handleSubmit}
            >
              Continue
            </button>
            <ToastContainer />
          </form>
          <p className="text-[13px] py-2">
            Already have an account?
            <Link className="text-[#0066C0] text-[12px]" to="/login">
              &nbsp;Sign in
            </Link>
            <br />
            Buying for work?
            <span className="text-[#0066C0] text-[12px]">
              &nbsp; Create a free business account
            </span>
            <br />
            <br />
            <span className="text-[11px] block">
              By creating an account or logging in , you agree to Amazon’s
              <span className="text-[#0066C0]">&nbsp;Conditions of Use</span>
              and
              <span className="text-[#0066C0]">&nbsp; Privacy Policy.</span>
            </span>
          </p>
        </section>
      </main>
      <div className="w-[380px] mx-auto text-[13px] mt-[16px]">
        <p className="text-[#0066C0] text-[11px] text-center mt-[16px]">
          Conditions of Use &nbsp; &nbsp; Privacy Notice &nbsp; &nbsp; Help
        </p>
        <p className="text-[11px] text-center mt-[16px] ">
          © 1996-2023, Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </section>
  );
};

export default Signup;
