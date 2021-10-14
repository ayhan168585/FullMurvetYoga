import axios from "axios"

const BASE_URL="http://localhost:5000/api/"
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWM5MWJjMzkzNzc3ZGM4MzMzZTVhNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDA0NTc1OSwiZXhwIjoxNjM0MzA0OTU5fQ.Z3WnY16birghhBHzPNIXyVssV5cEKgYtGtK9mdoDUio";



export const publicRequest=axios.create({

    baseURL:BASE_URL,

});
export const userRequest=axios.create({

    baseURL:BASE_URL,
    header:{token: `Bearer ${TOKEN}` }
    
})