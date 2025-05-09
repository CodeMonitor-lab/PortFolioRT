import React from "react";
import { FaCode } from "react-icons/fa";
import { ImShield } from "react-icons/im";
import { HiMiniBugAnt } from "react-icons/hi2";
import { TbMenuOrder } from "react-icons/tb";
import { GiSemiClosedEye } from "react-icons/gi";
import { TfiFullscreen } from "react-icons/tfi";
import { TfiArrow } from "react-icons/tfi";
import { TfiDownload } from "react-icons/tfi";
import { TfiLocationArrow } from "react-icons/tfi";
import { CgLayoutPin } from "react-icons/cg";
import { CgLivePhoto } from "react-icons/cg";
import { CgMaximizeAlt } from "react-icons/cg";


const Icon = {
    MenuLodder:<CgLivePhoto/>,
    CurosorArrow:<TfiLocationArrow/>,
    DownloadArrow:<TfiDownload/>,
    ArrowRoundClose:<TfiArrow/>,
    ArrowSquarClose:<CgMaximizeAlt/>,
    Close:<TfiFullscreen/>, 
    FullScreen:<TfiFullscreen/>,
    HamMenu: <TbMenuOrder/>,
    CloseMenu:<GiSemiClosedEye/>,
    FancyClose:<CgLayoutPin/>,
    Code:<FaCode/>,
    SheildFace:<ImShield/>,
    BugAnt:<HiMiniBugAnt/>
 }

 const ReactIcon = ({ name, className,onClick,...props }) => {
    const BuitlInIcons = Icon[name];
  
    if (!BuitlInIcons) return null;
  
    // Clone the element to pass props like size or color
    return React.cloneElement(BuitlInIcons, {onClick,className,...props});
  };

 export default ReactIcon