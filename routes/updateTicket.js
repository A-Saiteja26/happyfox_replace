import express from 'express';
import updateEscalationDetails from '../controllers/updateEscalation.js'; 

const router = express.Router();

router.put('/responses/:id', updateEscalationDetails);

export default router;
