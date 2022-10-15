import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import logo from "../components/assets/logo.jpg";
import tea from "../components/assets/tea.png";
import pizza from "../components/assets/pizza.png";
import pasta from "../components/assets/spaguetti.png";
import bigMac from "../components/assets/hamburger.png";
import essperso from "../components/assets/coffee.png";
import mocktail from "../components/assets/drink.png";
import shake from "../components/assets/milk-shake.png";
import cake from "../components/assets/cake.png";
import smoty from "../components/assets/smoothie.png";
import chochlate from "../components/assets/chochlate.png";
import breakfast from "../components/assets/breakfast.png";
import coffeeShop from "../components/assets/coffee-shop.png";
import main from "../components/assets/dish.png";
import sonati from "../components/assets/food.png";
import diet from "../components/assets/diet.png";
import { useEffect, useState } from "react";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import Card from "./Card";
const data = [
  {
    id: 1,
    title: "میلک شیک",
    image: shake,
  },
  {
    id: 2,
    title: "دسر و کیک",
    image: cake,
  },
  {
    id: 3,
    title: "غذای اصلی",
    image: main,
  },
  {
    id: 4,
    title: "غذای سنتی",
    image: sonati,
  },
  {
    id: 5,
    title: "نوشیدنی پایه اسپرسو",
    image: essperso,
  },
  {
    id: 6,
    title: "نوشیدنی پایه شکلات",
    image: chochlate,
  },
  {
    id: 7,
    title: "ماکتل و ابمیوه طبیعی",
    image: mocktail,
  },
  {
    id: 8,
    title: "اسموتی",
    image: smoty,
  },
  {
    id: 9,
    title: "پاستا",
    image: pasta,
  },
  {
    id: 10,
    title: "پیش غذا",
    image: diet,
  },
  {
    id: 11,
    title: "استایل امریکایی",
    image: bigMac,
  },
  {
    id: 12,
    title: "صبحانه",
    image: breakfast,
  },
  {
    id: 13,
    title: "پیتزا",
    image: pizza,
  },
  {
    id: 15,
    title: "چای و دمنوش",
    image: tea,
  },
  {
    id: 14,
    title: "مجموعه پلاژ",
    image: coffeeShop,
  },
];
const Navbar = () => {
  const [focus, setFocus] = useState(false);

  const clickHandler = () => {
    setFocus(!focus);
  };
  const scroll = Scroll.scroller;
  const scrollTo = () => {
    scroll.scrollTo("hello");
  };
  return (
    <div className={styles.container}>
      <div className={styles.toper}>
        <div className={styles.text}>
          <span className={styles.box}>
            <h4 className={styles.h4}>
              Plage
              <br />
              <span className={styles.matn}>meet the prefection</span>
            </h4>
          </span>
        </div>
        <div className={styles.dive}>
          <Image
            className={styles.img}
            alt="plage"
            src={logo}
            width={60}
            height={60}
          />
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.category}>
          <p onClick={clickHandler}>دسته بندی ها</p>
        </div>
        <div className={styles.flexed}>
          {data.map((item) => (
            <Card id={item.id} key={item.id} src={item.image} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
