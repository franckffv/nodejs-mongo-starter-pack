const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);

  res.json({
    status: 'error',
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack 
  })
}

// TODO: Add a checkId middleware to check if the id is valid
const numberOfUser = 10;

const checkId = (req, res, next, val) => {
   if (req.params.id * 1 > numberOfUser) {
      return res.status(404).json({
         status: 'fail',
         message: 'Invalid ID'
      })
   }
   next();
};


const checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.email) {
     return res.status(400).json({
        status: 'fail',
        message: 'Missing name or email'
     })
  }
  next();
};

export { checkBody, checkId, errorHandler };
