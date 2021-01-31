const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bookRoutes = require("./routes/book");

const URL = process.env.MONGODB_URI || "mongodb://localhost/booksDB";

// Connect to MongoDB
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then(() => console.log("Connected to MongoDB!"))
.catch(error => console.log(error.message));


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}


app.use(bookRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));