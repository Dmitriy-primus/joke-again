import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedJoke from "../components/jokes/HighlightedJoke";
import styles from "./JokeDetail.module.css";

const JokeDetail = (props) => {
  const routeMatch = useRouteMatch();
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
      <div className="centered">
        <Route path={`/jokes/${params.jokesId}`} exact>
          <Link to={`/jokes/${params.jokesId}/comments`}>
            <button className="btn--empty">Comments</button>
          </Link>
        </Route>

        <Route path={`/jokes/${params.jokesId}/comments`}>
          <Comments />
        </Route>
      </div>
    </div>
  );
};

export default JokeDetail;
