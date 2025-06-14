import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import reportRouter from './routes/reportRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'
import slotRouter from './routes/slotRoute.js'

// App Config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())

// api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/doctor',doctorRouter)
app.use('/api/report',reportRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)
app.use('/api/slot',slotRouter)

app.get('/',(req,res)=>{
    res.send("API Working")
})

app.listen(port, ()=> console.log('Server started on PORT : '+ port))