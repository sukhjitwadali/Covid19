import axios from 'axios'


const url =  'https://api.covid19api.com'

const headers = {
    
  }
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))


export const fetchData = async (country)=>{
    let new_url;
    console.log("country name" + country)
    if (country != undefined){
    new_url = 'https://covid19.mathdro.id/api/countries/' + country
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(new_url);
    return { confirmed, recovered, deaths, lastUpdate };
    }
    else {
    new_url = url + '/summary'
    try {
        // await sleep(1000);
        const data  = await axios.get(new_url,headers)
        return data
    } catch (error) {
        console.log(error)
        
        }
    }


  
}

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`https://covid19.mathdro.id/api/daily`); 
    
    return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
    
  } catch (error) {
    return error;
  }
};


export const  fetchCountries = async () =>{
    try {

        const {data : {countries}} = await axios.get('https://covid19.mathdro.id/api/countries')
        return countries
        
    } catch (error) {
        return error;

        
    }
}