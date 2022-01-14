import EditAnswer from "./EditAnswer/EditAnswer";
const EditQuote = (props) => {
    return (
        <article>
            <input type='text' defaultValue={props.quote.title} onChange={(e)=>props.changeQuoteName(e,props.id)} />
            {props.quote.answers.map(x => <EditAnswer key={x.id} answer={x} question={props.quote.id} />)}
        </article>
    )
}

export default EditQuote