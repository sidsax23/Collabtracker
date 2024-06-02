import React from 'react'
import Tooltip from '@uiw/react-tooltip';
import HeatMap from '@uiw/react-heat-map';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DataGrid } from '@mui/x-data-grid';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Heatmap_Card_Repo = (props) => 
{
    const repo_name = props.heatmap_data[0]
    const heatmap_info = props.heatmap_data[1]
    const startDate = props.heatmap_dates.startDate
    const endDate = props.heatmap_dates.endDate
    const most_active_branches_rows = props.repo_data
    const most_active_users_rows = props.repo_data
    const most_frequently_changed_files_rows = props.repo_data
    const avg_commits = props.repo_data
    
    const most_active_branches_columns = [
        { field: 'sno', headerName: 'S. No.', width: 70, valueGetter: (value,row) => value },
        { field: 'branch', headerName: 'Branch Name', width: 130 },
        { field: 'commits', headerName: 'Total Commits', width:90, type:'number' },
        { field: 'last_commit', headerName: 'Last Commit', width:130, type:'date' },
      ];

    const most_active_users_columns = [
      { field: 'sno', headerName: 'S. No.', width: 70, valueGetter: (value,row) => value },
      { field: 'user', headerName: 'User Name', width: 130 },
      { field: 'commits', headerName: 'Total Commits', width:90, type:'number' },
      { field: 'last_commit', headerName: 'Last Commit', width:130, type:'date' },
    ];
    
    const most_frequently_changed_files_columns = [
      { field: 'sno', headerName: 'S. No.', width: 70, valueGetter: (value,row) => value },
      { field: 'file', headerName: 'File Name', width: 130 },
      { field: 'commits', headerName: 'Total Commits', width:90, type:'number' },
      { field: 'last_commit', headerName: 'Last Commit', width:130, type:'date' },
    ];
      

  return (
    <div className="card">
        <h2>{repo_name}</h2>
        <HeatMap
            value={heatmap_info}
            width={1200}
            height={200}
            rectSize={20}
            startDate={new Date(startDate)}
            endDate={new Date(endDate)}
            rectRender={(props, data) => {
                // if (!data.count) return <rect {...props} />;
                return (
                <Tooltip placement="top" content={`commit(s): ${data.count || 0}, date: ${data.date}`}>
                    <rect {...props} />
                </Tooltip>
                );
            }}
        />
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5">Facts</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography variant="h6">Top 3 Most Active Branches</Typography>
                    <DataGrid
                      rows={most_active_branches_rows}
                      columns={most_active_branches_columns}
                      autoHeight
                      hideFooterPagination
                    />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h6">Top 3 Most Active Users</Typography>
                    <DataGrid
                        rows={most_active_users_rows}
                        columns={most_active_users_columns}
                        autoHeight
                        hideFooterPagination
                    />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h6">Top 3 Most Frequently Changed Files</Typography>
                    <DataGrid
                      rows={most_frequently_changed_files_rows}
                      columns={most_frequently_changed_files_columns}
                      autoHeight
                      hideFooterPagination
                    />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h6">Average Commits/Day : {avg_commits}</Typography>
                </Grid>
            </Grid>
            </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default Heatmap_Card_Repo