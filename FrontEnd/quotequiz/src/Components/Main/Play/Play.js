import { useState, useEffect, useContext } from "react";
import { PlayContext } from "../../../Contexts/PlayContext";
import * as quizService from "../../../services/quizService"
import Result from "../Result/Result";
import SingleQuote from "../SingleQuote/SingleQuote"
const Play = (props) => {
    var context = useContext(PlayContext)
    const [quiz, setQuiz] = useState();
    const [resultId, setResultId] = useState('')
    const [currentQuote, setCurrentQuote] = useState(0);
    useEffect(() => {
        async function getQuizById() {
            var id = props.match.params.id;
            var fetched = await quizService.StartQuiz({ id: id, userId: localStorage.getItem('id') });
            setQuiz(fetched.quiz);
            setResultId(fetched.resultId);
        }
        getQuizById();
    }, [])
    const changeQuote = () => {
        setCurrentQuote(currentQuote + 1)
    }
    return (
        context.finalResult.display ? <Result quiz={quiz.title} score={context.finalResult.score}/> :
            <>
        <section className="play-wrapper">
            {quiz ? <SingleQuote title={quiz.quotes[currentQuote].title} totalQuotes={quiz.quotes.length} currentQuote={currentQuote} quoteId={quiz.quotes[currentQuote].id} possibleAnswers={quiz.quotes[currentQuote].answers} resultId={resultId} changeQuote={changeQuote} /> : ''}
        </section>
        </>
    )
}

export default Play
