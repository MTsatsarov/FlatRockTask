import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCheckCircle, faStopCircle } from '@fortawesome/free-solid-svg-icons'

const BinaryAnswers = (props) => {
    return (
        <article className="binary-wrapper">
        <p id="result">{props.binaryAnswer}</p>
        <span className="binary-buttons-box">
            <button data-answer='yes' name="binary-correct"><FontAwesomeIcon icon={faCheckCircle} /></button>
            <button data-answer='no' name='binary-wrong'><FontAwesomeIcon icon={faStopCircle} /></button>
        </span>
    </article>
    )
}
export default BinaryAnswers