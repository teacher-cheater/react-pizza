import React from "react";

import logo from "../../assets/logo.png";
import fb from "../../assets/fb.svg";
import inst from "../../assets/inst.svg";
import vk from "../../assets/vk.svg";
import youtube from "../../assets/youtube.svg";
import app from "../../assets/appstore.png";
import google from "../../assets/googleplay.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top top-footer">
          <div className="top-footer__items">
            <div className="top-footer__content content-column-1">
              <h4 className="top-footer__title">PIZZA HOUSE</h4>
              <ul className="top-footer__list-1">
                <li>
                  <a href="#" className="top-footer__link">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="top-footer__link">
                    PIZZA-книга
                  </a>
                </li>
                <li>
                  <a href="#" className="top-footer__link">
                    Блог «Сила ума»
                  </a>
                </li>
                <li>
                  <a href="#" className="top-footer__link">
                    PIZZA ИС
                  </a>
                </li>
              </ul>
            </div>
            <div className="top-footer__content content-column-2">
              <h4 className="top-footer__title">Работа</h4>
              <ul className="top-footer__list-2">
                <li>
                  <a href="#" className="top-footer__link">
                    В пиццерии
                  </a>
                </li>
                <li>
                  <a href="#" className="top-footer__link">
                    В контакт-центре
                  </a>
                </li>
              </ul>
            </div>
            <div className="top-footer__content content-column-3">
              <h4 className="top-footer__title">Партнерам</h4>
              <ul className="top-footer__list-3">
                <li>
                  <a href="#" className="top-footer__link">
                    Франшиза
                  </a>
                </li>
                <li>
                  <a href="#" className="top-footer__link">
                    Инвестиции
                  </a>
                </li>
                <li>
                  <a href="#" className="top-footer__link">
                    Поставщикам
                  </a>
                </li>
                <li>
                  <a href="#" className="top-footer__link">
                    Предложить помещение
                  </a>
                </li>
              </ul>
            </div>
            <div className="top-footer__content content-column-4">
              <h4 className="top-footer__title">Это интересно</h4>
              <ul className="top-footer__list-4">
                <li>
                  <a href="#" className="top-footer__link">
                    Экскурсии и мастер-классы
                  </a>
                </li>
                <li>
                  <a href="#" className="top-footer__link">
                    Корпоративные заказы
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="top-footer__info">
            <div className="top-footer__picture">
              <a href="#">
                <img src={google} alt="googleplay" />
              </a>
              <a href="#">
                <img src={app} alt="appstore" />
              </a>
            </div>
            <a className="top-footer__number telephone" href="tel:88003020060">
              8-800-302-00-60
            </a>
            <p className="top-footer__text">Звонок бесплатный</p>
            <a
              href="mailto:feedback@dodopizza.com"
              _blank=""
              className="top-footer__mail"
            >
              feedback@pizza-house.com
            </a>
          </div>
        </div>
        <div className="footer__middle middle-footer">
          <article className="middle-footer__statistics-1">
            <h3>1 396 874 ₽</h3>
            <p>
              Выручка российской сети в этом месяце. В прошлом — 2 460 305 416 ₽
            </p>
          </article>
          <article className="middle-footer__statistics-2">
            <h3>688 пиццерий</h3>
            <p>в 14 странах, включая Китай, США и Великобританию</p>
          </article>
        </div>
        <nav className="footer__bottom bottom-footer">
          <div className="bottom-footer__logo">
            <img src={logo} alt="logo" />
          </div>
          <ul className="bottom-footer__list">
            <li>
              <a href="#" className="bottom-footer__link">
                Правовая информация
              </a>
            </li>
            <li>
              <a href="#" className="bottom-footer__link">
                Калорийность и состав
              </a>
            </li>
            <li>
              <a href="#" className="bottom-footer__link">
                Помощь
              </a>
            </li>
          </ul>
          <ul className="bottom-footer__social">
            <li>
              <a href="#" className="bottom-footer__network">
                <img src={fb} alt="fb" />
              </a>
            </li>
            <li>
              <a href="#" className="bottom-footer__network">
                <img src={inst} alt="inst" />
              </a>
            </li>
            <li>
              <a href="#" className="bottom-footer__network">
                <img src={vk} alt="vk" />
              </a>
            </li>
            <li>
              <a href="#" className="bottom-footer__network">
                <img src={youtube} alt="youtube" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
