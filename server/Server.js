import express from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import middlewares from './src/middlewares/MiddleWares.js'
import Configuration from './configuration/Configuration.js'
import UserRoutes from './src/routes/User.routes.js'
import cors from 'cors'

dotenv.config()

const app = express()
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use(helmet())
app.use(morgan('common'))
app.use(cors({credentials:true}))

app.get('/recipe', (req, res) =>{
  res.send('Bancaks! ')
})

UserRoutes.routes(app)
app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

Configuration.connectTodadabase()
Configuration.connectToPort(app)

export default app




// app.listen(port, () => {
//   console.log(`Server RUNING IN PORT ${port}` )
// })




