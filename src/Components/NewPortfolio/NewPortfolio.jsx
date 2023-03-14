import React from "react";
import styles from "./styles.module.css";
const NewPortfolio = ({ setIsVisibile }) => {
  const {
    main,
    blackbg,
    modal,
    headingOfModal,
    paragraphOfModal,
    btnWrapper,
    btn,
  } = styles;
  return (
    <div className={main}>
      <span className={blackbg}></span>
      <div className={modal}>
        <h1 className={headingOfModal}>New version available !</h1>
        <p className={paragraphOfModal}>
          A new version of this <strong>Portfolio</strong> is now available.
          This version includes bug fixes and new features that we think you'll
          love. To check now, click '<strong>Go !</strong>'. If you'd like to
          postpone the Visit, click 'Remind me later'. Thank you for using My
          Portfolio!
        </p>
        <div className={btnWrapper}>
          <a href="https://zayat.me/" className={btn}>
            Go !
          </a>
          <button
            className={btn}
            onClick={() => {
              setIsVisibile(false);
            }}
          >
            Remind me later
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPortfolio;
