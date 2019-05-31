const index = (req, res, next) => {
    return res.send("Posts");
};

const create = (req, res, next) => {
    return res.send(req.body);
};

const show = (req, res, next) => {
    return res.send("Show Post");
};

const edit = (req, res, next) => {
    return res.send("Show Edit Post Form");
};

const update = (req, res, next) => {
    return res.send("Show Post");
};

module.exports = {
    index,
    create,
    show,
    edit,
    update
};