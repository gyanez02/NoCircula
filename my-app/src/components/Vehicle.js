import React, {useState, useEffect, useRef} from "react";
import { Button, Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiFormControl-root': {
        margin: theme.spacing(1),
        width: '80%',
      },
    },
  }));


/*class Vehicle extends Component{

    constructor(){
        super();
        api.get('/').then(res =>{
            console.log(res.data)
        })
    }
}*/


const initialVehicleValues = {
    placa: 0,
    color: '',
    model: '',
    chasis: '',
}

const Vehicle = ({handleSubmit})=>{
    const classes = useStyles();

    const [values, setValues] = useState(initialVehicleValues);
    const [selectedDate, setSelectedDate] = useState(new Date());

   

    const _handleSubmit = (e) =>{
        e.preventDefault();
        console.log(values);
        console.log(selectedDate);
        handleSubmit({...values,selectedDate});

    }

    const handleChange = (e) =>{
        const {name,value} = e.target
        setValues({...values, [name]: value})
    }

    const handleDateChange = (date) => {
        setSelectedDate(date);
      };

    return (

        <div>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={_handleSubmit} >
                <Grid container>

                    <Grid item xs={6}><TextField  name="placa" label="Ultimos 4 digitos de la placa" variant="outlined" type="number" value={values.placa} onChange={handleChange}/></Grid>
                    <Grid item xs={6}><TextField  name="color" label="Color" variant="outlined" value={values.color} onChange={handleChange}/></Grid>
                    <Grid item xs={6}><TextField  name="model" label="Model" variant="outlined" value={values.model} onChange={handleChange}/></Grid>
                    
                    <Grid item xs={6}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                        name="date"
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date to Validate"
                        value={selectedDate}
                        onChange={handleDateChange}
                       
                    />
                    </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={6}><TextField  name="chasis" label="Chasis" variant="outlined" value={values.chasis} onChange={handleChange}/></Grid>
                    <Grid item xs={6}><Button variant="contained" color="primary" type="submit">Validate</Button></Grid>
                
                </Grid>
        
    </form>
           

        </div>
    );
}

export default Vehicle;