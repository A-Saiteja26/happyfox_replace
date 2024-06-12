import express from 'express';
import mongoose from 'mongoose';
import ticketRoutes from './routes/ticket.js';
import getTicketRoutes from './routes/getTicket.js';
import dummyRoutes from './routes/dummy.js';
const app = express();
const port = 3033;
app.use(express.json());
mongoose.connect('mongodb+srv://saiteja4032:Saiteja%404599@cluster0.ziea3hm.mongodb.net/tickets',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const db = mongoose.connection;
db.on('error',console.error.bind(console, 'connection error:'));
db.once('open',()=>{
    console.log('connected to mongoose');
});
app.get('/',(req,res)=>{
    res.json({"success":true});
})
app.use('/raiseTicket',ticketRoutes);
app.use('/get',getTicketRoutes);
app.use('/dummyApi',dummyRoutes);
app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`);
})