import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  TextField,
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { addWine } from '../../api';

const ButtonSpinner = styled(CircularProgress)`
  /* xD driven development */
  position: absolute;
  right: 52px;
`;

interface AddWineProps {
  open: boolean;
  onClose: () => void;
  refetchWine: () => Promise<void>;
}

export const AddWine = ({ open, onClose, refetchWine }: AddWineProps) => {
  const { register, handleSubmit } = useForm();

  const [loading, setLoading] = useState(false);

  const [brand, setBrand] = useState('białe');
  const [flavor, setFlavor] = useState('wytrawne');

  const handleBrandChange = (event: ChangeEvent<{ value: string }>) => {
    setBrand(event.target.value);
  };
  const handleFlavorChange = (event: ChangeEvent<{ value: string }>) => {
    setFlavor(event.target.value);
  };

  const onSubmit = async (data: { [x: string]: any }) => {
    const { name, price } = data;
    setLoading(true);
    try {
      await addWine({ name, brand, flavor, price });
      await refetchWine();
      setLoading(false);
      onClose();
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Dodaj wino</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            inputRef={register}
            name="name"
            variant="outlined"
            margin="normal"
            id="name"
            label="Nazwa wina"
            fullWidth
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            id="brand"
            value={brand}
            label="Gatunek"
            onChange={handleBrandChange}
            fullWidth
            select
          >
            <MenuItem value="białe">białe</MenuItem>
            <MenuItem value="czerwone">czerwone</MenuItem>
            <MenuItem value="różowe">różowe</MenuItem>
          </TextField>
          <TextField
            variant="outlined"
            margin="normal"
            id="flavor"
            value={flavor}
            label="Smak"
            onChange={handleFlavorChange}
            fullWidth
            select
          >
            <MenuItem value="wytrawne">wytrawne</MenuItem>
            <MenuItem value="słodkie">słodkie</MenuItem>
            <MenuItem value="półsłodkie">półsłodkie</MenuItem>
          </TextField>
          <TextField
            inputRef={register}
            name="price"
            variant="outlined"
            margin="normal"
            id="price"
            label="Cena"
            type="number"
            fullWidth
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="default">
          Anuluj
        </Button>
        <Button onClick={handleSubmit(onSubmit)} color="primary" disabled={loading}>
          Dodaj wino
        </Button>
        {loading && <ButtonSpinner size={24} />}
      </DialogActions>
    </Dialog>
  );
};
