import axios from 'axios'


const url =  'https://api.covid19api.com'

const headers = {
    
  }
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))


export const fetchData = async ()=>{
    try {
        await sleep(3000);
        const data  = await axios.get(url + '/summary',headers)
        return data
        // return  Countries.map((Country) => Country.Country)
    } catch (error) {
        console.log(error)
        
    }
}