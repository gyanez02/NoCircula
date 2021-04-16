import axios from 'axios'

const baseURL = 'http://webcode.me/';

export async function getVehicles(){
    try{
        const config = {
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/posts'
        }
    
        let res = await axios(config)
    
        console.log(res.data);
        return res;

    }catch(e){
        console.log(e);
    }

     
}


export async function saveVehicle(vehicleData){
    try{
        const response = await axios({
            url: baseURL,
            method: 'POST',
            data: vehicleData,
            headers: {
                'Access-Control-Allow-Origin': '*',
              },
              proxy: {
                host: '104.236.174.88',
                port: 3128
              }  
        })
        return response

    }catch(e){
        console.log(e);
    }

     
}


/*
async function makeGetRequest() {

    let payload = { name: 'John Doe', occupation: 'gardener' };

    let res = await axios.post('http://httpbin.org/post', payload);

    let data = res.data;
    console.log(data);
}

makeGetRequest();*/