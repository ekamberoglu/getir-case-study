var express = require('express');
var router = express.Router();
var validateParameters = require('../utils/util')

const connect = require('../db');

router.post('/', async (req, res, next) => {
    const { errors, isValid } = validateParameters(req.body);
    if (!isValid) {
        return res.status(400).json({
                "code": 1,
                "msg": "Fail",
                "records": errors
            }
        );
    }

    const { startDate, endDate, minCount, maxCount } = req.body;

    const databaseName = 'getir-case-study'
    const client = await connect();
    const db = client.db(databaseName)

    const recordArray = await db.collection('records').find().toArray()
    let resultArray = new Array();

    const startDateObj = Date.parse(startDate)
    const endDateObj = Date.parse(endDate)

    if (recordArray !== null && recordArray.length > 0) {
        recordArray.forEach((record) => {
            const {createdAt, counts} = record;
            const totalCounts = counts.reduce((a, b) => a + b, 0)
            const createdAtObj = Date.parse(createdAt)

            if ((createdAtObj >= startDateObj && createdAtObj < endDateObj) &&
                ( totalCounts >= minCount && totalCounts < maxCount)) {

                const tempRecord = {
                    'key' : record.key,
                    'createdAt': record.createdAt,
                    'totalCount': totalCounts
                }

                resultArray.push(tempRecord)
            }
        })
    }

    const finalResult = {
        "code": 0,
        "msg": "Success",
        "records": resultArray
    }

    client.close();
    res.status(200).json(finalResult)
});

module.exports = router;