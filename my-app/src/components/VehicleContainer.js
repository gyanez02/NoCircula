import { Component } from "react";
import axios from 'axios';
import Vehicle from "./Vehicle";

const api = axios.create({

    baseURL: 'https://reqbin.com/echo/get/json'
})


class VehicleContainer extends Component{
    constructor(){
        super();
        api.get('/').then(res =>{
            console.log(res.data)
        })
    }

    render(){
        return <Vehicle/>
    }
}
export default VehicleContainer