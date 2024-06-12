import Response from '../models/happyFoxResp.js';
const dbops={}
dbops.insert =async(resp)=>{
    const ticketResp = new Response({
        contactUser: resp.contactUser,
        ticketId: resp.ticketId,
        subject: resp.subject,
        description: resp.description,
        status: resp.status
      });
      try{
        const newTicketResp = await ticketResp.save();
        if(newTicketResp){
            return 1;
        }
        else{
            return 0;

        }
      }
      catch(err){
        return err.message
      }
}
dbops.get=async(status)=>{
    try{
        const resp = await Response.aggregate([
            {
                "$match":{
                    "status":status
                }
            }
        ]);
        return {success:true,data:resp};
    }
    catch(error){
        return {success:false,error:error.message};
    }

}
export default dbops;