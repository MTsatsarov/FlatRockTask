import * as quizService from "../../../services/quizService"
import QuizCard from "../QuizCard/QuizCard"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./All.css"
const All = (props) => {
    const [quizzes, setQuizzes] = useState([])
    useEffect(() => {
        async function GetAll() {
            var quizzes = await quizService.GetAll();
            setQuizzes(quizzes);
        }
        GetAll()
    }, [])
    const deleteHandler = async (id) => {
        await quizService.Delete(id)
        var quizzes = await quizService.GetAll();
        setQuizzes(quizzes);
    }
    return (
   
        <section className="quiz-container">
            {quizzes.map(q => <QuizCard key={q.id} quiz={q} deleteHandler={deleteHandler} />)}
        </section> 
    )
}

export default All