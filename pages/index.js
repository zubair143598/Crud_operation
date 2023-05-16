// import { decremented, incremented } from "@/src/store/features/counterSlice";
// import { addUser, deleteUser, updateUsername } from "./features/Users";

import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { addUser, deleteUser, updateUsername } from "../src/features/Users";

export default function Home() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");

  return (
    <>
      <Head>
        <title>Crud operation</title>
      </Head>

      <main>
        <div className="flex justify-center  grid-cols-1 text-center  flex-col border">
          {" "}
          <div className="flex mt-4 lg:ml-96 border border-black rounded text-center sm:w-[600px] p-8 justify-between bg-slate-300  ">
            <input
              className="border border-black rounded"
              type="text"
              placeholder="Name..."
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <input
              className="border border-black rounded"
              type="text"
              placeholder="Username..."
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <button
            className=" border bg-black border-white text-white p-2 px-4 rounded-lg "
              onClick={() => {
                dispatch(
                  addUser({
                    id: userList[userList.length - 1].id + 1,
                    name,
                    username,
                  })
                );
              }}
            >
              {" "}
              Add User
            </button>
          </div>
          <div className="displayUsers">
            {userList.map((user, index) => {
              return (
                <div key={index} className="  border border-black rounded text-left sm:w-[600px] p-8  bg-slate-300 mt-3 lg:mx-96 ">
                  <h1 className=" text-2xl font-bold"> Name: {user.name}</h1>
                  <h1 className=" text-2xl mb-2 font-bold"> UserName:{user.username}</h1>
                  <input
                  className="border border-black p-1 rounded"
                    type="text"
                    placeholder="New Username..."
                    onChange={(event) => {
                      setNewUsername(event.target.value);
                    }}
                  />
                  <button className="border bg-black ml-2 border-white text-white p-2 px-4 rounded-lg"
                    onClick={() => {
                      dispatch(
                        updateUsername({ id: user.id, username: newUsername })
                      );
                    }}
                  >
                    {" "}
                    Update Username
                  </button>
                  <button 
                  className="border bg-black ml-2 border-white text-white p-2 px-4 rounded-lg"
                    onClick={() => {
                      dispatch(deleteUser({ id: user.id }));
                    }}
                  >
                    Delete User
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
