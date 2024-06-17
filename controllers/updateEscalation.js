import Response from '../models/happyFoxResp.js';


const updateEscalationDetails = async (req, res) => {
    const { id } = req.params;
    const { escalation, esc_details } = req.body;

    if (!id) {
        return res.status(400).json({ message: 'ID is required' });
    }

    try {
        console.log(id);
        const updatedResponse = await Response.findByIdAndUpdate(
            id,
            { escalation, esc_details },
            { new: true, runValidators: true }
        );

        if (!updatedResponse) {
            return res.status(404).json({ message: 'Response not found' });
        }

        res.status(200).json(updatedResponse);
    } catch (error) {
        console.error('Error updating escalation details:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export default updateEscalationDetails;
