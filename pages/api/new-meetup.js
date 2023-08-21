import { MongoClient } from "mongodb";

// api/new-meetup

async function Handler(req, res) {
  
  try {
    if (req.method === "POST") {
      
      const data = req.body;

      const client = await MongoClient.connect(
        "mongodb+srv://muzaahmadk:ACYPzJ3PRJnKqJlR@cluster0.kqliaer.mongodb.net/meetups?retryWrites=true&w=majority"
      );
      const db = client.db();

      const meetupsCollection = db.collection("meetups");

      const result = await meetupsCollection.insertOne(data);
      
      console.log(result);
      client.close();

      res.status(200).json({ message: "Meetup Inserted!!" });
    }
  } catch (error) {
    res.status(400).json({ message: "error!!" });
  }
}
export default Handler;
