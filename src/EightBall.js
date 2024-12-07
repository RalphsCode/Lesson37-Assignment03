import React, {useState} from 'react';
import { answers} from './answers';
import { Container, Row, Col, Button } from 'react-bootstrap';

/**
 * Function to start with a black circle - representing a 'magic 8 Ball'
 * When one clicks the 'Ask the 8-Ball' button an answer is displayed.
 * The answer is randomly selected from an array/list from; answers.js.
 * One can reset the game by clicking the 'X RESET' button.
 */

function EightBall() {
  // Create a state for if the game is in play, and to store the current randomAnswer
    const [playing, setPlaying] = useState("false");
    const [randomAnswer, setRandomAnswer] = useState({msg: "Think of a Question.", color: "black"});

      /** Set the state to 'playing',
       * get a random answer from the array/list,
       * store the randomAnswer in State
       * */ 
      function getRandomAnswer() {
            setPlaying(true);
            const randomIndex = Math.floor(Math.random() * answers.length);
            const newRandomAnswer = answers[randomIndex];
            setRandomAnswer(newRandomAnswer);
            };

      // Reset the 8-ball to a black background and default message
      function reset() {
        setPlaying(false);
        setRandomAnswer({msg: "Think of a Question.", color: "black"});
      }
      
    // Return JSX of the message with the appropriate background color
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
          <Container>
            <Row>
              <Col>
              {/* Buttons */}
                <div className="d-flex justify-content-center mb-3">
                  <Button variant="danger" onClick={reset}>X RESET</Button>
                  <Button variant="primary" onClick={getRandomAnswer}>Ask the 8-Ball</Button>
                </div>

                {/* Show the 8-Ball in a colored circle with the answer text */}
                <div
                  className="text-center"
                  style={{
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    backgroundColor: randomAnswer.color,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                  }}
                >
                  <p>{randomAnswer.msg}</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      );
};  // END EightBall()


export default EightBall;