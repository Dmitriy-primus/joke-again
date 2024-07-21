import { Fragment, useRef, useState } from "react";
import Card from "../UI/Card";
import Loader from "../UI/Loader";
import styles from "./JokeForm.module.css";
import { Prompt } from "react-router-dom";

const JokeForm = (props) => {
  const [formFocused, setFormFocused] = useState(false);
  const topicInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredTopic = topicInputRef.current.value;
    const enteredText = textInputRef.current.value;

    props.onAddJoke({ topic: enteredTopic, text: enteredText });
  }

  const formFocusHandler = () => {
    setFormFocused(true);
  };

  return (
    <Fragment>
      <Prompt
        when={formFocused}
        message={(location) =>
          "Вы действительно хотите покинуть страницу. В таком случае, все заполненные данные исчезнут"
        }
      />
      <Card>
        <form
          onFocus={formFocusHandler}
          className={styles.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={styles.loading}>
              <Loader />
            </div>
          )}

          <div className={styles.control}>
            <label htmlFor="topic">Topic</label>
            <input type="text" id="topic" ref={topicInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={styles.actions}>
            <button className="btn">Add Joke</button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default JokeForm;
