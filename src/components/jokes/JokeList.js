import { Fragment } from "react";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

import JokeItem from "./JokeItem";
import styles from "./JokeList.module.css";

const sortJokes = (jokes, isAscending) => {
  return jokes.sort((a, b) => {
    if (isAscending) {
      return a.id > b.id ? 1 : -1;
    } else {
      return a.id < b.id ? 1 : -1;
    }
  });
};

const JokeList = (props) => {
  const history = useHistory();
  const location =
    useLocation(); /**позволяет считывать данные из url страницы на которой мы находимся */
  const queryParams = new URLSearchParams(location.search);
  const sortingOrder = queryParams.get("sort");
  const isSortAscending = sortingOrder === "asc";
  const sortedJokes = sortJokes(props.jokes, isSortAscending);

  const togleSortingHendler = () => {
    history.push("/jokes?sort=" + (isSortAscending ? "desc" : "asc"));
  };
  return (
    <Fragment>
      <div className={styles.sort}>
        <button onClick={togleSortingHendler}>
          Sort jokes {isSortAscending ? "descending" : "ascending"}
        </button>
      </div>
      <ul className={styles.list}>
        {props.jokes.map((joke) => (
          <JokeItem
            key={joke.id}
            id={joke.id}
            topic={joke.topic}
            text={joke.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default JokeList;
