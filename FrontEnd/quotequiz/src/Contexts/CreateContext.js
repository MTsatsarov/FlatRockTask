import { createContext } from "react";
import { useState } from "react/cjs/react.development";
export const CreateContext = createContext();

export const CreateContextProvider = (props) => {

    const [quizName, setQuizName] = useState({ name: '', isValid: false })
    const [quoteArray, setQuoteArray] = useState([]);

    const createQuote = () => {
        var newQuote = {
            title: '', answers:
                [{ title: '', isValid: false },
                { title: '', isValid: false },
                { title: '', isValid: false }],
            isValidQuote: false, quoteIndex: quoteArray.length,
            isCorrect: false,
            correctAnswer: ''

        }
        setQuoteArray(quoteArray.concat([newQuote]));

    }

    const changeName = (name, isValid) => {
        setQuizName(prevState => ({ ...prevState, name: name, isValid: isValid }))
    }

    const changeCorrectAnswer = (quoteIndex, answerIndex) => {
        var answer = quoteArray[quoteIndex].answers[answerIndex]
        quoteArray[quoteIndex].isCorrect = true
        quoteArray[quoteIndex].correctAnswer = answer.title;
        setQuoteArray(quoteArray)
    }

    const changeAnswerValue = (quoteIndex, answerIndex, value, isValid) => {
        var answer = quoteArray[quoteIndex].answers[answerIndex];
        answer.isValid = isValid;
        answer.title = value;
        setQuoteArray(quoteArray);
    }

    const changeQuoteName = (quoteIndex, name, isValid) => {
        var quote = quoteArray[quoteIndex];
        quote.title = name;
        quote.isValid = isValid;
        setQuoteArray(quoteArray);
    }
    const checkIsValid = () => {
        if (quizName.isValid === false || quoteArray.length <= 0 || !quoteArray.some(x => x.isValid) || !quoteArray.some(x => x.answers.some(x => x.isValid)), quoteArray.some(x => !x.isCorrect)) {
            return false;
        }
        return true;
    }

    const submitQuote = (e) => {
        var valid = checkIsValid();
        if (!valid) {
            return;
        }
        //TO fix IF  first select correct answer  value is ""
        var obj = {
            title: quizName.name,
            quotes: [],
            creator: localStorage.getItem('id')
        }

        quoteArray.map(x => obj.quotes.push({
            title: x.title,
            answers: x.answers.map(a => a.title),
            correctAnswer: x.correctAnswer,
        }))
        return obj;
    }

    return (
        <CreateContext.Provider value={{ createQuote, changeName, quoteArray, changeCorrectAnswer, changeAnswerValue, changeQuoteName, submitQuote }}>
            {props.children}
        </CreateContext.Provider>
    )
}