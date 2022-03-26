import { useState, useEffect } from 'react';
import { MDBRow, MDBCol, MDBListGroup, MDBBtn } from "mdb-react-ui-kit";
import Quiz from './components/Quiz'
import './App.css';
import { data, prizeMoney } from './Data'
import Timer from './components/Timer'
import Start from './components/Start';
import audiencePoll from '../src/assets/audience_poll.png'
import fiftyFifty from '../src/assets/fifty_fifty.png'
import flipQuestion from '../src/assets/flip_the_question.png'
import askExpert from '../src/assets/ask_the_expert.png'

function App() {
  const [name, setName] = useState(null);
  const [earned, setEarned] = useState("₹ 0")
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);

  useEffect(() => {
    questionNumber > 1 && setEarned(prizeMoney.find((item) => item.id === questionNumber - 1).amount)
  }, [questionNumber])

  return (
    <div className="App">
      {!name ? (
        <Start setName={setName} setTimeOut={setTimeOut} />
      ) : (
        <MDBRow>
          <MDBCol md="9">
            <div className="main">
              {timeOut ? (
                <h1 className='earned'>You Earned {earned}</h1>
              ) : (
                <>
                  <div style={{ height: "50%", position: "relative" }}>
                    <div className="timer">
                      <Timer
                        setTimeOut={setTimeOut}
                        questionNumber={questionNumber}
                      />
                    </div>
                  </div>
                  <div style={{ height: '50%' }}>
                    <Quiz data={data}
                      questionNumber={questionNumber}
                      setQuestionNumber={setQuestionNumber}
                      setTimeOut={setTimeOut}
                    />
                  </div>
                </>
              )}

            </div>
          </MDBCol>
          <MDBCol md="3" className='money'>
            <MDBListGroup className='money-list'>
              <MDBRow>
                <span className='mb-1'>
                  <MDBBtn style={{ float: "right" }} className="mx-4" color="light" onClick={() => setTimeOut(true)}>
                    Quit
                  </MDBBtn>
                  <MDBBtn style={{ float: "right" }} onClick={() => { setName(null); setQuestionNumber(1); setEarned("₹ 0") }}>
                    Exit
                  </MDBBtn>
                </span>
                <MDBCol md="6">Name : {name} </MDBCol>
                <MDBCol md="5">Total Earned: {earned} </MDBCol>
                <hr />
                <MDBCol md="3">
                  <img src={audiencePoll} alt="Audience Poll" class="lifeline" />
                </MDBCol>
                <MDBCol md="3">
                  <img src={fiftyFifty} alt="Fifty Fifty" class="lifeline" />
                </MDBCol>
                <MDBCol md="3">
                  <img src={flipQuestion} alt="Flip Question" class="lifeline" />
                </MDBCol>
                <MDBCol md="3">
                  <img src={askExpert} alt="Ask the Expert" class="lifeline" />
                </MDBCol>
              </MDBRow>
              <hr />
              {prizeMoney.map((item) => (
                <>
                  <li className={questionNumber === item.id ? "item active" : "item"}>
                    <h5 className="amount">
                      <span className="moneyListItemNumber">{item.id}</span>
                      <span className="moneyListItemAmount">{item.amount}</span>
                    </h5>
                  </li>
                </>
              ))}</MDBListGroup>
          </MDBCol>
        </MDBRow>
      )
      }
    </div >
  );
}

export default App;
