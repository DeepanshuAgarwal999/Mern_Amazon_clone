import React from 'react'
import { LoginContext } from "../context/ContextProvider";
import { useContext } from 'react';
const Option = ({ deleteData ,get}) => {
    const { account, setAccount } = useContext(LoginContext);
  const removedata = async () => {
    try {
      const res = await fetch(`/remove/${deleteData}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      if (res != 201 || !data) {
        console.error("Erorr");
      } else {
        console.log("item deleted");
        setAccount(data)
        get();
      }
    } catch (error) {
      console.log("Frontend delete issue" + error);
    }
  };
  return (
    <div className="flex items-center  gap-x-10 justify-evenly w-[800px] text-lg">
      <select
        name=""
        id=""
        className="bg-pink-50 shadow-xl shadow-red-200 rounded-[10px] w-[80px] h-[45px] outline-[white] text-center "
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <a
        href="#"
        className="text-sky-400"
        onClick={() => removedata()}
      >
        Delete
      </a>
      <span className="font-semibold">|</span>
      <a href="#" className="text-sky-400">
        Save Or Later
      </a>
      <span className=" font-semibold">|</span>
      <a href="#" className="text-sky-400">
        See More Like This
      </a>
    </div>
  );
};

export default Option