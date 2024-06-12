import express from "express";
import dbops from '../controllers/ticketDbCtontroller.js';
const router = express.Router();
router.get('/',async(req,res)=>{
    const status=req.query.status
    // console.log(sample)

    const result=await dbops.get(status)
    if(result.success){
        res.status(200).json(result.data)
    }
    else{
      res.status(400).json(result.error);
    }
})
export default router;