import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
//import { Person } from "@material-ui/icons";

const SexoDropdown = () => {
  const [sexo, setSexo] = React.useState("");

  const handleChange = (event) => {
    setSexo(event.target.value);
  };

  return (
    <FormControl fullWidth margin="normal">
      <InputLabel id="sexo-label">
         Sexo
      </InputLabel>
      <Select
        select
        labelId="sexo-label"
        id="sexo"
        value={sexo}
        onChange={handleChange}
        label="Sexo"
      >
        <MenuItem value="Masculino">Masculino</MenuItem>
        <MenuItem value="Feminino">Feminino</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SexoDropdown;
