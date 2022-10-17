import React, { Dispatch, SetStateAction } from "react";

const Sidebar = (props: { setPage: Dispatch<SetStateAction<string>> }) => {
  return (
    <div className="w-72 bg-red-300 pt-4 flex">
      <div className="flex gap-4 px-8 flex-col items-start">
        <button onClick={() => props.setPage("home")}>Home</button>
        <button onClick={() => props.setPage("search")}>Search</button>
        <button onClick={() => props.setPage("lib")}>Library</button>
      </div>
    </div>
  );
};

export default Sidebar;
