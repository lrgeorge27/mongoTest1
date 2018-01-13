MongoDB shell version: 2.6 .12
connecting to: test
Welcome to the MongoDB shell.
For interactive help, type "help".
For more comprehensive documentation, see
http: //docs.mongodb.org/
    Questions ? Try the support group
http: //groups.google.com/group/mongodb-user
    Server has startup warnings:
    2018 - 01 - 13 T16: 29: 05.324 + 0000 ** WARNING: --rest is specified without--httpinterface,
    2018 - 01 - 13 T16: 29: 05.325 + 0000 ** enabling http interface >
    use inventory
switched to db inventory
    >
    db
inventory
    >
    use carRental
switched to db carRental
    >
    show db
2018 - 01 - 13 T16: 37: 45.262 + 0000 don 't know how to show [db] at src/mongo/shell/utils.js:729 >
    db.cars.insert(
        ...{
            ..."type": "economy",
            ..."price": 40.00,
            ..."available": 30
                ...
        }
        ...)
WriteResult({ "nInserted": 1 }) >
    show dbs
admin(empty)
carRental 0.078 GB
local 0.078 GB
    >
    show db
2018 - 01 - 13 T16: 42: 49.456 + 0000 don 't know how to show [db] at src/mongo/shell/utils.js:729 >
    show dbs
admin(empty)
carRental 0.078 GB
local 0.078 GB
    >
    db.cars.insert(
        ...{
            ..."type": "luxury"
                ...
        }
        ...)
WriteResult({ "nInserted": 1 }) >
    show db.cars
2018 - 01 - 13 T16: 44: 54.514 + 0000 don 't know how to show [db.cars] at src/mongo/shell/utils.js:729 >
    db.cars
carRental.cars >
    db.cars.update(
        ...{ "type": "luxury" }
        ...{
            "$set": { "price": 60.00 }
            ...)
        ...
    })
2018 - 01 - 13 T16: 57: 04.519 + 0000 SyntaxError: Unexpected token { >
        db.cars.update(
            ...{ "type": "luxury" },
            ...{ "$set": "price": 60.00 },
            ...db.cars.update({ "type": "luxury" } { "$set": { "price": 60.00 } })
            ...)
        2018 - 01 - 13 T16: 59: 06.416 + 0000 SyntaxError: Unexpected token:
            >
            db.cars.find() { "_id": ObjectId("5a5a36dc991dbe1aae8f7ad9"), "type": "economy", "price": 40, "available": 30 } { "_id": ObjectId("5a5a3778991dbe1aae8f7ada"), "type": "luxury" } >
            db.cars.update(
                ...{
                    "type": "luxury},
                    2018 - 01 - 13 T16: 59: 50.619 + 0000 SyntaxError: Unexpected token ILLEGAL >
                        db.cars.find({ "type": "economy" }) { "_id": ObjectId("5a5a36dc991dbe1aae8f7ad9"), "type": "economy", "price": 40, "available": 30 } >
                        db.cars.update({ "type": "luxury" }, { "$set": { "price": 60 } }, { "$set": { "available": 10 } })
                    WriteResult({ "nMatched": 1, "nUpserted": 0, "nModified": 1 }) >
                    db.cars.find() { "_id": ObjectId("5a5a36dc991dbe1aae8f7ad9"), "type": "economy", "price": 40, "available": 30 } { "_id": ObjectId("5a5a3778991dbe1aae8f7ada"), "type": "luxury", "price": 60 } >
                    db.cars.update({ "type": "luxury" }, { "$set": { "available": 10 } })
                    WriteResult({ "nMatched": 1, "nUpserted": 0, "nModified": 1 }) >
                    db.cars.find() { "_id": ObjectId("5a5a36dc991dbe1aae8f7ad9"), "type": "economy", "price": 40, "available": 30 } { "_id": ObjectId("5a5a3778991dbe1aae8f7ada"), "type": "luxury", "price": 60, "available": 10 } >
                    db.cars.insert({ "type": "junker" }, { "price": 10 })
                    WriteResult({ "nInserted": 1 }) >
                    db.cars.find() { "_id": ObjectId("5a5a36dc991dbe1aae8f7ad9"), "type": "economy", "price": 40, "available": 30 } { "_id": ObjectId("5a5a3778991dbe1aae8f7ada"), "type": "luxury", "price": 60, "available": 10 } { "_id": ObjectId("5a5a3ce9991dbe1aae8f7adb"), "type": "junker" } >
                    db.cars.remove({ "type": "junker" })
                    WriteResult({ "nRemoved": 1 }) >
                    db.cars.find() { "_id": ObjectId("5a5a36dc991dbe1aae8f7ad9"), "type": "economy", "price": 40, "available": 30 } { "_id": ObjectId("5a5a3778991dbe1aae8f7ada"), "type": "luxury", "price": 60, "available": 10 } >
                    db.cars.insert({ type: "junker", price: 10 })
                    WriteResult({ "nInserted": 1 }) >
                    db.cars.find() { "_id": ObjectId("5a5a36dc991dbe1aae8f7ad9"), "type": "economy", "price": 40, "available": 30 } { "_id": ObjectId("5a5a3778991dbe1aae8f7ada"), "type": "luxury", "price": 60, "available": 10 } { "_id": ObjectId("5a5a3e1e991dbe1aae8f7adc"), "type": "junker", "price": 10 } >
                    db.cars.update({ type: "economy" }, { $set: { available: 50 } })
                    WriteResult({ "nMatched": 1, "nUpserted": 0, "nModified": 1 }) >
                    db.cars.find() { "_id": ObjectId("5a5a36dc991dbe1aae8f7ad9"), "type": "economy", "price": 40, "available": 50 } { "_id": ObjectId("5a5a3778991dbe1aae8f7ada"), "type": "luxury", "price": 60, "available": 10 } { "_id": ObjectId("5a5a3e1e991dbe1aae8f7adc"), "type": "junker", "price": 10 } >
                    db.cars.insert({ type: "junker", price: 15 })
                    WriteResult({ "nInserted": 1 }) >
                    db.cars.find() { "_id": ObjectId("5a5a36dc991dbe1aae8f7ad9"), "type": "economy", "price": 40, "available": 50 } { "_id": ObjectId("5a5a3778991dbe1aae8f7ada"), "type": "luxury", "price": 60, "available": 10 } { "_id": ObjectId("5a5a3e1e991dbe1aae8f7adc"), "type": "junker", "price": 10 } { "_id": ObjectId("5a5a4197991dbe1aae8f7add"), "type": "junker", "price": 15 } >
                    db.cars.update({ type: "junker" }, { $set: { price: 20 } }, { "multi": true })
                    WriteResult({ "nMatched": 2, "nUpserted": 0, "nModified": 2 }) >
                    db.cars.find

                    function(query, fields, limit, skip, batchSize, options) {
                        var cursor = new DBQuery(this._mongo, this._db, this,
                            this._fullName, this._massageObject(query), fields, limit, skip, batchSize, options || this.getQueryOptions());

                        var connObj = this.getMongo();
                        var readPrefMode = connObj.getReadPrefMode();
                        if (readPrefMode != null) {
                            cursor.readPref(readPrefMode, connObj.getReadPrefTagSet());
                        }

                        return cursor;
                    } >
                    db.cars.find() { "_id": ObjectId("5a5a36dc991dbe1aae8f7ad9"), "type": "economy", "price": 40, "available": 50 } { "_id": ObjectId("5a5a3778991dbe1aae8f7ada"), "type": "luxury", "price": 60, "available": 10 } { "_id": ObjectId("5a5a3e1e991dbe1aae8f7adc"), "type": "junker", "price": 20 } { "_id": ObjectId("5a5a4197991dbe1aae8f7add"), "type": "junker", "price": 20 } >
                    db.cars.update({ type: "economy" }, { $inc: { available: 1 } })
                    WriteResult({ "nMatched": 1, "nUpserted": 0, "nModified": 1 }) >
                    db.cars.find() { "_id": ObjectId("5a5a36dc991dbe1aae8f7ad9"), "type": "economy", "price": 40, "available": 51 } { "_id": ObjectId("5a5a3778991dbe1aae8f7ada"), "type": "luxury", "price": 60, "available": 10 } { "_id": ObjectId("5a5a3e1e991dbe1aae8f7adc"), "type": "junker", "price": 20 } { "_id": ObjectId("5a5a4197991dbe1aae8f7add"), "type": "junker", "price": 20 } >
                    db.cars.update({ type: "junker" }, { $set: { available: 25 } })
                    WriteResult({ "nMatched": 1, "nUpserted": 0, "nModified": 1 }) >
                    db.cars.find() { "_id": ObjectId("5a5a36dc991dbe1aae8f7ad9"), "type": "economy", "price": 40, "available": 51 } { "_id": ObjectId("5a5a3778991dbe1aae8f7ada"), "type": "luxury", "price": 60, "available": 10 } { "_id": ObjectId("5a5a3e1e991dbe1aae8f7adc"), "type": "junker", "price": 20, "available": 25 } { "_id": ObjectId("5a5a4197991dbe1aae8f7add"), "type": "junker", "price": 20 } >
                    db.cars.find({ type: "junker", available: 25 }) { "_id": ObjectId("5a5a3e1e991dbe1aae8f7adc"), "type": "junker", "price": 20, "available": 25 } >
                    db.cars.remove({ type: "junker", price: 20 })
                    WriteResult({ "nRemoved": 2 }) >
                    db.cars.insert({ type: "junker", price: 20, available: 25 })
                    WriteResult({ "nInserted": 1 }) >
                    db.cars.find() { "_id": ObjectId("5a5a36dc991dbe1aae8f7ad9"), "type": "economy", "price": 40, "available": 51 } { "_id": ObjectId("5a5a3778991dbe1aae8f7ada"), "type": "luxury", "price": 60, "available": 10 } { "_id": ObjectId("5a5a456b991dbe1aae8f7ade"), "type": "junker", "price": 20, "available": 25 } >
