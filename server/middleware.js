module.exports = (req, res, next) => {
  if (req.method.toLowerCase() === "post") {
    setTimeout(() => {
      next();
    }, 3000);
  } else {
    next();
  }
};
