import React from 'react'
import Tooltip from '@uiw/react-tooltip';
import HeatMap from '@uiw/react-heat-map';

const Heatmap_Card = (props) => 
{
    const name = props.heatmap_data[0]
    const heatmap_info = props.heatmap_data[1]
    const startDate = props.heatmap_dates.startDate
    const endDate = props.heatmap_dates.endDate
  return (
    <div className="card">
        <h2>{name}</h2>
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
    </div>
  )
}

export default Heatmap_Card