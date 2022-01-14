import { useContext } from "react"
import { CreateContext } from "../../../../Contexts/CreateContext"
import "./NewQuoteAnswer.css"
const NewQuoteAnswer = (props) => {
    var context = useContext(CreateContext)
    const changeAnswerName = (e) => {
        var isValid = true;
        if (e.target.value === '') {
            isValid = false;
        }
        context.changeAnswerValue(props.quoteIndex, props.answerIndex - 1, e.target.value, isValid)
    }
    return (
        <div className='myAnswer'>
            <label className='answer-label' > Answer: {props.answerIndex}</label>
            <div className="answer-wrapper">
                <p className="radio-message">Mark as correct</p>
                <div className="radio-div" >
                    <input type='radio' name={`Quote ${props.quoteIndex}`} onClick={() => context.changeCorrectAnswer(props.quoteIndex, props.answerIndex - 1)} />
                    <input type='text' className='answer-input' onChange={changeAnswerName} />
                </div>
            </div>
        </div>
    )
}

export default NewQuoteAnswer