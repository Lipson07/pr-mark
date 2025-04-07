import React from "react";
import footer from "../../Styles/Footer.module.scss";
import {
  qr,
  apple,
  huawei,
  playmarket,
  rustore,
} from "../../Assets/Main/index";
const Footer = () => {
  return (
    <footer className={footer.footer}>
      <div className={footer.container}>
        <div className={footer.contqr}>
          <img src={qr} />
        </div>
        <div className={footer.contapp}>
          <p>Наведите камеру на QR-код,</p>
          <p>чтобы скачать наше приложение</p>
        </div>
        <div className={footer.conticon}>
          <img src={apple} alt="" />
          <img src={playmarket} alt="" />
          <img src={huawei} alt="" />
          <img src={rustore} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
