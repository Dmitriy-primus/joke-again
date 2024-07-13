import Layout from "./components/layout/Layout";
import { Route, Switch, Redirect } from "react-router-dom";
import Jokes from "./pajes/Jokes";
import AddJoke from "./pajes/AddJoke";
import JokeDetail from "./pajes/JokeDetail";
import { useEffect } from "react";

function App() {
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
    console.log(newDataJokes);
  };
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
            <Jokes />
          </Route>
          <Route path="/add-joke">
            <AddJoke />
          </Route>
          <Route path="/jokes/:jokesId">
            <JokeDetail />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
