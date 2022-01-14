import { useEffect, useState } from "react/cjs/react.development"
import * as quizService from "../../../../services/quizService"
import SingleUserResult from "../SingleUserResult/SingleUserResult"
import "./UserResult.css"
const UserResult = (props) => {
    const [answers, setAnswers] = useState([])
    useEffect(() => {
        async function getResults() {
            var answers = await quizService.GetSingleResultAnswers(props.match.params.id)
            setAnswers(answers);
        }
        getResults();
    }, [])
    return (
        <section className="single-result-container">
            {answers.length > 0 ? answers.map((x,i) => <SingleUserResult key={x.quote} quote={x.quote} answer={x.answer} index={i+1}  userAnswer={x.userAnswer} isCorrect={x.isCorrect ? 'Correct' : 'Not Correct'} />) : 'You haven\'t answered any question from this quiz'}
        </section>
    )
}

export default UserResult