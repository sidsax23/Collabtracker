import React, { useState,useEffect } from 'react'
import axios from 'axios' 
import Header from '../header/header.jsx'
import HeatmapCard from '../heatmap_cards/heatmap_card_repo.jsx'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DataGrid } from '@mui/x-data-grid';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Repositories = () => 
{
    const [data,setData] = useState({'heatmap_data':[]})
    const [most_active_repo_rows,set_most_active_repo_rows] = useState([])
    const [least_active_repo_rows,set_least_active_repo_rows] = useState([])

    useEffect(() => 
    {
        const fetch_request = async () =>
        {
            const result = await axios.get("http://localhost:8000/repo_data")
            setData(result.data)  
            //set_most_active_repo_rows(result.data)
            //set_least_active_repo_rows(result.data)
        }
        fetch_request();
    },[])

    const columns = [
        { field: 'sno', headerName: 'S. No.', width: 70, valueGetter: (value,row) => value },
        { field: 'repo', headerName: 'Repo Name', width: 130 },
        { field: 'commits', headerName: 'Total Commits', width:130, type:'number' },
        { field: 'last_commit', headerName: 'Last Commit', width:130, type:'date' },
      ];


  return (
    <div>
        <Header/><div className="content">
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h4">Facts</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography variant="h5">Top 3 Most Active Repositories</Typography>
                    <DataGrid
                      rows={most_active_repo_rows}
                      columns={columns}
                      autoHeight
                      hideFooterPagination
                    />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h5">Top 3 Least Active Repositories</Typography>
                    <DataGrid
                        rows={least_active_repo_rows}
                        columns={columns}
                        autoHeight
                        hideFooterPagination                   
                    />
                </Grid>
            </Grid>
            </AccordionDetails>
        </Accordion>
        {
            Object.entries(data.heatmap_data).map((card_data) => 
            (
                <HeatmapCard heatmap_data={card_data} heatmap_dates={data.heatmap_dates}/>
            ))
        }   
        </div>       
    </div>
  )
}

export default Repositories