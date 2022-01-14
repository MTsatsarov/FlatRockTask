import { Link } from 'react-router-dom'
import { useContext } from 'react'
import './Header.css'
import { AuthContext } from '../../Contexts/AuthenticationContext'

const Header = (props) => {
    var context = useContext(AuthContext)
    const logout = () => {
        context.logout();
    }
    return (
        <header>
            <nav className='header-nav'>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    {context.user.id ?
                        <>
                            <Link to={"/create"}>
                                <li>
                                    Create
                                </li>
                            </Link>
                            <Link to={"/myResults"}>
                                <li>
                                    My Results
                                </li>

                            </Link>
                            <li>
                                Welcome {localStorage.getItem('userName')}
                            </li>
                            <li onClick={logout}>
                                Logout
                            </li>
                        </>
                        :
                        <>
                            <Link to={"/login"}>
                                <li>
                                    Login
                                </li>
                            </Link>
                            <Link to={"/register"}>
                                <li>
                                    Register
                                </li>
                            </Link>
                        </>
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header