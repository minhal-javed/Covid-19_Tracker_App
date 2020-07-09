import axios from 'axios'

const url ='https://covid19.mathdro.id/api';


const fetchData = async (country)=>{
    let changebaleurl= url;

    if(country){
        changebaleurl=`${url}/countries/${country}`
    }
    try{
        const {data}=await axios.get(changebaleurl)
        const modifiedData={
            confirmed:data.confirmed,
            recovered:data.recovered,
            deaths:data.deaths,
            lastUpdate:data.lastUpdate
        }
        return modifiedData;
    } catch(error){
console.log(error)
    }


}

export const fetchDailyData=async ()=>{
    try{
        const { data}=await axios.get(`${url}/daily`)
        const modData= data.map((dailyData)=> ({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate

        }))
        return modData
    }catch(error){
        console.log(error)

    }
}

export const FetchCountries =async ()=>{
    try{
        const {data: {countries}} = await axios.get(`${url}/countries`)
        return countries.map((country)=>country.name)
    } catch(error){
        console.log(error)
    }
}


export default fetchData;