import React from 'react';
import styles from './cards.module.css';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';


function Cards(props) { 
  
    if (!props){
        return "Loading..."
    }
    const newdata = (props.data)
    console.log(newdata)
    if (!newdata) {
        return 'Loading...';
      }
    return (
        <div>

    <div className={styles.container}>
    <h1> <p > COVID 19 </p> </h1>

        <Grid container spacing={3} justify="center">   
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
            NewConfirmed
            </Typography>
            <Typography variant="h5" component="h2">
            {newdata.NewConfirmed}
              {/* <CountUp start={0} end={newdata.NewConfirmed} duration={2.75} separator="," /> */}
            </Typography>
            <Typography variant="body2" component="p">
              Number of active cases of COVID-19.
            </Typography>
          </CardContent>
        </Grid>
      
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
            NewRecovered
            </Typography>
            <Typography variant="h5" component="h2">
            {newdata.NewRecovered}
              {/* <CountUp start={0} end={newdata.NewRecovered} duration={2.75} separator="," /> */}
            </Typography>
            <Typography variant="body2" component="p">
              Number of active cases of COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
            NewDeaths
            </Typography>
            <Typography variant="h5" component="h2">
            {newdata.NewDeaths}
              {/* <CountUp start={0} end={newdata.NewDeaths} duration={5.75} separator="," /> */}
            </Typography>
            <Typography variant="body2" component="p">
              Number of active cases of COVID-19.
            </Typography>
          </CardContent>
        </Grid>
       
</Grid>
      </div>
       <div className={styles.container}>
        <Grid container spacing={3} justify="center">   

        

        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
            TotalConfirmed
            </Typography>
            <Typography variant="h5" component="h2">
            {newdata.NewConfirmed}
              {/* <CountUp start={0} end={newdata.TotalConfirmed} duration={2.75} separator="," /> */}
            </Typography>
            <Typography variant="body2" component="p">
              Number of active cases of COVID-19.
            </Typography>
          </CardContent>
        </Grid>
       
        
       
        
        
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
            TotalRecovered
            </Typography>
            <Typography variant="h5" component="h2">
            {newdata.TotalRecovered}
              {/* <CountUp start={0} end={newdata.TotalRecovered} duration={2.75} separator="," /> */}
            </Typography>
            <Typography variant="body2" component="p">
              Number of active cases of COVID-19.
            </Typography>
          </CardContent>
        </Grid>

        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
            TotalDeaths
            </Typography>
            <Typography variant="h5" component="h2">
            {newdata.TotalDeaths}
              {/* <CountUp start={0} end={newdata.TotalDeaths} duration={2.75} separator="," /> */}
            </Typography>
            <Typography variant="body2" component="p">
              Number of active cases of COVID-19.
            </Typography>
          </CardContent>
        </Grid>

        </Grid>
        
       
        </div>
        </div>
    );
}

export default Cards;