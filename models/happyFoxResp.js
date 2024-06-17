import mongoose from "mongoose";
const respSchema = new mongoose.Schema({
    contactUser:{
        type: String,
        required:true
    },
    ticketId:{
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    status: {
        type: String,
        required: true
    },
    escalation:{
        type:String
    },
    esc_details:{
        type : String
    }
})
export default mongoose.model('HapFaxResp',respSchema);