import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'Loading...';
    }
    console.log(confirmed);
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <Card-Content>
                        <Typography color="textSecondary" gutterBottom>
                            {' '}
                            Infected
                        </Typography>
                        <Typography varaint="h5">
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separaror=","
                            />
                        </Typography>
                        <Typography colr="textSecondary"> {new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">
                            {' '}
                            Number of active cases of covid-19
                        </Typography>
                    </Card-Content>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <Card-Content>
                        <Typography color="textSecondary" gutterBottom>
                            {' '}
                            Recovered
                        </Typography>
                        <Typography varaint="h5">
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separaror=","
                            />
                        </Typography>
                        <Typography colr="textSecondary"> {new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">
                            {' '}
                            Number of recoveries of COVID-19
                        </Typography>
                    </Card-Content>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <Card-Content>
                        <Typography color="textSecondary" gutterBottom>
                            {' '}
                            Deaths
                        </Typography>
                        <Typography varaint="h5"> 
                        <CountUp
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                separaror=","
                            />
                        </Typography>
                        <Typography colr="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">
                            {' '}
                            Number of deaths of covid-19
                        </Typography>
                    </Card-Content>
                </Grid>
            </Grid>
        </div>
    );
};

export default Cards;
