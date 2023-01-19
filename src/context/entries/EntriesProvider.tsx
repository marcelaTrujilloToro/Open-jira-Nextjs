import { FC, useReducer } from 'react';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';
import { v4 as uuidv4 } from 'uuid';

export interface EntriesState {
  entries: Entry[];
}


const EntriesInitialState: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: 'Pendiente Anim elit mollit qui enim ipsum eu. Deserunt fugiat nulla proident velit ea et occaecat aliquip nulla et ad minim Lorem et.',
      status: 'pending',
      createdAt: Date.now()
    },
    {
      _id: uuidv4(),
      description: 'Progreso Exercitation nisi in non in.',
      status: 'in-progress',
      createdAt: Date.now() - 1000000
    },
    {
      _id: uuidv4(),
      description: 'Terminada Sint pariatur ea fugiat do officia in consectetur dolor occaecat duis.',
      status: 'finished',
      createdAt: Date.now() - 100000
    }
  ],
}


export const EntriesProvider = ({ children }: any) => {

  const [state, dispatch] = useReducer(entriesReducer, EntriesInitialState);

  const addEntry = ( description: string ) => {

     const newEntry: Entry = {
       _id: uuidv4(),
       description,
       createdAt: Date.now(),
       status: 'pending'
     }

     dispatch({type: '[Entry] Add-Entry', payload: newEntry})
  }

  return (
    <EntriesContext.Provider value={{
      ...state,
      addEntry
    }}>
      {children}
    </EntriesContext.Provider>
  )
};
