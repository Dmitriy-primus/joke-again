import JokeForm from "../components/jokes/JokeForm";
import { useHistory } from "react-router-dom";

const AddJoke = () => {
  const history = useHistory();
  const addJokeHendler = async (joke) => {
    const response = await fetch(
      "https://jokes-cbee8-default-rtdb.firebaseio.com/jokes.json",
      {
        method: "POST",
        body: JSON.stringify({ id: Math.random(), ...joke }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const value = await response.json();
    console.log(value);
    history.push(
      "/jokes"
    ); /**history позволяет програмно переместиться по установленному пути */
  };

  return <JokeForm onAddJoke={addJokeHendler} />;
};

export default AddJoke;
