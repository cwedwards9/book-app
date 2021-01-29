import axios from "axios";

const API = {
    searchBooks(query) {
        return axios.get("/search", {
            params: {
                q: query 
            }
        });
    },

    saveBook(query) {
        return axios.post("/api/books", query)
    }
}

export { API };