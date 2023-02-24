import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

function TipoDocumentoDropdown() {
  const [tipoDocumento, setTipoDocumento] = useState('');

  const handleChange = (event) => {
    setTipoDocumento(event.target.value);
  };

  return (
    <FormControl fullWidth margin='normal'>
      <InputLabel id="tipo-documento-label">Tipo de documento</InputLabel>
      <Select
        labelId="tipo-documento-label"
        id="tipo-documento"
        value={tipoDocumento}
        onChange={handleChange}
      >
        <MenuItem value="Carteira de Identidade">Carteira de Identidade</MenuItem>
        <MenuItem value="Carteira Nacional de Habilitação">Carteira Nacional de Habilitação</MenuItem>
        <MenuItem value="Carteira de Trabalho">Carteira de Trabalho</MenuItem>
        <MenuItem value="Carteira Profissional">Carteira Profissional</MenuItem>
        <MenuItem value="Carteira de Identificação Funcional">Carteira de Identificação Funcional</MenuItem>
        <MenuItem value="Registro Nacional de Estrangeiro">Registro Nacional de Estrangeiro</MenuItem>
        <MenuItem value="Passaporte">Passaporte</MenuItem>
      </Select>
    </FormControl>
  );
}

export default TipoDocumentoDropdown;
