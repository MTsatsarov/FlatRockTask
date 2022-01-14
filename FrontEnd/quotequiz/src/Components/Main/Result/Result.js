import { Link } from "react-router-dom"
import "./Result.css"
const Result = (props) => {
    console.log(props);
    return (
        <section className="finish-result">
            <h1>You have finished test {props.quiz}</h1>
            <p>You passed with {props.score}%</p>
            <article className="all-wrap">
                <p>Play another quiz </p>
                <Link to={'/'}><button>Quizzes</button></Link>
            </article>
            <article className="create-wrap">
                <p>Or create your own quiz</p>
                <Link to={'/create'}><button name="create-btn">Create</button></Link>
            </article>
        </section>
    )
}
export default Result