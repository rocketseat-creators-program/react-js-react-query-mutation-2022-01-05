module.exports = (req, res, next) => {
  if (req.method.toLowerCase() === "post") {
    setTimeout(() => {
      // res.status(400).send();
      next();
    }, 5000);
  } else {
    next();
  }
};
