import express from 'express'
import dotenv from 'dotenv'
import mustache from 'mustache-express'
import path from 'path'
import mainRoute from './routes/index'

dotenv.config()

const server=express()

server.set('view engine','mustache')
server.set('views',path.join(__dirname,'views'))
server.engine('mustache',mustache())

server.use(express.static(path.join(__dirname,'../public')))

server.use(mainRoute)

server.use((req,res)=>{
    res.send('Página não encontrada')
})

server.listen(4000)