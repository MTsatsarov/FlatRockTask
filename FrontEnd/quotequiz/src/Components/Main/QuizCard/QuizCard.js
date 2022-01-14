import "./QuizCard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlayCircle, faEraser, faExchangeAlt } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
const QuizCard = ({ quiz, deleteHandler }) => {
    return (
        <article className="quiz-card">
            <h2>Name: {quiz.title}</h2>
            <p>Total quotes: {quiz.quoteCount}</p>
            {localStorage.getItem('userName') ?
                <>
                    {localStorage.getItem('id') === quiz.creator ?
                        <div className="owner-props">
                            <button name='del-btn' onClick={(e) => deleteHandler(quiz.id)} ><FontAwesomeIcon icon={faEraser} /></button>
                            <Link to={`/edit/${quiz.id}`}><button name='update-btn'><FontAwesomeIcon icon={faExchangeAlt} /></button></Link>
                        </div>
                        :
                        ''}

                    <div>
                        <Link className='button' to={`/play/${quiz.id}`} > <button name="play-btn">
                            <FontAwesomeIcon icon={faPlayCircle} /> Play
                        </button>
                        </Link>
                    </div>
                </> :
                <p>Please login to play</p>}
        </article>
    )
}

export default QuizCard