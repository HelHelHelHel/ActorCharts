import React from 'react';
import Chart from 'react-google-charts';


const Actor = props => {
    const style={
        margin: '2rem'
    }
    
    return (
        <div style={style}> 
            <h1>Name: { props.actorInfo.name } </h1>
            <h5>Number of movies: { props.actorInfo.movies_total }</h5>
            <Chart
                width={900}
                height={300}
                chartType="ColumnChart"
                loader={<div>Ratings</div>}
                data={props.actorRatings}
                options={{
                title: 'Movie Ratings over time',
                chartArea: { width: '80%' },
                hAxis: {
                    title: 'Average rating',
                    minValue: 0,
                },
                vAxis: {
                    title: 'Year',
                },
                }}
                legendToggle
            />
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Genres</div>}
                data={props.actorGenres}
                options={{
                    title: 'Genres',
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </div>
        )
}
export default Actor;