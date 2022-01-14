import { createContext } from "react";
import { useState } from "react/cjs/react.development";
import * as quizService from "../services/quizService"
export const PlayContext = createContext();

export const PlayContextProvider = (props) => {
    const [displayResult, setDisplayResult] = useState({isCorrect: false, correctAnswer: '' });
    const[finalResult,setFinalResult] = useState({})
    const checkAnswer = async (quote) => {
        var result = await quizService.CheckAnswer(quote);

        setDisplayResult(prevState => ({ ...prevState,  isCorrect: result.isCorrect, correctAnswer: result.correctAnswer }))
    }
    const submitQuiz= async (id) => {
       var result =  await quizService.GetResult(id);
       setFinalResult({score:result,display:true})
    }
    return (
        <PlayContext.Provider value={{ checkAnswer, displayResult,submitQuiz,finalResult }} >
            {props.children}
        </PlayContext.Provider>
    )
}