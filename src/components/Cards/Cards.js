import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup'
import './Cards.scss';

const Cards = (props) => {
    const {confirmed, recovered, deaths} = props.data;

    return (<Grid className="card-container" container
    direction="row"
    justify="center"
    alignItems="center"
  >
                <Grid item xs={12} md={4}>
                <Card className="card-block confirmed">
                    <CardContent>
                        <Typography color="textSecondary">
                        Confirmed: <CountUp start={0} end={confirmed.value} separator={","} duration={2}/>
                        </Typography>
                    </CardContent>
                 </Card>
                </Grid>
                
                <Grid item xs={12} md={4}>
                <Card className="card-block recovered">
                    <CardContent>
                        <Typography color="textSecondary">
                        Recovered: <CountUp start={0} end={recovered.value} separator={","} duration={2}/>
                        </Typography>
                    </CardContent>
                 </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                <Card className="card-block deaths">
                    <CardContent>
                        <Typography color="textSecondary">
                        Deaths: <CountUp start={0} end={deaths.value} separator={","} duration={2}/>
                        </Typography>
                    </CardContent>
                 </Card>
                </Grid>
            </Grid>
        )}

export default Cards;