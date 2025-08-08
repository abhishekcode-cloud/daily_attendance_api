
var isProduction = (process.env.NODE_ENV || '').trim() === 'production';
let environment;
if (isProduction) {
  environment = (err, req, res, next) => {
    //console.log(err.stack);
    err.status = err.status || 500;
    res.status(err.status).json({
      status: err.status,
      name: err.name,
      path: err.path,
      errors: err.errors,
      message: err.message,
      stack: err.stack,
    })
  }
} else {
  environment = (err, req, res, next) => {
    err.status = err.status || 500;
    res.status(err.status).set({ status: err.status, response: err.name, responseMessage: err.message }).json({
      status: err.status,
      name: err.name,
      message: err.message
    })
  }

}
export default environment;

