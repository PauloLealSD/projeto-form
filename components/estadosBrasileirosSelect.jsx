import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import estados from './estados.json';

function EstadoDropdown() {
  const [estado, setEstado] = useState('');

  const handleChange = (event) => {
    setEstado(event.target.value);
  };

  return (
    <FormControl fullWidth margin='normal'>
      <InputLabel id="estado-label">Estado</InputLabel>
      <Select
        labelId="estado-label"
        id="estado"
        value={estado}
        onChange={handleChange}
      >
        {estados.map((estado) => (
          <MenuItem key={estado.sigla} value={estado.sigla}>
            {estado.nome}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default EstadoDropdown;
