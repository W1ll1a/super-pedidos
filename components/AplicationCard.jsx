import React from "react";
import { cardList } from "../data/AppCardData";
import Image from "next/image";
import Link from "next/link";

const AplicationCard = () => {
  return (
    <div className="container mx-auto py-36 px-8">
      <div className="grid lg:grid-cols-3 justify-items-center">
        {cardList.map((card) => (
          <div className="grid justify-items-center py-7">
            <div className="p-5">
              <Image src={card.img} alt="" width="20" height="30" />
            </div>
            <ul>
              <Link href={`${card.link}`}>
                <h3 className="text-2xl hover:bg-black/50 font-sans font-light">
                  {card.title}
                </h3>
              </Link>
            </ul>
            <p className="font-extralight text-center">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AplicationCard;
