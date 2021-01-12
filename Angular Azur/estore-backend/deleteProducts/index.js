const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;

module.exports = async function (context, req) {
 
    const URL = process.env.MONGODB_URL;
    const DATABASE_NAME = process.env.MONGODB_DATABASE_NAME;
    const COLLECTION_NAME = process.env.MONGODB_COLLECTION_NAME;

    const connection = await MongoClient.connect(URL);
    const productsCollection = connection.db(DATABASE_NAME).collection(COLLECTION_NAME);

    const result = await productsCollection.deleteOne(
        {_id:ObjectId(req.params.id)}
        //req.body
    )

    await connection.close();

    return  {

        body:'{"message:Deleted Successfuly"}'

    };

}