import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Card.module.css";
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
const Card = (props) => {
  const { title, image, id } = props.data;
  const [focus, setFocus] = useState(false);

  // const clickHandler = () => {
  //   setFocus(!false);
  // };
  const scroll = Scroll.scroller;
  const scrollTo = (id) => {
    scroll.scrollTo(id, {
      duration: 450,
      delay: 100,
      smooth: true,
      offset: -300,
    });

    setFocus(!false);
  };
  return (
    <div onClick={() => scrollTo(id)} className={styles.container}>
      <div className={styles.pic}>
        <Image
          className={styles.shot}
          alt="PLAGE"
          src={image}
          width={70}
          height={70}
        />
      </div>
      <div className={styles.trick}>
        <h5 className={styles.title}>
          <span className={styles.pe}>{title}</span>
        </h5>
      </div>
    </div>
  );
};

export default Card;
