const express = require('express');
const cors = require("cors");
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

//middleware
app.use(cors());
app.use(express.json());




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@jafardipu.hwlq4pv.mongodb.net/?retryWrites=true&w=majority&appName=jafardipu`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {    
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const roomCollection = client.db('StayBest').collection('rooms');
    const reviewCollection = client.db('StayBest').collection('reviews');
    const bookingCollection = client.db('StayBest').collection('booking');

    // room related apis
    app.get('/rooms', async(req, res)=>{
        const result = await roomCollection.find().toArray();
        res.send(result)
    })

    app.get('/rooms/:id', async(req, res)=>{
        const id = req.params.id;
        const query = {_id: new ObjectId(id)};
        const result = await roomCollection.findOne(query);
        res.send(result)
    });

    // reviews related api
    app.get('/reviews', async(req, res)=>{
      const result = await reviewCollection.find().toArray();
      res.send(result)
    });

    // booking related apis
    app.get("/books/:email", async(req,res)=>{
      const  email = req.params.email;
      const result = await bookingCollection.find().toArray();
      res.send(result);
    })
    app.post("/books", async(req, res)=>{
      const data = req.body;
      const result = await bookingCollection.insertOne(data);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req,res)=>{
    res.send("Stay Best Server is Running");
});

app.listen(port, ()=>{
    console.log("Stay Best Server Running on Port 5000")
})