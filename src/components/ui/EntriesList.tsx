import React, { useContext, useMemo, DragEvent } from 'react'
import { List, Paper } from '@mui/material'
import { EntryCard } from '.'
import { EntriesContext } from '../../context/entries'
import { EntryStatus } from '../../interfaces'
import { UIContext } from '../../context/ui'

import styles from './EntriesList.module.css';

interface Props {
  status: EntryStatus
}

export const EntriesList = ({ status }: Props) => {

  const { entries, entryUpdated } = useContext(EntriesContext);

  const {isDragging, endDraggig} = useContext(UIContext);

  const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries, status]);

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {

    const id = event.dataTransfer.getData('text');

    const entry = entries.find(entry => entry._id === id)!;
    entry.status = status;

    entryUpdated(entry);
    endDraggig()

  }

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {

    event.preventDefault()

  }

  return (
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ''}
    >
      <Paper sx={{
        height: 'calc(100vh - 250px)',
        overflow: 'scroll',
        backgroundColor: 'transparent',
        padding: '1px 5px',
      }}>
        <List sx={{
          opacity: isDragging ? 0.2 : 1,
          transition: 'all .3s'
        
        }}

        >
          {
            entriesByStatus.map(entry => (
              <EntryCard key={entry._id} entry={entry} />
            ))
          }
        </List>

      </Paper>
    </div>
  )
}
