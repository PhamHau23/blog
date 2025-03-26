import axios from "axios"

const apiUrl: string = process.env.NEXT_PUBLIC_API_URL!

export default async function getApi(endPoint: string){
    try {
        const response = await axios.get(`${apiUrl}${endPoint}`)
        return response.data
    } catch (error) {
        return null
    }
}