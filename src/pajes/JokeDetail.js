import { useParams, Route, Switch } from "react-router-dom";
import Comments from "../components/comments/Comments";

const JokeDetail = () => {
  const params = useParams();
  return (
    <>
      <h1>JokeDetail {params.jokesId}</h1>;
      <Route path={`/jokes/${params.jokesId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default JokeDetail;
