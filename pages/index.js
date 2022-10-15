import Head from "next/head";
import Image from "next/image";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  americanStyle,
  cakeAndDesser,
  mochtailAndJoice,
  pasta,
  pishGhaza,
  pitza,
  teaHot,
  smooty,
  smooti,
  sobhane,
} from "../functions/fetchAPI";
import { Link } from "react-scroll";
import svg from "../components/assets/love.svg";
import arrow from "../components/assets/arrow.svg";
import plage from "../components/assets/hogo.jpg";
import pizza from "../components/assets/peperoni.jpg";
import * as Scroll from "react-scroll";
import { scroller } from "react-scroll";
import Example from "../components/Modalb";
export default function Home({
  pitza,
  cake,
  pasta,
  burger,
  pGhaza,
  tea,
  mocktail,
  smooty,
  breakfast,
}) {
  const [drawer, setDrawert] = useState(false);

  const clickHandler = () => {
    setDrawert(!drawer);
  };
  const scroll = Scroll.scroller;
  const scrollTo = (id) => {
    scroll.scrollTo(id, {
      to: 1,
      duration: 450,
      delay: 100,
      smooth: true,
    });
  };
  return (
    <>
      <div className={styles.naver} name={0}>
        <Navbar />
      </div>
      <div className={styles.container}>
        <div className={styles.exx}>
          <div name={14} className={styles.main}>
            <div className={styles.line}>
              <h2>
                <span>مجموعه پلاژ </span>
              </h2>
            </div>
          </div>
          <div className={styles.viper}>
            <div className={styles.plage}>
              <Image src={plage} alt="PLAGE" />
              <div className={styles.text}>
                <span className={styles.majmooe}>مجموعه ی پلاژ</span>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.fullScreen}>
          <div name={13} className={styles.main}>
            <div className={styles.line}>
              <h2>
                <span>پیتزا</span>
              </h2>
            </div>
          </div>
          <div className={styles.viper}>
            <div className={styles.diver}>
              {pitza.category.product.map((item) => (
                <Main key={item.id} bool={drawer} data={item} />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.fullScreen}>
          <div name={3} className={styles.main}>
            <div className={styles.line}>
              <h2>
                <span>غذای اصلی</span>
              </h2>
            </div>
          </div>
          <div className={styles.viper}>
            <div className={styles.diver}>
              {/* {essperso.category.product.map((item) => (
                <Main key={item.id} data={item} />
              ))} */}
            </div>
          </div>
        </div>
        <div className={styles.fullScreen}>
          <div name={5} className={styles.main}>
            <div className={styles.line}>
              <h2>
                <span>نوشیدنی پایه اسپرسو</span>
              </h2>
            </div>
          </div>
          <div className={styles.viper}>
            <div className={styles.diver}>
              {/* {essperso.category.product.map((item) => (
                <Main key={item.id} data={item} />
              ))} */}
            </div>
          </div>
        </div>
        <div className={styles.fullScreen}>
          <div name={6} className={styles.main}>
            <div className={styles.line}>
              <h2>
                <span>نوشیدنی پایه شکلات</span>
              </h2>
            </div>
          </div>
          <div className={styles.viper}>
            <div className={styles.diver}>
              {/* {data.category.product.map((item) => (
                <Main key={item.id} data={item} />
              ))} */}
            </div>
          </div>
        </div>
        <div className={styles.fullScreen}>
          <div name={7} className={styles.main}>
            <div className={styles.line}>
              <h2>
                <span>ماکتیل و ابمیوه طبیعی</span>
              </h2>
            </div>
          </div>
          <div className={styles.viper}>
            <div className={styles.diver}>
              {mocktail.category.product.map((item) => (
                <Main key={item.id} data={item} />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.fullScreen}>
          <div name={8} className={styles.main}>
            <div className={styles.line}>
              <h2>
                <span>اسموتی</span>
              </h2>
            </div>
          </div>
          <div className={styles.viper}>
            <div className={styles.diver}>
              {smooty.category.product.map((item) => (
                <Main key={item.id} data={item} />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.fullScreen}>
          <div name={4} className={styles.main}>
            <div className={styles.line}>
              <h2>
                <span>غذای سنتی</span>
              </h2>
            </div>
          </div>
          <div className={styles.viper}>
            <div className={styles.diver}>
              {/* {data.category.product.map((item) => (
                <Main key={item.id} data={item} />
              ))} */}
            </div>
          </div>
        </div>
        <div className={styles.fullScreen}>
          <div name={2} className={styles.main}>
            <div className={styles.line}>
              <h2>
                <span>دسر و کیک</span>
              </h2>
            </div>
          </div>
          <div className={styles.viper}>
            <div className={styles.diver}>
              {/* {cake.category.product.map((item) => (
                <Main key={item.id} data={item} />
              ))} */}
            </div>
          </div>
        </div>
        <div className={styles.fullScreen}>
          <div name={1} className={styles.main}>
            <div className={styles.line}>
              <h2>
                <span>میلک شیک</span>
              </h2>
            </div>
          </div>
          <div className={styles.viper}>
            <div className={styles.diver}>
              {/* {data.category.product.map((item) => (
                <Main key={item.id} data={item} />
              ))} */}
            </div>
          </div>
        </div>
        <div className={styles.fullScreen}>
          <div name={9} className={styles.main}>
            <div className={styles.line}>
              <h2>
                <span>پاستا</span>
              </h2>
            </div>
          </div>
          <div className={styles.viper}>
            <div className={styles.diver}>
              {pasta.category.product.map((item) => (
                <Main key={item.id} data={item} />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.fullScreen}>
          <div name={10} className={styles.main}>
            <div className={styles.line}>
              <h2>
                <span>پیش غذا</span>
              </h2>
            </div>
          </div>
          <div className={styles.viper}>
            <div className={styles.diver}>
              {pGhaza.category.product.map((item) => (
                <Main key={item.id} data={item} />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.fullScreen}>
          <div name={11} className={styles.main}>
            <div className={styles.line}>
              <h2>
                <span>استایل امریکایی</span>
              </h2>
            </div>
          </div>
          <div className={styles.viper}>
            <div className={styles.diver}>
              {burger.category.product.map((item) => (
                <Main key={item.id} data={item} />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.fullScreen}>
          <div name={15} className={styles.main}>
            <div className={styles.line}>
              <h2>
                <span> چای و دمنوش</span>
              </h2>
            </div>
          </div>
          <div className={styles.viper}>
            <div className={styles.diver}>
              {tea.category.product.map((item) => (
                <Main key={item.id} data={item} />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.fullScreen}>
          <div name={12} className={styles.main}>
            <div className={styles.line}>
              <h2>
                <span> صبحانه</span>
              </h2>
            </div>
          </div>
          <div className={styles.viper}>
            <div className={styles.diver}>
              {breakfast.category.product.map((item) => (
                <Main key={item.id} data={item} />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.svgUp} onClick={() => scrollTo(0)}>
          <div className={styles.svgUpp}>
            <Image src={arrow} width={60} height={60} alt="PLAGE" />
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.payam}>
            <span>Made With </span>
            <div className={styles.fake}>
              <span className={styles.svg}>
                <Image src={svg} width={50} height={50} alt="PLAGE" />
              </span>{" "}
            </div>
            <span>By</span>
            <div className={styles.name}>
              <a href="https://www.lioncomputer.com/">Payam Afshari</a>
            </div>
          </div>
        </div>
      </div>
      );
    </>
  );
}

export async function getServerSideProps() {
  const pitzaFood = await pitza();
  // const cakeDesser = await cakeAndDesser();
  const pastaFood = await pasta();
  const burger = await americanStyle();
  const pGhaza = await pishGhaza();
  const tea = await teaHot();
  const mocktail = await mochtailAndJoice();
  const smooty = await smooti();
  const breakfast = await sobhane();
  return {
    props: {
      pitza: pitzaFood,
      pasta: pastaFood,
      burger,
      pGhaza,
      tea,
      mocktail,
      smooty,
      breakfast,
      // cake: cakeDesser,
    },
  };
}
