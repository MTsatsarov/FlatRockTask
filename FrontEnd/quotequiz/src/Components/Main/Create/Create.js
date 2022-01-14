import { useContext } from "react"
import { CreateContext } from "../../../Contexts/CreateContext"
import NewQuote from "./NewQuote/NewQuote"
import * as quizService from "../../../services/quizService"
import './Create.css'
const Create = (props) => {
    var context = useContext(CreateContext)
    const changeNameHandler = (e) => {
        var name = e.target.value
        var isValid = true;
        if (name === '') {
            isValid = false;
        }
        context.changeName(name, isValid)
    }
    const addQuoteHandler = (e) => {
        var newQuote = <NewQuote />
        context.createQuote(newQuote);
    }

    const submitQuizHandler = async (e) => {
        e.preventDefault();
        var quiz = await context.submitQuote();
        await quizService.Create(quiz);
        props.history.push('/')
    }
    return (
        <section className="create-wrapper">
            <form onSubmit={(e) => submitQuizHandler(e)}>
                <input placeholder="Enter quote name here..." type='text' onChange={changeNameHandler} />
                {context.quoteArray.map((x, i) => <NewQuote key={i} quote={x} />)}
                <button type='button' onClick={addQuoteHandler}>Add Quote</button>
                <button>Create</button>
            </form >
        </section>
    )
}
export default Create