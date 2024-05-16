import React from "react";
import "../../styles/cart.css";
import Link from "next/link";
const Cart = () => {
  return (
    <main className="cartMain">
      <h1 className="cartH">Savat hozircha bo'sh</h1>
      <p className="cartP">
        Mahsulotlarni topish uchun katalogni ko'ring yoki qidiruvdan foydalaning
      </p>
      <div>
        <Link href="/">
          <button className="cartBut">Katalogga o'tish</button>
        </Link>
      </div>
      <Link href="/">
        <button className="cartBut2">Asosiy ekranga</button>
      </Link>
    </main>
  );
};

export default Cart;
