import * as api from "../common/api"
async function Create(quiz) {
    return await api.post(api.host + "/quiz/create", quiz)
}
async function GetAll() {
    return await api.get(api.host + "/quiz/all")
}
async function StartQuiz(model) {
    return await api.post(api.host + `/start/${model.id}`, model)
}
async function CheckAnswer(answer) {
    return await api.post(api.host + `/play/${answer.resultId}`, answer)
}
async function Delete(id) {
    return await api.del(api.host + `/quiz/${id}`)
}
async function GetEditModel(id) {
    return await api.get(api.host + `/edit/${id}`)
}
async function GetResult(id) {
    return await api.get(api.host + `/result/${id}`)
}
async function GetMyResults(id) {
    return await api.get(api.host + `/myResults/${id}`)
}
async function GetSingleResultAnswers(id) {
    return await api.get(api.host + `/userResult/${id}`)
}
export {
    Create,
    GetAll,
    StartQuiz,
    CheckAnswer,
    Delete,
    GetEditModel,
    GetResult,
    GetMyResults,
    GetSingleResultAnswers
}