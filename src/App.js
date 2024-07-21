import Layout from "./components/layout/Layout";
import { Route, Switch, Redirect } from "react-router-dom";
import Jokes from "./pajes/Jokes";
import AddJoke from "./pajes/AddJoke";
import JokeDetail from "./pajes/JokeDetail";
import { useEffect, useState } from "react";
import NotFound from "./pajes/NotFound";

function App() {
  const [stateJokeList, setStateJokeList] = useState([]);
  const onFetchJokes = async () => {
    const response = await fetch(
      "https://jokes-cbee8-default-rtdb.firebaseio.com/jokes.json"
    );

    const dataJokes = await response.json();

    const newDataJokes = [];

    for (let joke in dataJokes) {
      newDataJokes.push({
        id: dataJokes[joke].id,
        topic: dataJokes[joke].topic,
        text: dataJokes[joke].text,
      });
    }
    setStateJokeList(newDataJokes);
  };

  console.log(stateJokeList);
  useEffect(() => {
    onFetchJokes();
  }, []);

  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/jokes" />
          </Route>
          <Route path="/jokes" exact>
            <Jokes jokes={stateJokeList} />
          </Route>
          <Route path="/add-joke">
            <AddJoke />
          </Route>
          <Route path="/jokes/:jokesId">
            <JokeDetail jokes={stateJokeList} />
          </Route>
          <Route path="*">
            {/* устанавливается последним, производит загрузку данной страницы,
            если url не валиден  */}
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
