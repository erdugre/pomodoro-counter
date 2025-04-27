import { useState, useEffect } from 'react'
import ChooseMins from './components/ChooseMins';
import LogicButton from './components/LogicButton';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial;
  justify-content: center;
  height: 100vh;
  background-color: #FFE8F4;
  color: pink;
`;

const TimerContainer = styled.div`
  background-color:rgb(205, 66, 138);
  width: 500px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Clock = styled.h1`
  font-size: 70px;
`;

function App() {

  const [startButton, setStartButton] = useState(true);
  const [mins, setMins] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [showContinue, setShowContinue] = useState(false);

  useEffect(() => {
    let interval = null; // start with interval null

    if (!startButton && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(prev => prev - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [startButton, seconds]);
  

  const startTimer = () => {
    if (mins === 0) {
      alert('Choose time!');
      return;
    }
    if (mins > 0 && seconds === 0) {
      setSeconds(mins * 60);
    }
    setStartButton(false);
    console.log("Timer started");
  }

  const pauseTimer = () => {
    setStartButton(true);
    setShowContinue(true);
    console.log("Timer paused");
  }

  const resetTimer = () => {
    setStartButton(true);
    setShowContinue(false);
    setMins(0);
    setSeconds(0);
  }

  const continueTimer = () => {
    setStartButton(false);
    setShowContinue(false);
  }

  const chooseTimer = (minutes) => {
    setMins(minutes);
    setSeconds(minutes * 60);
    console.log("minutes set", minutes);
  }

  const formatTimer = () => {
    const showMins = Math.floor(seconds / 60);
    const showSecs = seconds % 60;
    return `${showMins.toString().padStart(2,'0')}:${showSecs.toString().padStart(2,'0')}`;
  }

  return (
    <>
      <MainContainer>
        <TimerContainer>
          <Clock>{formatTimer(seconds)}</Clock>
          {(startButton && !showContinue) ? (
            <>
              <ChooseMins onChoose={chooseTimer} />
              <br />
              <LogicButton
                label='Start'
                onLogic={startTimer}
              />
            </>
          ) : (
            <ButtonContainer>
                {showContinue ? (
                  <LogicButton
                    label='Continue'
                    onLogic={continueTimer}
                  />
                ) : (
                  <>
                    <LogicButton
                      label='Pause'
                      onLogic={pauseTimer}
                    />
                    <LogicButton
                      label='Reset'
                      onLogic={resetTimer}
                    />
                  </>
                )}
            </ButtonContainer>
          )}
        </TimerContainer>
      </MainContainer>
    </>
  )
}

export default App
