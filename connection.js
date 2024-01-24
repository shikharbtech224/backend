const mongoose = require('mongoose');

const url = "mongodb+srv://shikharbtech224:mongodb2245407@cluster0.2qslx7l.mongodb.net/mydb?retryWrites=true&w=majority";

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;