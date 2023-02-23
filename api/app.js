const express = require('express')
const cors = require('cors')

const app = express()
const port = 4000

app.use(cors())

app.get('/', (req, res) => {
    res.json([
        {
            "id": 0,
            "name": "test",
            "age": 30,
            "date": "2023-02-15T10:00:00"
        },
        {
            "id": 1,
            "name": "rishi",
            "age": 27,
            "date": "2023-02-15T10:00:00"
        },
        {
            "id": 2,
            "name": "dave",
            "age": 36,
            "date": "2023-02-15T10:00:00"
        },
        {
            "id": 3,
            "name": "john",
            "age": 18,
            "date": "2023-02-15T10:00:00"
        },
        {
            "id": 4,
            "name": "test",
            "age": 40,
            "date": "2023-02-15T10:00:00"
        }
    ])
})

app.listen(port, () => {
    console.log("Listening on 4000")
})