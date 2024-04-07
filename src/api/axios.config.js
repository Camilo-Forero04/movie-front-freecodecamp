import axios from "axios";
export default axios.create({
    baseURL:"http://localhost:8080/api/v1/movies",
    headers: {
        "Content-Type": "application/json",
        // You can add other default headers here
    }
})