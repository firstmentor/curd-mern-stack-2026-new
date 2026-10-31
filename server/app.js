const express = require("express")
const app = express()
const port =3000
const web  = require("./routes/web")
const connectDb = require('./config/connectDb')
const cors = require('cors')




app.use(cors())

connectDb()

app.use(express.json()) //react/postman json






//http://localhost:3000/api
app.use('/api',web)
//server start
app.listen(port, () => {
  console.log(`server start localhost:${port}`);
});