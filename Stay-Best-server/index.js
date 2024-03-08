const express = require('express');
const cors = require("cors");
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

//middleware
app.use(cors({
  origin: ['http://localhost:5173', "https://stay-best-d47fc.web.app"],
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

const verify = async(req, res, next)=>{
  const token = req?.cookies?.token;
  if(!token){
    return res.status(401).send({message: "Unauthorized Access no token"});
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded)=>{
    if(err){
      return res.status(401).send({message: "Unauthorized Access"});
    }
    req.user = decoded;
    next()
  })
}




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
    // await client.connect();

    const roomCollection = client.db('StayBest').collection('rooms');
    const reviewCollection = client.db('StayBest').collection('reviews');
    const bookingCollection = client.db('StayBest').collection('booking');
    const commentCollection = client.db('StayBest').collection('comment');

    //jwt related api
    app.post("/jwt", async(req,res)=>{
      const user = req.body;
      try{
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '1h'
      });

      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: 'none'
      }).send({success: true})
    }
    catch{err=>{
     res.send(err);
    }
    }
    });

    app.post("/logOut", async(req, res)=>{
      try{
        res.clearCookie('token', {maxAge: 0}).send({message: "success"});
      }
      catch{err=>{
        res.send(err);
      }}
    })

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

    app.post("/comment", async(req, res)=>{
      const comment = req.body;
      const result = await commentCollection.insertOne(comment);
      res.send(result);
    })

    // booking related apis
    app.get("/books/:email", verify, async(req,res)=>{
      try{
      const  email = req.params.email;
      const userEmail = req?.user?.email;
      if(email !== userEmail){
        return res.status(403).send({message: 'forbidden'})
      }

      const query = {email: email}
      const result = await bookingCollection.find(query).toArray();
      res.send(result);
    }

    catch{err=>
        res.send(err);
    }
    })

    app.post("/books",  async(req, res)=>{
      const data = req.body;
      const result = await bookingCollection.insertOne(data);
      res.send(result);
    });

    app.put("/books/:id", async(req, res)=>{
      try{
      const id = req?.params?.id;
      const data = req?.body;
      const filter = {_id : new ObjectId(id)}
      const options = { upsert: true };
      const updateData = {
        $set: {
          startDate: data?.startDate,
          endDate: data?.endDate,
          totalPrice: data?.totalPrice,
        }
      }

      const result = await bookingCollection.updateOne(filter, updateData, options);

      res.send(result);
    }

    catch{err=>{
      console.log(err)
    }}
  })

    app.delete("/books/:id", async(req,res)=>{
      const id = req?.params?.id;
      const filter = {_id: new ObjectId(id)}
      const result = await bookingCollection.deleteOne(filter);
      res.send(result)
    })

    //comment related
    app.get("/comment/:id", async(req, res)=>{
      try{
        const id = req?.params?.id;
        const filter = {roomId: id} 
        const result = await commentCollection.find(filter).toArray();
        res.send(result);
      }
      catch{err=>{
        res.send(err)
      }

      }
    })

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");
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