import styles from "./firstWave.module.css";

const FirstWave = () => {
  const pathStyle = {
    stroke: "none",
    fill: "url(#linear-gradient)",
  };

  return (
    <div className={styles.container}>
      test test
      <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
        <g>
          <linearGradient
            id="linear-gradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="14%" stopColor="#000" stopOpacity="0%" />
            <stop offset="43%" stopColor="#000" stopOpacity="5%" />
            <stop offset="67%" stopColor="#000" stopOpacity="10%" />
            <stop offset="90%" stopColor="#000" stopOpacity="10%" />
          </linearGradient>
          <path
            d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
            style={pathStyle}
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default FirstWave;
