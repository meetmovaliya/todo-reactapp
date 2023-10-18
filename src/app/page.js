import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
  };
  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };
  let rendertask = <h2>No task available</h2>;
  rendertask = mainTask.map((t, i) => {
    return (
      <li key={i} className="flex justify-between">
        <div className="flex justify-between p-5 w-2/3">
          <h5 className="text-5xl font-bold text-white">{t.title}</h5>
          <h6 className="text-5xl font-semibold text-white">{t.desc}</h6>
        </div>
        <button
          onClick={() => {
            deleteHandler(i);
          }}
          className="text-white px-4 py-3 m-5 text-2xl font-bold rounded "
        >
          Delete
        </button>
      </li>
    );
  });

  return (
    <>
    <div class="wrapper"></div>
    <div id="left">
      <div id="Header">
        <h1 id="topic" className="text-7xl p-5 font-bold text-center text text-white bg-slate">
          Todo List
        </h1>
        <form onSubmit={submitHandler}>
          <input
            type="text "
            className="px-4 py-2 m-8 text-white text-2xl border-gray border-2 rounded-full"
            value={title}
            placeholder="Enter Title"
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />
          <input
            type="text "
            className="px-4 py-2 m-8 text-white text-2xl border-gray border-2 rounded-full"
            placeholder="Enter Description"
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
          />
          <button className="
           text-white px-4 py-3 m-5 text-2xl font-bold rounded">
            Add Task
          </button>
        </form>
      </div>
      </div>
      <div id="Render" className=" text-black">
        <ul>{rendertask}</ul>
      </div>
    </>
  );
};

export default page;
