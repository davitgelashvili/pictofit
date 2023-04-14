import axios from "axios"

const API = 'https://64369ee08205915d34f85fe2.mockapi.io/api/pictofit_users'

async function getData() {
    try{
        const reset = await axios({
            method: 'get',
            url: API
        })
        return reset
    }catch (error){
        console.log(error)
    }
}

async function sendData(method, data) {
    try{
        const reset = await axios({
            baseURL: API,
            method: method,
            url: API,
            data: {
                ...data
            }
        })
        return reset
    }catch (error){
        console.log(error)
    }
}

export {getData, sendData}