import React from "react";
import Image from "next/image";
import { TfiMenu } from "react-icons/tfi";
// import { FaSearch } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { FaHeart } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <Image
            src="/alifshop-logo.svg"
            width={113}
            height={32}
            alt="Germany"
          />
          <button className="head-but">
            <TfiMenu style={{ marginTop: "3px" }} />
            Tovarlar katalogi
          </button>
          <input
            className="head-inp"
            type="Search"
            placeholder="Tovarlarni izlash"
          />
          <div className="head-icon">
            <div className="head-i">
              <SlBasket style={{ fontSize: "20", marginLeft: 12 }} />
              <p>Savat</p>
            </div>
            <div className="head-i">
              <FaHeart style={{ fontSize: "20", marginLeft: 37 }} />
              <p>Saralanganlar</p>
            </div>
          </div>
          <button className="head-but2">Kirish</button>
          <p style={{ marginTop: 12 }}>РУС / UZB</p>
        </nav>
      </div>
    </header>
  );
};

export default Header;
