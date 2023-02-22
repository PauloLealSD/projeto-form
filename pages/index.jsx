import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  FormControlLabel,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Typography,
  Divider,
  Checkbox,
} from "@material-ui/core";

import { nationalityList } from "../components/nationalities";
import SexoDropdown from "../components/SexoDropdown";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  outlinedBox: {
    background: "#fff",
    borderRadius: "2px",
    boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.4)",
    padding: theme.spacing(3),
    margin: theme.spacing(3),
  },
}));

const Form = () => {
  const classes = useStyles();
  const [civilStatus, setCivilStatus] = useState("");
  const [propertyRegime, setPropertyRegime] = useState("");
  const [politicallyExposed, setPoliticallyExposed] = useState("");
  const [investigatedForTerrorism, setInvestigatedForTerrorism] = useState("");
  const [isBloqueado, setIsBloqueado] = useState(false);
  const [nationality, setNationality] = useState("");

  const handleNationalityChange = (event) => {
    setNationality(event.target.value);
  };

  const handleCivilStatusChange = (event) => {
    setCivilStatus(event.target.value);
  };

  const handlePropertyRegimeChange = (event) => {
    setPropertyRegime(event.target.value);
  };

  const handlePoliticallyExposedChange = (event) => {
    setPoliticallyExposed(event.target.value);
  };

  const handleInvestigatedForTerrorismChange = (event) => {
    setInvestigatedForTerrorism(event.target.value);
  };

  const handleChange = (event) => {
    setIsBloqueado(event.target.checked);
  };

  const handleNationalitiesChange = (event) => {
    setCivilStatus(event.target.value);
  };

  return (
    <div className={classes.root}>
      <div className={classes.outlinedBox}>
        {/*<form> */}
        <Divider />
        <Grid container spacing={3}>
          <Grid item xs={2}></Grid>
          <Grid item xs={3}>
            <TextField
              required
              label="CPF"
              type="text"
              fullWidth
              placeholder="000.000.000-00"
              margin="normal"
            />
          </Grid>
          <Grid item xs={7}>
            <TextField
              label="E-mail"
              type="email"
              fullWidth
              placeholder="exemplo@email.com"
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
            <TextField
              required
              label="Nome"
              type="text"
              placeholder="Nome completo"
              fullWidth
              margin="normal"
            />
          </Grid>

          <Grid item xs={2}></Grid>
          <Grid item xs={3}>
            <SexoDropdown />
          </Grid>

          <Grid item xs={7}>
            <TextField
              label="Profissão"
              type="text"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={3}>
            <TextField
              label="Data de Nascimento (DD/MM/AAAA)"
              type="text"
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={7}>
            <FormControl fullWidth className={classes.formControl} margin="normal">
              <InputLabel id="civil-status-select-label">
                Estado Civil
              </InputLabel>
              <Select
                labelId="civil-status-select-label"
                id="civil-status-select"
                value={civilStatus}
                onChange={handleCivilStatusChange}
              >
                <MenuItem value={"Solteiro"}>Solteiro</MenuItem>
                <MenuItem value={"Casado"}>Casado</MenuItem>
                <MenuItem value={"Separado"}>Separado</MenuItem>
                <MenuItem value={"Divorciado"}>Divorciado</MenuItem>
                <MenuItem value={"Viúvo"}>Viúvo</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
          <TextField
            label="Nome do cônjuge/companheiro"
            type="text"
            fullWidth
            margin="normal"
          />
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={3}>
          <TextField
            label="CPF do cônjuge/companheiro"
            type="text"
            margin="normal"
            fullWidth
          />
          </Grid>
          <Grid item xs={7}>
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel id="property-regime-select-label">
              Regime de bens
            </InputLabel>
            <Select
              
              labelId="property-regime-select-label"
              id="property-regime-select"
              value={propertyRegime}
              onChange={handlePropertyRegimeChange}
            >
              <MenuItem value={"Comunhão parcial de bens"}>
                Comunhão parcial de bens
              </MenuItem>
              <MenuItem value={"Comunhão universal de bens"}>
                Comunhão universal de bens
              </MenuItem>
              <MenuItem value={"Separação total de bens"}>
                Separação total de bens
              </MenuItem>
              <MenuItem value={"Separação obrigatória de bens"}>
                Separação obrigatória de bens
              </MenuItem>
            </Select>
          </FormControl>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={5}>
          <TextField label="Nome da mãe" type="text" margin="normal" fullWidth/>
          </Grid>
          <Grid item xs={5}>
          <TextField label="Nome do pai" type="text" margin="normal" fullWidth/>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={5}>
          <TextField label="Número da CNH" type="text" margin="normal" fullWidth/>
          </Grid>
          <Grid item xs={5}>
          <TextField label="Categoria da CNH" type="text" margin="normal" fullWidth/>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={5}>
          <TextField
            label="Data da primeira habilitação (DD/MM/AAAA)"
            type="text"
            margin="normal"
            fullWidth
          />
          </Grid>
          <Grid item xs={5}>
          <TextField
            label="Data de validade (DD/MM/AAAA)"
            type="text"
            margin="normal"
            fullWidth
          />
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
          <TextField label="Observação" type="textbox" fullWidth margin="normal" />
          </Grid>

          <Grid item xs={2}></Grid>
          <Grid item xs={5}>
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel id="politicallyExposedChange-select-label">
              Pessoa politicamente exposta
            </InputLabel>
            <Select
              labelId="PoliticallyExposedChange-select-label"
              id="PoliticallyExposed-select"
              value={politicallyExposed}
              onChange={handlePoliticallyExposedChange}
            >
              <MenuItem value={"Sim"}>Sim</MenuItem>
              <MenuItem value={"Não"}>Não</MenuItem>
            </Select>
          </FormControl>
          </Grid>
          <Grid item xs={5}>
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel id="investigatedForTerrorism-select-label">
              Pessoa investigada por terrorismo
            </InputLabel>
            <Select
              labelId="InvestigatedForTerrorism-select-label"
              id="InvestigatedForTerrorism-select"
              value={investigatedForTerrorism}
              onChange={handleInvestigatedForTerrorismChange}
            >
              <MenuItem value={"Sim"}>Sim</MenuItem>
              <MenuItem value={"Não"}>Não</MenuItem>
            </Select>
          </FormControl>
          </Grid>


          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
          <Typography variant="h5" color="primary">
            Ficha
          </Typography>
          <Divider />
          </Grid>

          <Grid item xs={2}></Grid>
          <Grid item xs={5}>
          <TextField
            label="Data da ficha (DD/MM/AAAA)"
            type="text"
            placeholder="Nome completo"
            margin="normal"
            fullWidth
          />
          </Grid>
          <Grid item xs={5}>
          <TextField
            label="Número da ficha"
            type="text"
            placeholder="000000"
            margin="normal"
            fullWidth
          />
          </Grid>

          
          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
          <FormControlLabel
            control={
              <Checkbox
                name="bloquearCadastro"
                checked={isBloqueado}
                onChange={handleChange}
              />
            }
            label="Bloquear Cadastro"
          />
          </Grid>



          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
            <Typography variant="h5" color="primary">
              Nacionalidade
            </Typography>
            <Divider />
          </Grid>

          {/*  IF I AM GOING TO USE THE COUTRIES AND REGIONS I HAVE AND NOT AN API - RESOLVE THIS
         <div>
            <NationalityDropdown>
              <InputLabel id="nationalities-select-label">Nacionalidade</InputLabel>

            </NationalityDropdown>
          </div> 
          */}

          <Grid item xs={2}></Grid>
          <Grid item xs={5}>
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel id="nationalities-select-label">
              Nacionalidade
            </InputLabel>
            <Select
              labelId="nationalities-select-label"
              id="civil-status-select"
              value={civilStatus}
              onChange={handleNationalitiesChange}
            >
              <MenuItem value={"Brasileiro nato"}>Brasileiro nato</MenuItem>
              <MenuItem value={"Estrangeiro"}>Estrangeiro</MenuItem>
              <MenuItem value={"Brasileiro naturalizado"}>
                Brasileiro naturalizado
              </MenuItem>
            </Select>
          </FormControl>
          </Grid>
          
          <Grid item xs={5}>
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel id="nationalities-select-label">
              País de Origem
            </InputLabel>
            <Select value={nationality} onChange={handleNationalityChange}>
              {nationalityList.map((nationality) => (
                <MenuItem key={nationality.code} value={nationality.code}>
                  {nationality.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          </Grid>

          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
          <Typography variant="h5" color="primary">
            Documento de Identificação
          </Typography>
          <Divider />
          </Grid>

          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
          <Typography variant="h5" color="primary">
            Naturalidade
          </Typography>
          <Divider />
          </Grid>

          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
          <Typography variant="h5" color="primary">
            Endereço Residencial
          </Typography>
          <Divider />
          </Grid>

          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
          <Typography variant="h5" color="primary">
            Endereço Profissional
          </Typography>
          <Divider />
          </Grid>

          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
          <Typography variant="h5" color="primary">
            Telefones de Contato
          </Typography>
          <Divider />
          </Grid>

          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
          <Typography variant="h5" color="primary">
            Documentação
          </Typography>
          <Divider />
          </Grid>

          {/*</form> */}
        </Grid>
      </div>
    </div>
  );
};

export default Form;
