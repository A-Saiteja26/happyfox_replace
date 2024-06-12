import express from "express";
import dbops from '../controllers/ticketDbCtontroller.js';
const router = express.Router();

router.post('/',async(req,res)=>{
    const url = 'http://localhost:3033/dummyApi';
    const data = req.body;
    try{
        const response = await fetch(url,{
            method : 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body:JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const resp = await response.json();
        const result=await dbops.insert(resp);
        if(result===1){
             res.status(201).json({"success":true,"message":"successfully stored in the database"});
            
        }
        else if(result===0){
            res.status(300).json({"success":false,"message":"Failed to store in the database"});

        }
        else{
        res.status(400).json({ message: err.message });

        }
    }
    catch(error){
        res.json({"success":false,"error":error.message});

    }
})

export default router;
