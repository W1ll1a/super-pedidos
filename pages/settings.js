import React from "react";
import { SettingsData } from "@/data/settingsData";
import Link from "next/link";
import Image from "next/image";

const AppCardSetting = () => {
  return (
    <div className="container mx-auto   ">
      {/*añadi espacios entre las cards y breakpoints.*/}
      <div className="grid lg:grid-cols-3 justify-items-center gap-2 md:grid-cols-2 sm:grid-cols-1">
        {/*creo el mapeo de los datos que tienen las appcards*/}
        {SettingsData.map((data) => (
          <div className="p-4" >
            <div className=" grid grid-cols-2  justify-items-center">
              <img className="object-cover" src = {data.img} alt="" width ={80} height={80}/>
          <div className="grid justify-items-center py-7 border">
            <Link href ={ `${data.Link}`}>
            <h3 className="font-bold text-black hover:bg-white/70">
              {data.title}
            </h3>
                </Link>
            <div className="text-black font-light text-center ">
              {data.description}
            </div>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default AppCardSetting;
