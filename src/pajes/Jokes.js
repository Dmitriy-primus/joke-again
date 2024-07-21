import JokeList from "../components/jokes/JokeList";

const Jokes = (props) => {
  return (
    <>
      <JokeList jokes={props.jokes} />
    </>
  );
};

export default Jokes;
