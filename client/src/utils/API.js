import axios from "axios";

const API = {
    // Get request to call the API on the backend
    searchBooks(query) {
        return axios.get("/search", {
            params: {
                q: query 
            }
        });
    },
    // Post request to save a book to the db
    saveBook(query) {
        return axios.post("/api/books", query)
    },
    // Get request to rturn all saved books in the db
    returnBooks() {
        return axios.get("/api/books")
    },
    // delete a book, by id, in the db
    deleteBook(id) {
        return axios.delete(`/api/books/${id}`)
    }
}

export { API };