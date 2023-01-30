import { isValidObjectId } from 'mongoose';
import { db } from '.';
import { Entry, IEntry } from '../models';

export const getEntryById = async( id: string ): Promise<IEntry | null> => {

   if(!isValidObjectId(id)) return null;

   await db.connect();
   const entry = await Entry.findById(id).lean(); /* cuando se va a trabajar con mucha menos informacion, lo minimo necesario para trabajar */
   await db.disconnect();

   return JSON.parse(JSON.stringify(entry));

}