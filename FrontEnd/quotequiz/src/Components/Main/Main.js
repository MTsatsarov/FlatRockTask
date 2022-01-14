import { Switch, Route } from "react-router-dom";
import Login from "./Login/Login";
import Create from "./Create/Create";
import Register from "./Register/Register";
import All from "./All/All";
import Play from "./Play/Play";
import "./Main.css"
import { CreateContextProvider } from "../../Contexts/CreateContext";
import { PlayContextProvider } from "../../Contexts/PlayContext";
import MyResults from "./MyResults/MyResults";
import Edit from "./Edit/Edit";
import UserResult from "./MyResults/UserResult/UserResult";
const Main = () => {
    return (
        <main>
         
            <Switch>
                <Route path='/' exact component={All} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/edit/:id" exact component={Edit} />
                <Route path="/myResults" exact component={MyResults} />
                <Route path="/myResults/:id" exact component={UserResult} />
                <PlayContextProvider>
                    <Route path="/play/:id" exact component={Play} />
                </PlayContextProvider>
          
            </Switch>
             <Switch>
             <CreateContextProvider>
                    <Route path="/create" exact component={Create} />
                </CreateContextProvider>
             </Switch>

        </main>
    )
}


export default Main