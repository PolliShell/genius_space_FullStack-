module.exports = async (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(404).send({message: "User nor found"});
        }

        if (req.user.role !== 'admin') {
            return res.status(500).json({
                message: 'User don`t have permissions'
            });
        }


        next();
    } catch (err) {
        console.log(err);
        res.status(500).json({message: err.message});
    }
}