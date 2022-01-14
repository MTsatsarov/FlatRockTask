import { useState, useContext } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faList } from '@fortawesome/free-solid-svg-icons'
import { PlayContext } from "../../../Contexts/PlayContext"
import "./SingleQuote.css"
import { useEffect } from "react/cjs/react.development"
import BinaryAnswers from "./BinaryAnswers/BinaryAnswers"
import MultipleAnswers from "./MultipleAnswers/MultipleAnswers"

const SingleQuote = (props) => {
    var context = useContext(PlayContext)
    const [mode, setMode] = useState('binary');
    const [binaryAnswer, setBinaryAnswer] = useState('')
    const[show,setShow] = useState(false)
    useEffect(() => {
        var answer = props.possibleAnswers[Math.floor(Math.random() * 3)]
        setBinaryAnswer(answer);
        setShow(false);
    }, [props.possibleAnswers])

    const changeMode = (e) => {
        if (e.target.name === 'binary') {
            setMode('binary')
        }
        else if (e.target.name === 'multiple-choice') {
            setMode('mutiple')
            setBinaryAnswer('')
        }
    }
    const submitHandler = async (e) => {
       setShow(true)
        var target = e.target;
        while (target.tagName !== 'BUTTON') {
            target = target.parentNode;
        }
        var answer = target.getAttribute('data-answer')
        var obj = {
            quoteId: props.quoteId,
            answer: binaryAnswer !== '' ? binaryAnswer : '',
            userAnswer: answer,
            type: mode,
            resultId: props.resultId
        }
        await context.checkAnswer(obj)
    }
    return (
        <section className="quote-wrapper">
            <section className="mode-section" onClick={changeMode}>
                <button name="binary"><FontAwesomeIcon name="binary" icon={faCheckSquare} /></button>
                <button name="multiple-choice"><FontAwesomeIcon name="multiple-choice" icon={faList} /></button>
            </section>
            <section className="quote-form" onClick={submitHandler}>
                <article className="question-article">
                    <p>Who said it?</p>
                    <p className="quote">
                        {props.title}
                    </p>
                </article>
                {show===true ?
                    <>
                        <p>
                            {context.displayResult.isCorrect ? `Correct! The right answer is:` : `Sorry, you are wrong! The right answer is: ….`}
                            <strong>{context.displayResult.correctAnswer}</strong>
                        </p>
                        {props.currentQuote < props.totalQuotes-1 ? <button type="button" onClick={props.changeQuote}>Next</button> : <button type="button" onClick={(e)=>context.submitQuiz(props.resultId)}>Submit</button>}
                    </>
                    :
                    <>
                        {mode === 'mutiple' ?
                            <MultipleAnswers possibleAnswers={props.possibleAnswers} />
                            :
                            <BinaryAnswers binaryAnswer={binaryAnswer} />
                        }</>}

            </section>
        </section>
    )
}
export default SingleQuote