import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
app.use(express.json())

app.get('/users', (request, response) => {
    console.log('listagem de usuários')
    response.json([
        'Diego',
        'Cleiton',
        'Robson',
        'Jackeline'
    ])
});

app.listen(process.env.PORT, () => console.warn('Server of '+ process.env.NODE_ENV +' started on PORT: '+ process.env.PORT ))