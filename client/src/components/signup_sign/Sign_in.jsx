import arrow from "../../images/arrow.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {LoginContext} from "../context/ContextProvider";
import { useContext } from "react";

const Sign_in = () => {
  const { account, setAccount } = useContext(LoginContext);
  const navigate =useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  // console.log(login);
  const addData = (e) => {
    const { name, value } = e.target;
    setLogin((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const signInData = async (e) => {
    e.preventDefault();
    const { email, password } = login;
    // console.log(email + " " + password);
    try {
      const res = await fetch("/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await res.json();
      // console.log(data);

      if (res.status === 400 || !data) {
        // alert("no data")

        toast.warn("Credentials are not valid!!", {
          position: "top-center",
          pauseOnHover: false,
        });
      } else {
        toast.success("Login Successfully", {
          position: "top-center",
          pauseOnHover: false,
        });
        setAccount(data);
        setLogin({ email: "", password: "" });
        setTimeout(()=>{
          navigate("/");
        },2000)
      }
    } catch (error) {
      console.log(error + " login error");
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
        <section className="p-8 text-[13px]">
          <h1 className="text-3xl">Sign in</h1>
          <form action="POST">
            <label htmlFor="" className="mt-5 block font-semibold">
              Email
            </label>
            <input
              type="email"
              placeholder=""
              name="email"
              value={login.email}
              onChange={addData}
              className="w-full  border border-black/40 outline-blue-500 h-[34px] rounded-[3px] p-2"
            />
            <label htmlFor="" className="mt-5 block font-semibold">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={login.password}
              onChange={addData}
              placeholder="Enter your password"
              className="w-full  border border-black/40 outline-blue-500 h-[34px] rounded-[3px] p-2"
            />
            <button
              className="bg-[#FFD814] w-full mt-[16px] h-[34px] hover:bg-[#F7CA00] rounded-[8px] font-medium"
              onClick={signInData}
            >
              Continue
            </button>
            <ToastContainer />
          </form>
          <p className="py-5 text-[12px]">
            By continuing, you agree to Amazon's{" "}
            <span className="active:text-[#C66A35] text-[#0066C0]">
              Conditions of Use
            </span>
            <span className="active:text-[#C66A35] text-[#0066C0]">
              and Privacy Notice.
            </span>
          </p>
          <div className="flex items-center gap-x-2">
            <div>
              <img src={arrow} className="w-[8px] -rotate-90" alt="" />
            </div>
            <a href="#" className="active:text-[#C66A35] text-[#0066C0]">
              Need help?
            </a>
          </div>
        </section>
      </main>

      <div className="w-[380px] mx-auto text-[13px] mt-[16px]">
        <h1 className="text-center active:text-[#C66A35] text-[#0066C0]">
          <Link to="/signup">New to Amazon?</Link>
        </h1>
        <Link
          to="/signup"
          className="text-center  w-full mt-[16px] h-[30px] hover:bg-gray-50 border-2 rounded-[8px] font-medium flex items-center justify-center"
        >
          Create your Amazon account
        </Link>
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

export default Sign_in;
