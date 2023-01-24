import type { NextApiRequest, NextApiResponse } from 'next'
import { db, seedData } from '../../database'
import { Entry } from '../../models';

type Data = {
  message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  if( process.env.NODE_ENV === 'production'){
    return res.status(401).json({message: 'No tiene acceso a este servicio'})
  }
  
  // interacciones con la BD entre el connect y disconnect
  await db.connect();


  // si no se pone ninguna condición se borrara TODO lo que hay en la colección
  await Entry.deleteMany()

  // llenar la BD
  await Entry.insertMany(seedData.entries)

  await db.disconnect();


  res.status(200).json({ message: 'Proceso realizado correctamente' })
}