import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
const MultipleAnswers = (props) => {
    return (
        <article className="answers-wrapper">
        <button data-answer={props.possibleAnswers[0]} > <FontAwesomeIcon icon={faArrowRight} />{props.possibleAnswers[0]} </button>

        <button data-answer={props.possibleAnswers[1]}> <FontAwesomeIcon icon={faArrowRight} />{props.possibleAnswers[1]} </button>

        <button data-answer={props.possibleAnswers[2]}> <FontAwesomeIcon icon={faArrowRight} />{props.possibleAnswers[2]} </button>
    </article>
    )
}

export default MultipleAnswers