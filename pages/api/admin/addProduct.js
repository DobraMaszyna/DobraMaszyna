import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("bmd_db");

  if (req.method !== "POST") {
    res.status(400).json({ error: "Bad method" });
    return;
  }

  try {
    const response = await db.collection("products").insertOne(req.body);
    res.status(200).json(response);
  } catch {
    res.status(400).json({ error: "Wrong request" });
  }
}
