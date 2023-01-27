import { FC, useEffect, useReducer } from 'react';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';
// import { v4 as uuidv4 } from 'uuid';
import { entriesApi } from '../../../apis';

export interface EntriesState {
  entries: Entry[];
}


const EntriesInitialState: EntriesState = {
  entries: [],
}


export const EntriesProvider = ({ children }: any) => {

  const [state, dispatch] = useReducer(entriesReducer, EntriesInitialState);

  const addEntry = async (description: string) => {

    // creando la entrada desde el Frontend
    //  const newEntry: Entry = {
    //    _id: uuidv4(),
    //    description,
    //    createdAt: Date.now(),
    //    status: 'pending'
    //  }

    // creando la entrada desde el server

    const { data } = await entriesApi.post<Entry>('/entries', { description });
    dispatch({ type: '[Entry] Add-Entry', payload: data });

  }

  const entryUpdated = async (entry: Entry) => {
    try {

      const { data } = await entriesApi.put<Entry>(`/entries/${entry._id}`, { description: entry.description, status: entry.status });

      dispatch({ type: '[Entry] Entry-Updated', payload: data });

    } catch (error) {
      console.log({ error });
    }
  }

  const refreshEntries = async () => {

    const { data } = await entriesApi.get<Entry[]>('/entries')
    dispatch({ type: '[Entry] Initial-data', payload: data })
  }

  useEffect(() => {
    refreshEntries()
  }, [])


  return (
    <EntriesContext.Provider value={{
      ...state,
      addEntry,
      entryUpdated
    }}>
      {children}
    </EntriesContext.Provider>
  )
};
