import { Fragment } from "react";

import JokeItem from "./JokeItem";
import styles from "./JokeList.module.css";
const jokes = [
  {
    id: "j1",
    topic:
      "Родители долго думали, чем заняться на майские праздники. Вовочка решил все за них: принес из школы кишечный вирус.",
    text: "Вовочка",
  },
  {
    id: "j2",
    topic:
      "Сказка была такой страшной, что уже после первой главы воспитательница вывела всю группу покурить.",
    text: "Детство",
  },
];
const JokeList = (props) => {
  return (
    <Fragment>
      <ul className={styles.list}>
        {jokes.map((joke) => (
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
