import React from 'react';
import Button from './Button';

export default function LevelControl(props) {
    const [hasStarted, setHasStarted] = React.useState(props.hasStarted);
    const [score, setScore] = React.useState(0);
    const [mistakeAllowed, setMistakeAllowed] = React.useState(0);
    React.useEffect(() => {
        setScore(props.getScore());//get score from level component
        setMistakeAllowed(props.mistakeAllowed);
    })

    const levelStart = () => {
        let generate = props.helper.generateNumberArray(10, 20)
        props.setCurrentQuestion(generate);
        props.setSummaryArray(props.helper.generateMap(generate));
        props.setCurrentStep(1);
        setHasStarted(true);
    }

    const levelRestart = () => {
        let generate = props.helper.generateNumberArray(10, 20)
        props.setCurrentQuestion(generate);
        props.setSummaryArray(props.helper.generateMap(generate));
        props.setCurrentStep(1);
        setHasStarted(true);
    }

    const pointIndicator = (currentLevel, currentPoint) => {
        if (currentLevel === 1) {
            return
        } else {
            return (
                <div className="statistics-area">
                    <span>Score:</span>
                    <span className="mistakes-counter">{score}</span>
                    <span style={{marginLeft:"30px"}}>Mistakes Allowed:</span>
                    <span className="mistakes-counter">{mistakeAllowed}</span>
                </div>
                
            )
        }
    }

    return (
        <div className="LevelControl">
            <Button onClick={props.start} disabled={props.hasStarted}>Start</Button>
            <Button onClick={props.restart} disabled={!props.hasStarted}>
                Restart
            </Button>
            {pointIndicator(props.currentLevel, props.currentPoint)}
        </div>
    )
}