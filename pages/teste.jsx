import React from 'react';
import { Grid, TextField, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  outlinedBox: {
    background: '#fff',
    borderRadius: '4px',
    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.2)',
    padding: theme.spacing(3),
    margin: theme.spacing(3),
  },
}));

const options = [
  {
    value: 'Option 1',
    label: 'Option 1',
  },
  {
    value: 'Option 2',
    label: 'Option 2',
  },
  {
    value: 'Option 3',
    label: 'Option 3',
  },
];

function MyForm() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.outlinedBox}>
        <Grid container spacing={3}>
          <Grid item xs={2}></Grid>
          <Grid item xs={3}>
            <TextField
              select
              label="Dropdown"
              fullWidth
              size="small"
            >
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={7}>
            <TextField
              label="Text field"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={5}>
            <TextField
              label="Text field"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              label="Text field"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={5}>
            <TextField
              label="Text field"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              label="Text field"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
            <TextField
              label="Text field"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
            <TextField
              label="Text field"
              fullWidth
              size="small"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default MyForm;
