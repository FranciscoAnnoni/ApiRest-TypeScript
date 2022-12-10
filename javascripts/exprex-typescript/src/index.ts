import express from 'express'
import diaryRouter from './routes/diaries'


const app = express()
app.use(express.json())  //transforma las cosas a un json 

const PORT = 3000

app.get('/ping', (_req, res) => {
    
    console.log('someone pinged here!! '+ new Date().toLocaleDateString())
    res.send('pong - puto')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, ()=>{
console.log('server running on port ${PORT}')
})