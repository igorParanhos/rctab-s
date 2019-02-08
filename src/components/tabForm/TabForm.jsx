import React from 'react';
import PropTypes from 'prop-types'

import './TabForm.scss';
import { Typography, withStyles, FormControlLabel, FormLabel, FormControl, RadioGroup, Radio, Grid, Button } from '@material-ui/core';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2,
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  button: {
    marginTop: theme.spacing.unit / 2,
    marginBottom: theme.spacing.unit / 2
  },
  vehiclesGrid: {
    padding: theme.spacing.unit
  },
  vehicleGridItem: {
    padding: theme.spacing.unit / 3
  }
});

const TabForm = props => {
  const { classes } = props;

  return (
    <div>
      <Grid container>
      
        <Grid item xs={6} sm={3}>
          <FormControl className={classes.formControl}>
            <FormLabel component="legend">Tipo de Veículo</FormLabel>
            <RadioGroup
              aria-label="Vehicle Type"
              name="vehicle-type"
              className={classes.group}
              value={props.selectedvehicleType}
              onChange={props.selectVehicleType}
            >
            
              <FormControlLabel value="car" labelPlacement="start" control={<Radio />} label="Carro" />
              <FormControlLabel value="truck" labelPlacement="start" control={<Radio />} label="Caminhão" />
              <FormControlLabel value="bus" labelPlacement="start" control={<Radio />} label="Ônibus" />
              <FormControlLabel value="motorcycle" labelPlacement="start" control={<Radio />} label="Moto" />
              
            </RadioGroup>
          </FormControl>        
        </Grid>
        
        <Grid item xs={6} sm={3}>
          <Grid container>
            <Grid item xs={12} className={classes.vehiclesGrid}>

              {
                (props.vehicles[props.selectedVehicleType] || []).map(
                  category => <>
                    <Typography align="center" variant="caption" key={category.title}>{category.title}</Typography>

                    <Grid container>
                      {
                        category.types.map(
                          (vehicle, i, all) => (
                            <Grid item xs={vehicle.name.length > 8 ? 12 : all.length === 1 ? 12 : all.length === 2 ? 6 : 6} className={classes.vehicleGridItem} key={vehicle.code} >
                              <Button fullWidth variant="outlined" className={classes.button}> {vehicle.name} </Button>
                            </Grid>
                          )
                        )
                      }
                    </Grid>

                  </>
                )
              }
            
            </Grid>
          </Grid>
        </Grid>
      
      </Grid>

    </div>
  );
};


TabForm.defaultProps = { }

TabForm.propTypes = { 
  vehicles: PropTypes.object
}

export default withStyles(styles)(TabForm);
