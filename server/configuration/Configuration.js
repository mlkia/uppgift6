import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectTodadabase = async ()  => {
  try {
      const DB_URL= process.env.DATABASE_URL
      await mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
        console.log ('Successfuly connect to database')
  } catch (error) {
    console.log('ERROR WHILE TRYING TO CONNECT TO THE DATA BASE: ',error)
    process.exit()
  }
  
}

const connectToPort = (app) => {
  const port = process.env.PORT
  app.listen(port, () => {
    console.log(`Server RUNING IN PORT ${port}` )
  })

}

export default {
  connectTodadabase,
  connectToPort
}