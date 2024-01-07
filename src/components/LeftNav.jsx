import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import LeftNavMenu from './LeftNavMenu'
import { categories } from "../util/contants";
import { Context } from "../contex/contexApi";

export default function LeftNav() {
  const { selectCategaries, setSelectCategaries, mobileMenu } =
    useContext(Context);
const navigate=useNavigate()

    const clickHandler = (name, type) => {
      switch (type) {
          case "category":
              return setSelectCategaries(name);
          case "home":
              return setSelectCategaries(name);
          case "menu":
              return false;
          default:
              break;
      }
  };

console.log(mobileMenu)

  return (
    <div
      className={`md:block w-[240px] overflow-y-auto h-full py-4  bg-black absolute md:relative z-10  md:translate-x-0 transition-all ${
        mobileMenu ? "translate-x-0" : " translate-x-[-240px]"
      }`}
    >
      <div className="flex px-5 flex-col">
      {categories.map((item,i) => {
        console.log(item.name)
        return (
          <>
            <LeftNavMenu
            key={item.name+i}
              text={(item.name === "New" ? "home" : item.name)}
              icon={item.icon}
              action={() => {
                clickHandler(item.name, item.type);
                navigate("/");
            }}
              className={
                selectCategaries === item.name ? "bg-white/[0.5]" : " "
              }
            />

            {item.divider && <hr className="my-5 border-white/[0.2]" />}
           
          </>
        );
        
      })}

<hr className="my-5 border-white/[0.2]" />
                <div className="text-white/[0.5] text-[12px]">
                    Clone by: Naren 
                </div>
      </div>
    </div>
  );
}
