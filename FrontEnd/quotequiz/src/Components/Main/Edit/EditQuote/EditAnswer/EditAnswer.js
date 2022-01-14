import "./EditAnswer"
const EditAnswer = (props) => {
    return (
        <div className='answer'>
            <textarea maxLength={150} spellCheck='true' type='text' name='answerName' id={props.answer.id} defaultValue={props.answer.title} />

            <input className="radio-input" type='radio' defaultValue={props.answer.title} name='isCorrect' />
        </div>
    )
}
export default EditAnswer