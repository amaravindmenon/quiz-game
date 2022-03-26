import React, { useState, useEffect } from 'react'

const Quiz = ({ data, questionNumber, setQuestionNumber, setTimeOut }) => {
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer");

    useEffect(() => {
        setQuestion(data[questionNumber - 1])
    }, [data, questionNumber])

    const delay = (duration, callBack) => {
        setTimeOut(() => {
            callBack()
        }, duration)
    }

    const handleClick = (item) => {
        setSelectedAnswer(item);
        setClassName("answer active");

        // setTimeOut(() => {
        //     setClassName(item.correct ? "answer correct" : "answer wrong")
        // }, 3000)

        delay(3000, () => {
            setClassName(item.correct ? "answer correct" : "answer wrong")
        })

        delay(5000, () => {
            if (item.correct) {
                delay(1000, () => {
                    setQuestionNumber((prev) => prev + 1)
                    setSelectedAnswer(null)
                })
            } else {
                delay(1000, () => {
                    setTimeOut(true)
                })
            }
        })
    };

    return (
        <div className="quiz">
            <div className="question">{question?.question}</div>
            <div className="answers">
                {question?.answers.map((item) => (
                    <div className={selectedAnswer === item ? className : "answer"} onClick={() => !selectedAnswer && handleClick(item)}>
                        {item.text}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Quiz