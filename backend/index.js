import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import axios from 'axios';

const app = express();



app.get('/', (req, res) => {
    res.send("new server")
})

app.get('/api/jokes', async (req, res) => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        res.send(response.data)
    } catch (error) {
        res.status(500).json({error: "failed to fetch JSON"})
    }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('at port ' + port)
});