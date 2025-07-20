import {StatusCodes} from 'http-status-codes';

const errorHandlerMiddleware = (err, req, res, next) => {
    console.error(err);
    const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    const msg = err.message || 'Something went wrong, please try again later';
    res.status(statusCode).json({ error: msg });
};

export default errorHandlerMiddleware;