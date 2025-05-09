import React from "react";
import ReactIcon from "../../Store/ReactIcon";

const Logo = () => {
  return (
    <div>
      <p className="flex text-black items-center gap-1 pr-3 ">
        <span>
          <ReactIcon name='Code' size={25} />
           </span>
        {/*  */}
        <span>
          <ReactIcon name='BugAnt' size={25} />
        </span>
        {/*  */}
        <span>
          <ReactIcon name='Code' size={25} />
        </span>
      </p>
    </div>
  );
};

export default Logo;
