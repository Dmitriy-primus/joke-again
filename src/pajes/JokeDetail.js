import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedJoke from "../components/jokes/HighlightedJoke";
import styles from "./JokeDetail.module.css";

const JokeDetail = (props) => {
  let params = useParams();
  console.log(params);
  const joke = props.jokes.find((joke) => joke.id === +params.jokesId);
  return (
    <div className={styles.detail}>
      {joke ? (
        <HighlightedJoke text={joke.text} topic={joke.topic} />
      ) : (
        <p>Такой шутки нет</p>
      )}
      <Route path={`/jokes/${params.jokesId}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};

export default JokeDetail;
