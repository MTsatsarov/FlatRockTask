import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import { AuthProvider } from './Contexts/AuthenticationContext';

function App() {
  return (
    <AuthProvider>
    <Header/>
    <Main/>
    </AuthProvider>
  );
}

export default App;
