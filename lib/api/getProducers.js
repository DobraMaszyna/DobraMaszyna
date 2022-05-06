import clientPromise from '../mongodb';

export default async () => {
  const client = await clientPromise;
  const db = await client.db('bmd_db');

  const producers = await db.collection('producers');
  const data = await producers.find({}).toArray();

  return JSON.parse(JSON.stringify(data));
};
