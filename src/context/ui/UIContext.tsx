import { createContext } from 'react';


interface ContextProps {
    sidemenuOpen: boolean;
    isAddingEntry: boolean;
    isDragging: boolean;

    // Methods
    closeSideMenu: () => void;
    openSideMenu: () => void;
    
    setIsAddingEntry:  (isAdding: boolean) => void;

    startDraggig: () => void;
    endDraggig: () => void;
}


export const UIContext = createContext({} as ContextProps );

