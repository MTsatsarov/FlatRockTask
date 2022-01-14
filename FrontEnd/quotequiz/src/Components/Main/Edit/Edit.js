import { useEffect, useState } from "react/cjs/react.development"
import * as quizService from "../../../services/quizService"
import EditQuote from "./EditQuote/EditQuote";
const Edit = (props) => {
    const [quiz, setQuiz] = useState({
        quizName: '',
        quotes: [],
    });
    useEffect(() => {
        async function GetModel() {
            var result = await quizService.GetEditModel(props.match.params.id);
            console.log(result);
            setQuiz(prevState => ({ ...prevState, quizName: result.title, quotes: result.quotes, currentQuote: 0 }))

        }
        GetModel();
    }, [props.match.params.id])
    const changeQuizName = (e) => {
        setQuiz(prevState => ({ ...prevState, quizName: e.target.value, }))
    }
    const changeQuoteName = (e,id) => {
        var quote= quiz.quotes.find(x=>x.id===id)
        console.log(quote);
        quote.title=e.target.value
        setQuiz(prevState => ({ ...prevState, quotes: prevState.quotes }))
    }
    return (
        <section>
            <form>
                <input defaultValue={quiz.quizName} onChange={changeQuizName} />
                <EditQuote current={quiz.currentQuote} changeQuoteName = {changeQuoteName} quote={quiz.quotes[quiz.currentQuote]} />
                <button>Update</button>
            </form>
        </section>
    )
}
export default Edit