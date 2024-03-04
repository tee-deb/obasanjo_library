const { constants } = require('../constants');

const errorHandler = ( error, req, res, next ) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({ title: 'Validation failed', message: error.message, stackTrace: error.stack }); 
            break;
        case constants.NOT_FOUND:
            res.json({ title: 'Not found', message: error.message, stackTrace: error.stack });
            case constants.UNAUTHORIZED:
            res.json({ title: 'Unauthorized', message: error.message, stackTrace: error.stack });
            case constants.FORBIDDEN:
            res.json({ title: 'Forbidden', message: error.message, stackTrace: error.stack });
            case constants.SERVER_ERROR:
            res.json({ title: 'Server error', message: error.message, stackTrace: error.stack });
        default:
            console.log("No Error, All Good");
            break;
    }
};

module.exports = errorHandler;