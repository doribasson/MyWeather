import React, { Component } from 'react';
// import telAviv from '../data/tel-aviv.json';
// import Header from '../components/Header';
// import Favorite from './Favorite';
import { fetchAction } from '../actions/fetchAction';
import { searchCity } from '../actions/searchAction';
import { connect } from 'react-redux';
import moment from 'moment';
import 'moment/locale/en-gb';
import Favorite from "../components/Favorite";
import Search from '../components/Search';
import Addfavotire from '../components/Addfavotire';
import Toggleswitch from '../components/Toggleswitch';

// 215854?apikey=sw6KP9xtcxxdfcjATTiMPxcUAaBifaFl'

class App extends Component {

    componentDidMount() {
        console.log(this.props.forcast);
        // this.props.fetchAction();
        // this.props.searchCity('tel aviv');

        // console.log("this is fetch ddidmount Favorite")
    }


    searchCity = (cityQuery) => { //taking artistQuery as a paramter from ${artistQuery}`
        // console.log('iam cityQury', cityQuery);
        this.props.searchCity();
    }                                                                       //callback function                              



    render() {
        console.log("forcast after render", this.props.forcast);
        // console.log("forcast",this.state.forcast);
        return (
            <div>
                <div className="toggle-container">
                    <span className="toggle"><Toggleswitch /></span>
                </div>

                <div className="box2-searchCity-favorite-container">
                    <span className="searchCity">
                        <Search searchCity={this.searchCity} />
                    </span>
                </div>

                <div className="card-deck1">
                    <div className="dori-container1">

                    <div className="card-title" >
                        {
                            
                            this.props.forcast.map((temp, i) => {
                                return (
                                    <div className="b">
                                        <h4 className="card-title">{this.props.cityName}</h4>
                                        <h6 className="card-title">{temp.Temperature.Metric.Value + "℃ " + " / " + temp.Temperature.Imperial.Value + " F"}</h6 >
                                        <h6 className="card-title">{this.props.cityId}</h6 >
                                        <h6 className="card-title">{temp.WeatherText}</h6 >
                                    </div>
                                )
                                
                            })
                        }
                    </div>
                    <div className="a"> <Addfavotire /> </div>
                    </div>



                    <div className="card-deck">


                        {
                            this.props.forcasts.map((temp, i) => {
                                const { Value } = temp.Temperature.Minimum;
                                const Celsius = (5 / 9 * (Value - 32)).toFixed(0);
                                return (
                                    <div key={i} className="card">
                                        <h5 className="card-title">{moment(temp.Date).format('L')}</h5>
                                        <h5 className="card-title">{moment(temp.Date).format('dddd')}</h5>
                                        <h5 className="card-text">{Value} {' '} F</h5 >
                                        <h5 className="card-text">{Celsius}{' '} ℃</h5 >
                                    <h6 className="card-title">{this.props.cityId}</h6 >
                                    <h6 className="card-title">{temp.WeatherText}</h6 >
                                    </div>
                                )
                            })
                        }

                    </div>


                </div>

            </div>

        )
    }
}


const mapStateToProps = state => ({
    items: state.fetchReducer.items,
    forcast: state.searchReducer.forcast,
    forcasts: state.searchReducer.forcasts,
    cityName: state.searchReducer.cityName,
    cityId: state.searchReducer.cityId
});


export default connect(mapStateToProps, { fetchAction, searchCity })(App); //fetchPosts call to fetch request
                    //♡
