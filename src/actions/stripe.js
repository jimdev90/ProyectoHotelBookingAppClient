import axios from "axios";
export const createConnectAcount = async (token) => {
    return await axios.post(`http://localhost:8000/api/create-connect-account`, {}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}