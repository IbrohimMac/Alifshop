import React from "react";
import "../../styles/footer.css";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa6";
import { SiTelegram } from "react-icons/si";
import { FaOdnoklassnikiSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <div className="footBig">
        <div className="footFir">
          <p className="footP1">Hujjatlar</p>
          <a href="https://alifshop.uz/uz/terms/actual">
            <p className="footP2">Sotish uchun umumiy shartlar</p>
          </a>
          <a href="https://alifshop.uz/uz/terms">
            <p className="footP2">Ofertalar arxivi</p>
          </a>
          <a href="https://alifshop.uz/uz/terms/charter">
            <p className="footP2">Nizom</p>
          </a>
          <a href="https://alifshop.uz/uz/terms/certificate">
            <p className="footP2">Guvohnoma</p>
          </a>
        </div>
        <div className="footSec">
          <p className="footP1">Servis</p>
          <a href="https://alifshop.uz/uz/prayer-times">
            <p className="footP2">Namoz vaqti</p>
          </a>
          <a href="https://alifshop.uz/uz/installment-in-islam">
            <p className="footP2">Muddatli to'lov islomda</p>
          </a>
          <a href="https://alifshop.uz/uz/become-a-partner">
            <p className="footP2">Alif shopda soting!</p>
          </a>
          <a href="https://alifshop.uz/uz/reject-cases">
            <p className="footP2">Qaytarish</p>
          </a>
        </div>
        <div className="footThi">
          <p className="footP1">Tovarlar katalogi</p>
          <a href="https://alifshop.uz/uz/categories/smartfoni-i-telefoni">
            <p className="footP2">Smartfonlar va telefonlar</p>
          </a>
          <a href="https://alifshop.uz/uz/categories/gadjeti">
            <p className="footP2">Gadjetlar</p>
          </a>
          <a href="https://alifshop.uz/uz/categories/aksessuari-dlya-telefonov">
            <p className="footP2">Smartfonlar uchun aksessuarlar</p>
          </a>
          <a href="https://alifshop.uz/uz/categories/coputstvuyuschie-tovari">
            <p className="footP2">Tegishli tovarlar</p>
          </a>
          <a href="https://alifshop.uz/uz/categories/chasi-i-aksessuari">
            <p className="footP2">Soat va aksessuarlar</p>
          </a>
        </div>
        <div className="footFou">
          <p className="footP1">Biz ijtimoiy axborot vositalarida</p>
          <div className="footIcon">
            <a href="https://www.instagram.com/alifshop.uz">
              <GrInstagram />
            </a>
            <a href="https://www.facebook.com/alifshopuz">
              <FaFacebook />
            </a>
            <a href="https://t.me/alifshopuz">
              <SiTelegram />
            </a>
            <a href="https://ok.ru/group/57984282525871?utm_source=ins&utm_medium=page&utm_campaign=odnoklassniki">
              <FaOdnoklassnikiSquare />
            </a>
            <a href="https://www.tiktok.com/@alifshop.uz">
              <AiFillTikTok />
            </a>
          </div>
          <p className="footP1">Axborot xizmati</p>
          <a href="https://t.me/alifazobot">
            <p className="footP2">@alifshop_uz </p>
          </a>
          <a href="about:blank">
            <p className="footP2">+998 555 12 12 12 </p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
