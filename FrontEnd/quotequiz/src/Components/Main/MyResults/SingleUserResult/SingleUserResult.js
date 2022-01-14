import "./SingleResult.css"
const SingleUserResult = (props) => {
    return (
        <article className="single-result">
            <h2>Quote Number: {props.index}</h2>
            <p>Quote : : <strong>{props.quote}</strong></p>
            <p>Answer : <strong>  {props.answer}</strong></p>
            <p> Your Answer :  <strong>{props.userAnswer}</strong> </p>
            <p className={props.isCorrect? 'correct' : 'not-correct'}>Correct : <strong> {props.isCorrect}</strong></p>


        </article>
    )
}
export default SingleUserResult