import { useState } from "react"
import { useNavigate } from "react-router"
import Cookies from "universal-cookie"
import { getData } from "../../../http/httpApi"

const cookie = new Cookies()

const LoginForm = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [errorr, setErrorr] = useState(false)
    const navigate = useNavigate()
    const data = {
        username: userName,
        password: password
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        if(
            userName === '' || 
            password === ''
        ) {
            setErrorr(true)
        } else {
            getData().then( res => {
                const thisData = res.data
                thisData.map( item => {
                    return (
                        item.username === data.username && item.password === data.password ? (
                            cookie.set("sessionID", item.username),
                            navigate('/demo')
                        ) : (
                            setErrorr(true)
                        )
                    )
                })
            })
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label className="input--content">
                <p className="input--text">Username</p>
                <input 
                    type={'text'}
                    value={userName}
                    placeholder={'text'}
                    className='input'
                    onChange={(e) => setUserName(e.target.value)}
                />
            </label>
            <label className="input--content">
                <p className="input--text">Password</p>
                <input 
                    type={'password'}
                    value={password}
                    placeholder={'text'}
                    className='input'
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <p>{errorr && 'არასწორია ან ცარიელია'}</p>
            <button className="send">
                send
            </button>
        </form>
    )
}

export default LoginForm