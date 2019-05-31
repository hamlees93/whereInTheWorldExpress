
const index = async (req, res, next) => {
    try {
      return res.send("Welcome");
    } catch (err) {
      next(err);
    }
};

const show = (req, res, next) => {
    return res.send("Show")
};

module.exports = {
    index,
    show
};