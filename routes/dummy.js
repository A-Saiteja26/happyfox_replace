import express from "express";
const router = express.Router();
router.post('/',async(req,res)=>{
    if(req.body.subject && req.body.description){
        const ticketId = Math.floor(10000000 + Math.random() * 90000000);
        res.status(200).json(
            {
                "success":true,
                "contactUser": "sample@gmail.com",
                "ticketId": ticketId,
                "subject": req.body.subject,
                "description": req.body.description,
                "status": "open"
            }
        );
    }
    else{
        res.status(400).json(
            {
                "success":false,
                "message":"didnot get required parameters"
            }
        );
    }
})

export default router;