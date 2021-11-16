import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function Questions() {
    const [questions, setquestions] = useState([])
    const [currectQuestion, setcurrectQuestion] = useState(0)
    //timerrr
    // const [timer, settimer] = useState({
    //     minutes: 2,
    //     seconds: 60,
    //     timeup: ""
    // });
    // useEffect(() => {
    //     let myInterval = setInterval(() => {
    //         if (timer.seconds === 0 && timer.minutes === 0) {
    //             settimer({ timeup: "timesUp" })
    //             clearInterval(myInterval)
    //         } else if (timer.seconds > 0) {
    //             settimer({ ...timer, seconds: timer.seconds - 1 });
    //         } else if (timer.seconds === 0) {
    //             settimer({ timer, minutes: timer.minutes - 1, seconds: 59 });
    //         }

    //     }, 1000)
    //     return () => {
    //         clearInterval(myInterval);
    //     };
    // });
    useEffect(() => {
        snddata()
    }, [])
    const snddata = async () => {
        const response = await axios.get('http://localhost:8000/data')
            .catch((err) => {
                console.log(err);
            })
        setquestions(...questions, response.data)
    }
    // console.log(questions[0].options);
    return (
        <>
            <div>
                {/* <h2><span>{timer.seconds > 0 ? ` ${timer.minutes} : ${timer.seconds}`   : timer.timeup}</span></h2> */}
            </div>
            <div>
                {questions.length ?
                    <div>
                        <p>{questions[currectQuestion].question}</p>
                        <button>{questions[currectQuestion].options[0].a}</button>
                        <button>{questions[currectQuestion].options[0].b}</button>
                        <button>{questions[currectQuestion].options[0].c}</button>
                        <button>{questions[currectQuestion].options[0].d}</button>
                    </div>
                    : <p>loading</p>}
                <button onClick={() => {
                    setcurrectQuestion(currectQuestion + 1)
                }}>next question</button>

            </div>
        </>
    )
}
//  <p>{questions[0].question}</p>
//                 <button>{questions[0].options[0].a}</button>
//                 <button>{questions[0].options[0].b}</button>
//                 <button>{questions[0].options[0].c}</button>
//                 <button>{questions[0].options[0].d}</button>