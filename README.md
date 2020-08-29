# getir-case-study

This app provides REST Api with a single /records end-point for "getir case study" app.

### To run on your localhost

* Install Node.js
* Run: $ git clone https://github.com/ekamberoglu/getir-case-study.git
* Run: npm install
* Run: npm start
* Run: npm test for running unit tests

### Api end-point - /records POST
https://ekrem-getir-case-study-app.herokuapp.com/records

You should request "post" to the api above with the required parameters.

* “startDate” and “endDate” fields will filter the data by createdAt field.

* Sum of the “count” array in the documents will be between “minCount” and “maxCount”.

### Example Request Payload

```jsx
{
  "startDate": "2020-08-28",
  "endDate": "2020-08-29",
  "minCount": 3000,
  "maxCount": 4000
}
```
### Example Response Payload
```jsx
{
    "code": 0,
    "msg": "Success",
    "records": [
        {
            "key": "qwertyu1235",
            "createdAt": "2020-08-28T14:20:16.976Z",
            "totalCount": 3580
        },
        {
            "key": "qwertyu1236",
            "createdAt": "2020-08-28T14:22:26.015Z",
            "totalCount": 3810
        },
        {
            "key": "qwertyu1237",
            "createdAt": "2020-08-28T14:22:54.984Z",
            "totalCount": 3760
        }
    ]
}
```

### Example Records in MongoDB
```jsx
{
    "_id" : ObjectId("5f49123a40c2df0ebba7ff78"),
    "key" : "qwertyu1234",
    "createdAt" : "2020-08-28T14:18:34.662Z",
    "counts" : [ 
        100, 
        900, 
        400, 
        730, 
        150, 
        600, 
        700, 
        0, 
        390, 
        200
    ]
},
{
    "_id" : ObjectId("5f4912a099dbc20ed0adac97"),
    "key" : "qwertyu1235",
    "createdAt" : "2020-08-28T14:20:16.976Z",
    "counts" : [ 
        100, 
        900, 
        400, 
        730, 
        150, 
        600, 
        700, 
        0
    ]
}
```
