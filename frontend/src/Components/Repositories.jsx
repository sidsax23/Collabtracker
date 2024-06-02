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
    const [data,setData] = useState(null)
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
            data && Object.keys(data.heatmap_data).map((repo,index) => 
            (
                <HeatmapCard 
                key={index}
                heatmap_data={data.heatmap_data[repo]}
                repo_name={repo}
                heatmap_dates={data.heatmap_dates}
                branch_data={data.branch_data[repo]}
                user_data={data.user_data[repo]}
                file_data={data.file_data[repo]}
                average_commits_per_day={data.average_commits_per_day[repo]}/>
            ))
        }   
        </div>       
    </div>
  )
}

export default Repositories