import React from "react";
import ReactIcon from "../../Store/ReactIcon";

const Logo = () => {
  return (
    <div>
      <p className="flex text-red-900 items-center gap-1 pr-3 ">
        <span className="border-2 rounded-full px-1 py-1" >
          <ReactIcon name='BugAnt' size={30} />
        </span>
      </p>
    </div>
  );
};

export default Logo;
