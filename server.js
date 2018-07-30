const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('MEOW! Goodbye world!')

});
app.listen(3000);