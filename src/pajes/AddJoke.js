import JokeForm from "../components/jokes/JokeForm";

const AddJoke = () => {
  const addJokeHendler = async (joke) => {
    const response = await fetch(
      "https://jokes-cbee8-default-rtdb.firebaseio.com/jokes.json",
      {
        method: "POST",
        body: JSON.stringify(joke),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const value = await response.json();
    console.log(value);
  };

  return <JokeForm onAddJoke={addJokeHendler} />;
};

export default AddJoke;
