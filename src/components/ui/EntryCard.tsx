import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import React, { DragEvent } from 'react'
import { Entry } from '../../interfaces'
import { useContext } from 'react';
import { UIContext } from '../../context/ui';
import { useRouter } from 'next/router';
import { dateFunctions} from '../../utils';

interface Props {
  entry: Entry
}

export const EntryCard = ({entry}: Props) => {

  const router = useRouter();

  const {startDraggig, endDraggig} = useContext(UIContext);

  const onDragStart = ( event: DragEvent<HTMLElement> ) => {
     event.dataTransfer.setData('text', entry._id)
     startDraggig()
  }

  const onDragEnd = (  ) => {
     endDraggig()
  }

  const onClickCard = (  ) => {
     router.push(`/entries/${entry._id}`)
  }

  return (
    <Card
      sx={{ marginBottom: 1 }}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onClick={onClickCard}
    >
      <CardActionArea>

        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>{entry.description}</Typography>
        </CardContent>

        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end', paddingRight: 2 }}>
          <Typography variant='body2'>{dateFunctions.getFormatDistanceToNow(entry.createdAt)}</Typography>

        </CardActions>
      </CardActionArea>
    </Card>
  )
}
