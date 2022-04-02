import React from 'react';
import Helper from '../Helper/Helper';
import SquareBtnStyle from '../components/SquareBtnStyle';
import SquareBtnStyleWithInput from '../components/SquareBtnStyleWithInput';
import LevelControl from '../components/LevelControl';
import InstructionPanel from '../components/InstructionPanel';
import Timer from '../components/Timer';
import KickOutTimer from '../components/KickOutTimer';
import SubmitBtn from '../components/SubmitBtn';

const helper = new Helper();

export default function Level4() {
  const currentLevel = 4;
  const [currentPoint, setCurrentPoint] = React.useState(0);
  const [currentQuestion, setCurrentQuestion] = React.useState([]);
  const [summaryArray, setSummaryArray] = React.useState([]);
  const [hasStarted, setHasStarted] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const displayArray = summaryArray.slice(0, currentStep - 1);
  const [time, setTime] = React.useState(0); //time from Timer component
  const [timerOn, setTimeOn] = React.useState(false);

  const levelStart = () => {
    let generate = helper.generateNumberArray(20, 50);
    setCurrentQuestion(generate);
    setSummaryArray(helper.generateMap(JSON.parse(JSON.stringify(generate)), localStorage.getItem("selectedAlgorithm")));
    setCurrentStep(1);
    setHasStarted(true);
    setCurrentPoint(20);
    setTimeOn(true);
  };

  const levelRestart = () => {
    let generate = helper.generateNumberArray(20, 50);
    setCurrentQuestion(generate);
    setSummaryArray(helper.generateMap(JSON.parse(JSON.stringify(generate)), localStorage.getItem("selectedAlgorithm")));
    setCurrentStep(1);
    setHasStarted(true);
    setCurrentPoint(20);
    setTimeOn(true);
    setTime(0);
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setCurrentPoint(20);
    }
  };

  const nextStep = () => {
    if (currentStep < summaryArray.length + 1) {
      setCurrentStep(currentStep + 1);
      setCurrentPoint(0);
    }
  };

  const getScore = () => {
    return score;
  };

  return (
    <div className="Level4">
      <KickOutTimer />
      <h1>Level 4</h1>
      <Timer time={time} setTime={setTime} timerOn={timerOn} />
      <LevelControl
        start={levelStart}
        restart={levelRestart}
        hasStarted={hasStarted}
        getScore={getScore}
      />
      <div className="display-area">
        <div className="display-area-row">
          {currentQuestion.map((item, index) => {
            return (
              <SquareBtnStyle key={index}>
                {item}
              </SquareBtnStyle>
            )
          })}
        </div>
        <div className="display-area-dynamic">
          {displayArray.map((item, i) => {
            if (
              item.length === currentQuestion.length &&
              item[0].length !== 1
            ) {
              return (
                <div className="display-area-row" key={i}>
                  {item.map((item, index) => {
                    return (
                      <SquareBtnStyleWithInput
                        key={index}
                        id={item}
                        currentPoint={currentPoint}
                        setCurrentPoint={setCurrentPoint}
                        setScore={setScore}
                      ></SquareBtnStyleWithInput>
                    )
                  })}
                </div>
              )
            } else {
              return (
                <div className="display-area-row" key={i}>
                  <SquareBtnStyle opacity />
                  {item.map((subItem, j) => (
                    <div className="display-area-col" key={j}>
                      {j === item.length / 2 && <SquareBtnStyle opacity />}
                      {subItem.map((num, k) => (
                        <SquareBtnStyleWithInput
                          key={k}
                          id={num}
                          currentPoint={currentPoint}
                          setCurrentPoint={setCurrentPoint}
                          setScore={setScore}
                        ></SquareBtnStyleWithInput>
                      ))}
                      <SquareBtnStyle opacity />
                    </div>
                  ))}
                </div>
              )
            }
          })}
        </div>
      </div>
      <InstructionPanel
        currentLevel={currentLevel}
        currentStep={currentStep}
        canPrev={currentStep > 1}
        canNext={
          currentStep !== 0 &&
          currentStep < summaryArray.length + 1 &&
          currentPoint === currentQuestion.length
        }
        onPrevStep={previousStep}
        onNextStep={nextStep}
      />
      {/* store user's mistakes+time in firebase */}
      <SubmitBtn time={time} setTimeOn={setTimeOn} level={currentLevel} score={score} />
    </div>
  )
}