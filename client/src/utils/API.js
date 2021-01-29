import axios from "axios";

const API = {
    searchBooks(query) {
        return axios.get("/search", {
            params: {
                q: query 
            }
        });
    }
}

export { API };