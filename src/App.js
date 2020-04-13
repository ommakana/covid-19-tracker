import React from 'react';
import {fetchData} from './api/index'
import {Container, Typography, Card, CardContent} from '@material-ui/core'
import Cards from './components/Cards/Cards';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Chart from './components/Chart/Chart'
import './App.scss';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            data: {}
        }
    }

    async componentDidMount() {
        const fetchApiData = await fetchData();
        this.setState({data: fetchApiData.data});
    }

    handleChange = async (country) => {
        const response = await fetchData(country);
        this.setState({data: response.data});
    }

    render() {

        if(!this.state.data.confirmed)
        return 'Loading......';

        let {lastUpdate} = this.state.data;
        lastUpdate = new Date(lastUpdate);

        return <Container className="container">
            <Card>
            <CardContent>
            <Typography color="textSecondary" variant = "h2"
                component = "h2" >
                Covid - 19 Tracker
                </Typography>
            </CardContent>
            </Card>
            <Cards data={this.state.data}/>
            <CountryPicker handleChange={this.handleChange}></CountryPicker>
            <Chart></Chart>
            <Card>
            <CardContent>
            <Typography color="textPrimary" variant = "h4"
                component = "h4" >
               Last updated: {lastUpdate.toDateString()}<br/>
               {(lastUpdate).toTimeString()}
                </Typography>
            </CardContent>
            </Card>
        </Container>
    }
}

export default App;