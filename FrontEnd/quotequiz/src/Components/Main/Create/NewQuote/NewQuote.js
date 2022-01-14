import NewQuoteAnswer from "../NewQuoteAnswer/NewQuoteAnswer"
import "./NewQuote.css"
import { useContext } from "react";
import { CreateContext } from "../../../../Contexts/CreateContext";
const NewQuote = (props) => {
    var context = useContext(CreateContext)
    const changeName = (e) => {
        var isValid = true;
        if (e.target.value === '') {
            isValid = false;
        }
        context.changeQuoteName(props.quote.quoteIndex, e.target.value, isValid)
    }
    return (
        <article className="create-quote-article">
            <input type='text' placeholder="Please enter quote name..." name="quote-name" onChange={changeName} />
            <p>Possible Answers</p>
            {props.quote.answers.map((a, i) => <NewQuoteAnswer key={i} quoteIndex={props.quote.quoteIndex} answerIndex={i + 1} />)}


        </article>
    )
}

export default NewQuote