import { useEffect, useState } from "react/cjs/react.development"
import * as quizService from "../../../services/quizService"
import { Link } from "react-router-dom";
import "./MyResult.css"
const MyResults = (props) => {
    const [results, setResults] = useState([]);
    useEffect(() => {
        async function getResults() {
            var userId = localStorage.getItem('id');
            var userResults = await quizService.GetMyResults(userId)
            setResults(userResults)
        }
        getResults();
    },[])

    return (
        results.length > 0 ?
            <section className="all-results-container">
                {results.map(x =>
                    <article className="result-article" key={x.resultId}>
                        <p>
                            {x.quiz}
                        </p>
                        <Link to={`/myResults/${x.resultId}`}><button>Check Results</button></Link>
                    </article>)}
            </section>
            :
            <h2>'You haven\'t played any of our quizzes yet'</h2 >

    )
}
export default MyResults