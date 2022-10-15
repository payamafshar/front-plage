import { useEffect, useState } from "react";
import { fetchAPI } from "../functions/fetchAPI";
import styles from "../styles/Main.module.css";
import axios from "axios";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import pizza from "../components/assets/peperoni.jpg";
import Example from "./Modalb";
import SpringModal from "./Modalb";
const Main = (props) => {
  const { title, text, price, image, src, id } = props.data;
  const [modal, setModal] = useState(false);
  const clickHandler = () => {
    setModal(!modal);
  };

  return (
    <div onClick={clickHandler} className={styles.container}>
      <div className={styles.rost}>
        <h5 className={styles.title}>{title}</h5>
        <div className={styles.fake}>
          <p className={styles.text}>{text}</p>
        </div>
      </div>

      <div className={styles.pic}>
        <Image
          // loader={() => {
          //   return image;
          // }}
          unoptimized
          src={image}
          alt="plage"
          width={130}
          height={140}
        />
      </div>
      <div className={styles.price}>
        {price} <span className={styles.toman}></span>
      </div>
      {setModal ? (
        <div>
          <Modal
            show={modal}
            onHide={() => setModal(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header className={styles.modality} closeButton>
              <Modal.Title
                className={styles.titleEdit}
                id="example-custom-modal-styling-title"
              >
                <Image
                  loader={() => {
                    return image;
                  }}
                  className={styles.modalImage}
                  src={image}
                  width={500}
                  height={550}
                  alt="plage"
                />
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className={styles.modality}>
              <div className={styles.titleEdit}>{title}</div>
              <div className={styles.mohtaviat}>
                محتویات:
                <div className={styles.flexer}>
                  <p className={styles.pe}>{text}</p>
                  <p className={styles.se}>
                    {price}
                    <span className={styles.hezar}>هزار تومان</span>
                  </p>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Main;
