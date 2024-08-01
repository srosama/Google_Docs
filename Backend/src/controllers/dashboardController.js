const dashboard = async (req, res) => {
    try {
        res.json({ message: 'This is the dashboard' });
    } catch (error) {
        console.log("hhyyyy iam in")
        res.status(500).send('Server error');
    }
}



module.exports = { dashboard };
