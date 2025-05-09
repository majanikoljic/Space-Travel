import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loader}></div>
      <span className={styles.loaderText}>Loading...</span>
    </div>
  );
};

export default Loading;
