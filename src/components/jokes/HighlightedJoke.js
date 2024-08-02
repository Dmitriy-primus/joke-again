import styles from "./HighlightedJoke.module.css";

const HighlightedJoke = (props) => {
  return (
    <div>
      <figure className={styles.joke}>
        <p>{props.text}</p>
        <figcaption>{props.topic}</figcaption>
      </figure>
    </div>
  );
};

export default HighlightedJoke;
