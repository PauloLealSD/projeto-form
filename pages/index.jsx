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
import { NationalitySelect } from "../components/nationalityType";
import SexoDropdown from "../components/SexoDropdown";
import TipoDocumentoDropdown from "../components/documentTypeDropdown";
import EstadoDropdown from "../components/estadosBrasileirosSelect";

import cepForm from "../components/cepComponent";

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
  const [isExterior, setIsExterior] = useState(false);
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

  //handleExteriorChange

  const handleExteriorChange = (event) => {
    setIsExterior(event.target.checked);
  };


  const handleChange = (event) => {
    setIsBloqueado(event.target.checked);
  };

 

  return (
    <div className={classes.root}>
      <div className={classes.outlinedBox}>
        <form>
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
                label="Profiss??o"
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
              <FormControl fullWidth margin="normal">
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
                  <MenuItem value={"Vi??vo"}>Vi??vo</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={10}>
              <TextField
                label="Nome do c??njuge/companheiro"
                type="text"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={3}>
              <TextField
                label="CPF do c??njuge/companheiro"
                type="text"
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item xs={7}>
              <FormControl fullWidth margin="normal">
                <InputLabel id="property-regime-select-label">
                  Regime de bens
                </InputLabel>
                <Select
                  labelId="property-regime-select-label"
                  id="property-regime-select"
                  value={propertyRegime}
                  onChange={handlePropertyRegimeChange}
                >
                  <MenuItem value={"Comunh??o parcial de bens"}>
                    Comunh??o parcial de bens
                  </MenuItem>
                  <MenuItem value={"Comunh??o universal de bens"}>
                    Comunh??o universal de bens
                  </MenuItem>
                  <MenuItem value={"Separa????o total de bens"}>
                    Separa????o total de bens
                  </MenuItem>
                  <MenuItem value={"Separa????o obrigat??ria de bens"}>
                    Separa????o obrigat??ria de bens
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={2}></Grid>
            <Grid item xs={5}>
              <TextField
                label="Nome da m??e"
                type="text"
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                label="Nome do pai"
                type="text"
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={5}>
              <TextField
                label="N??mero da CNH"
                type="text"
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                label="Categoria da CNH"
                type="text"
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={5}>
              <TextField
                label="Data da primeira habilita????o (DD/MM/AAAA)"
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
              <TextField
                label="Observa????o"
                type="textbox"
                fullWidth
                margin="normal"
              />
            </Grid>

            <Grid item xs={2}></Grid>
            <Grid item xs={5}>
              <FormControl fullWidth>
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
                  <MenuItem value={"N??o"}>N??o</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={5}>
              <FormControl fullWidth>
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
                  <MenuItem value={"N??o"}>N??o</MenuItem>
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
                label="N??mero da ficha"
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
                    checked={isExterior}
                    onChange={handleExteriorChange}
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

            <Grid item xs={2}></Grid>
            <Grid item xs={5}>
              <NationalitySelect />
            </Grid>

            <Grid item xs={5}>
              <FormControl fullWidth margin="normal">
                <InputLabel id="nationalities-select-label">
                  Pa??s de Origem
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
                Documento de Identifica????o
              </Typography>
              <Divider />
            </Grid>

            <Grid item xs={2}></Grid>
            <Grid item xs={5}>
            <TipoDocumentoDropdown />
            </Grid>
            <Grid item xs={5}>
            <TextField
                label="N??mero do documento"
                type="text"
                fullWidth
                margin="normal"
              />
            </Grid>

            <Grid item xs={2}></Grid>
            <Grid item xs={3}>
            <TextField
                label="Emissor do documento"
                type="text"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={3}>
                <EstadoDropdown />
            </Grid>
            <Grid item xs={4}>
            <TextField
                label="Data de emiss??o do documento"
                type="date"
                margin="normal"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                  focused: false,
                }}
               // formatos de datas experimentais
               // inputProps={{
               //  inputProps: {
               //     hidden: true,
               //   },
               //   min: "1900-01-01",
               //   max: "2100-12-31",
               //   //style: { fontSize: 14 },
               //   pattern: "\\d{4}-\\d{2}-\\d{2}",
               // }}
              />
            </Grid>

            <Grid item xs={2}></Grid>
            <Grid item xs={10}>
              <Typography variant="h5" color="primary">
                Naturalidade
              </Typography>
              <Divider />
            </Grid>

            <Grid item xs={2}></Grid>
            <Grid item xs={6}>
              <TextField
                label="Munic??pio"
                type="textbox"
                fullWidth
                margin="normal"
              />
            </Grid>

            <Grid item xs={2}>
              <TextField
                label="UF"
                type="textbox"
                fullWidth
                margin="normal"
              />
            </Grid>

            <Grid item xs={2}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="cidadeNoExterior"
                    checked={isExterior}
                    onChange={handleExteriorChange}
                  />
                }
                label="Cidade no exterior"
              />
            </Grid>

            <Grid item xs={2}></Grid>
            <Grid item xs={10}>
              <Typography variant="h5" color="primary">
                Endere??o Residencial
              </Typography>
              <Divider />
            </Grid>

                {/*
                ?? brincadeira viu
              */}
              <cepForm></cepForm>

            <Grid item xs={2}></Grid>
            <Grid item xs={10}>
              <Typography variant="h5" color="primary">
                Endere??o Profissional
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
                Documenta????o
              </Typography>
              <Divider />
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default Form;
