import React from 'react';
import { Grid, TextField, FormControl, Select, MenuItem } from '@material-ui/core';

const Form = () => {
  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <TextField
              required
              id="cpf"
              label="CPF"
              placeholder="000.000.000-00"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <TextField
              id="email"
              label="E-mail"
              placeholder="exemplo@email.com"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              required
              id="nome"
              label="Nome"
              placeholder="Seu nome"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <Select placeholder="Sexo">
              <MenuItem value="masculino">Masculino</MenuItem>
              <MenuItem value="feminino">Feminino</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <TextField
              id="profissão"
              label="Profissão"
              placeholder="Sua profissão"
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <TextField
              id="data_de_nascimento"
              label="Data de nascimento (DD/MM/AAAA)"
              placeholder="Data de nascimento"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <Select placeholder="Estado civil">
              <MenuItem value="solteiro">Solteiro</MenuItem>
              <MenuItem value="casado">Casado</MenuItem>
              <MenuItem value="separado">Separado</MenuItem>
              <MenuItem value="divorciado">Divorciado</MenuItem>
              <MenuItem value="viúvo">Viúvo</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
