import { NavLink } from "react-router-dom"

const Home = () => {
    return (
        <div className="form-content">
            <div className="auth">
                <NavLink to={'/login'} className="auth__link">
                    ავტორიზაცია
                </NavLink>
                <NavLink to={'/reg'} className="auth__link">
                    რეგისტრაცია
                </NavLink>
            </div>
        </div>
    )
}

export default Home