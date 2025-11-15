module.exports = (err, req, res, next) => {
  console.error(err.stack);

  res.status(res.statusCode || 500).json({
    message: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined
  });
};
