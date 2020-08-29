const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateParameters(data) {
    let errors = {};

    if (isEmpty(data.startDate)) {
        errors.startDate = 'startDate is required field';
    } else {
        if (!validator.isISO8601(data.startDate)) {
            errors.startDate = 'startDate format is invalid, it should be in "YYYY-MM-DD" format';
        }
    }

    if (isEmpty(data.endDate)) {
        errors.endDate = 'endDate is required field';
    } else {
        if (!validator.isISO8601(data.endDate)) {
            errors.endDate = 'endDate format is invalid, it should be "YYYY-MM-DD" format';
        }
    }

    if (!isEmpty(data.startDate) && !isEmpty(data.endDate)) {
        if (!validator.isBefore(data.startDate, data.endDate)) {
            errors.minCount = 'startDate must be before than endDate';
        }
    }

    if (isEmpty(data.minCount)) {
        errors.minCount = 'minCount is a required field';
    } else {
        if (!validator.isInt(data.minCount.toString())) {
            errors.minCount = 'minCount should be an integer';
        }
    }

    if (isEmpty(data.maxCount)) {
        errors.maxCount = 'maxCount is a required field';
    } else {
        if (!validator.isInt(data.maxCount.toString())) {
            errors.maxCount = 'maxCount should be an integer';
        }
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}