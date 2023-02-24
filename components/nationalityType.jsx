import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

export function NationalitySelect(props) {
  const { nationality, onNationalityChange } = props;

  return (
    <FormControl fullWidth margin="normal">
      <InputLabel id="nationalities-select-label">Nacionalidade</InputLabel>
      <Select
        labelId="nationalities-select-label"
        id="nationalities-select"
        value={nationality}
        onChange={onNationalityChange}
      >
        <MenuItem value={"Brasileiro nato"}>Brasileiro nato</MenuItem>
        <MenuItem value={"Estrangeiro"}>Estrangeiro</MenuItem>
        <MenuItem value={"Brasileiro naturalizado"}>Brasileiro naturalizado</MenuItem>
      </Select>
    </FormControl>
  );
}

//export default NationalitySelect;
