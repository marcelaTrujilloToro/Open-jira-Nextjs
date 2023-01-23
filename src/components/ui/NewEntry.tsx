import React, { ChangeEvent, useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { useContext } from 'react';
import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui';

export const NewEntry = () => {

  const { addEntry } = useContext(EntriesContext);

  const {isAddingEntry, setIsAddingEntry} = useContext(UIContext)

  const [inputValue, setInputValue] = useState('');

  const [touched, setTouched] = useState(false);


  const onTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const onSave = () => {

    if (inputValue.length === 0) return;

    addEntry(inputValue);

    setIsAddingEntry(false);
    setTouched(false);
    setInputValue('');
  }

  return (
    <Box
      sx={{
        marginBottom: 2,
        paddingX: 2
      }}
    >
      {
        isAddingEntry
          ?
          (
            <>
              <TextField
                fullWidth
                sx={{
                  marginTop: 2,
                  marginBottom: 2
                }}
                placeholder='Nueva entrada'
                autoFocus
                multiline
                label='Nueva entrada'
                helperText={(inputValue.length <= 0 && touched) && 'Ingrese su entrada'}
                error={inputValue.length <= 0 && touched}
                value={inputValue}
                onChange={onTextFieldChange}
                onBlur={() => setTouched(true)}
              />

              <Box
                display='flex'
                justifyContent='space-between'
                paddingX={5}
              >
                <Button variant='outlined' color='error' endIcon={<SaveRoundedIcon />} onClick={() => setIsAddingEntry(false)}>
                  Cancelar
                </Button>

                <Button variant='outlined' color='secondary' endIcon={<SaveRoundedIcon />} onClick={onSave}>
                  Guardar
                </Button>

              </Box>
            </>
          )
          :
          (
            <Button
              startIcon={<AddCircleOutlineRoundedIcon />}
              fullWidth
              variant='outlined'
              onClick={() => setIsAddingEntry(true)}
            >
              Agregar tarea
            </Button>
          )
      }
    </Box>
  )
}
