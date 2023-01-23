import { createContext } from 'react';
import { Entry } from '../../interfaces';


interface ContextProps {
   entries: Entry[];
   addEntry: (description: string) => void;
   entryUpdated: (entry: Entry) => void;
}


export const EntriesContext = createContext({} as ContextProps);