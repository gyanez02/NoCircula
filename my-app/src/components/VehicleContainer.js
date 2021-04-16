import React, { Component } from "react";
import axios from 'axios';
import Vehicle from "./Vehicle";
import {getVehicles,saveVehicle} from '../services/requests'



/*const api = axios.create({

    baseURL: 'https://reqbin.com/echo/get/json'
})
*/

const VehicleContainer = () => {
    
    
    const handleSubmit = (data) =>{
        getVehicles(data);

    }
    
        return <Vehicle handleSubmit={handleSubmit}/>
      
    
}
export default VehicleContainer