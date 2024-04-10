import axios from "axios";
export default axios.create({
    baseURL:"http://localhost:8080",
    headers: {
        "Content-Type": "application/json",
        // You can add other default headers here
    }
})