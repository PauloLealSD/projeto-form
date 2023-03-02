import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';

const CepForm = () => {
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [municipio, setMunicipio] = useState('');
  const [uf, setUf] = useState('');

  const handleCepChange = (event) => {
    setCep(event.target.value);
  };

  const handleSearchClick = () => {
    axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => {
        setLogradouro(response.data.logradouro);
        setNumero(response.data.numero);
        setComplemento(response.data.complemento);
        setBairro(response.data.bairro);
        setMunicipio(response.data.localidade);
        setUf(response.data.uf);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <InputMask mask="99999-999" value={cep} onChange={handleCepChange}>
        {(inputProps) => (
          <TextField
            {...inputProps}
            label="CEP"
            variant="outlined"
            margin="normal"
          />
        )}
      </InputMask>
      <Button variant="contained" color="primary" onClick={handleSearchClick}>
        Buscar
      </Button>
      <TextField
        label="Logradouro"
        variant="outlined"
        margin="normal"
        value={logradouro}
        disabled={!logradouro}
      />
      <TextField
        label="Número"
        variant="outlined"
        margin="normal"
        value={numero}
        disabled={!numero}
      />
      <TextField
        label="Complemento"
        variant="outlined"
        margin="normal"
        value={complemento}
        disabled={!complemento}
      />
      <TextField
        label="Bairro"
        variant="outlined"
        margin="normal"
        value={bairro}
        disabled={!bairro}
      />
      <TextField
        label="Município"
        variant="outlined"
        margin="normal"
        value={municipio}
        disabled={!municipio}
      />
      <TextField
        label="UF"
        variant="outlined"
        margin="normal"
        value={uf}
        disabled={!uf}
      />
    </div>
  );
};

export default CepForm;
