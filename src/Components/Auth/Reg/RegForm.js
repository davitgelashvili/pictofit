import { useState } from "react"
import { sendData } from "../../../http/httpApi"

const RegForm = () => {
    const [fullname, setFullName] = useState('')
    const [company, setCompany] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [errorr, setErrorr] = useState(false)

    const data = {
        "fullname": fullname,
        "company": company,
        "username": userName,
        "password": password
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        if(
            fullname === '' ||
            company === '' || 
            userName === '' || 
            password === ''
        ) {
            setErrorr(true)
        } else {
            sendData('post', data)
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit} onChange={() => setErrorr(false)}>
            <label className="input--content">
                <p className="input--text">Full Name</p>
                <input 
                    type={'text'}
                    value={fullname}
                    placeholder={'text'}
                    className='input'
                    onChange={(e) => setFullName(e.target.value)}
                />
            </label>
            <label className="input--content">
                <p className="input--text">Company Name</p>
                <input 
                    type={'text'}
                    value={company}
                    placeholder={'text'}
                    className='input'
                    onChange={(e) => setCompany(e.target.value)}
                />
            </label>
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
            <p>{errorr && 'შეავსეთ ყველა ველი'}</p>
            <button className="send">
                რეგისტრაცია
            </button>
        </form>
    )
}

export default RegForm