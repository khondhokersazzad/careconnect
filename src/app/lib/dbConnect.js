const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.NEXT_MONGO_URI;
const dbName = process.env.NEXT_MONGODB_NAME;
const collections = [
  {
    PRODUCTS: "products",
    USERS: 'users',

  }
]
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// written code starts from here

export const dbConnect = async (cname) => {
  try{
    const db = client.db(dbName).collection(cname); // connect db
    return db;
  } catch(e){
    console.log(e);
  }
};