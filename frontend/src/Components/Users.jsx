import React, { useState,useEffect } from 'react'
import axios from 'axios' 
import Header from '../header/header.jsx'
import Heatmap_Card from '../heatmap_card/heatmap_card'

const Repositories = () => 
{
    const [data,setData] = useState({'heatmap_data':[]})

    useEffect(() => 
    {
        const fetch_request = async () =>
        {
            const result = await axios.get("http://localhost:8000/user_data")
            setData(result.data)  
            console.log(Object.entries(result.data.heatmap_data))
        }
        fetch_request();
    },[])



  return (
    <div>
        <Header/><div className="content">
        {
            Object.entries(data.heatmap_data).map((card_data) => 
            (
                <Heatmap_Card heatmap_data={card_data} heatmap_dates={data.heatmap_dates}/>
            ))
        }   
        </div>       
    </div>
  )
}

export default Repositories