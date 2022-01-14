import * as api from "../common/api"

 async function Register(model) {
    var result = await api.post(api.host+"/api/authenticate/register",model)
    return result;
}

 async function  Login(model) {
    var result = await api.post(api.host+"/api/authenticate/login",model)
    return result;
}

export {
    Register,
    Login
}