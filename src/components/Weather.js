import React, { Component } from 'react';
import TelAviv from '../data/tel-aviv-5-days';
import moment from 'moment';
import 'moment/locale/en-gb';
import { fetchAction } from '../actions/fetchAction';
import { connect } from 'react-redux';





class Weather extends Component {

    componentWillMount() {   //call to fetchPosts(); action
        this.props.fetchAction();
    }

        render() {
            // const { value, unit, unitType } = this.detail.Temperature.Maximum;

            return (

                // <div className="showWeather">
                <div className="card-group">
                    {TelAviv.DailyForecasts.map((detail, index) => {
                        // const { value, unit, unitType } = detail.Temperature.Minimum;

                        return (

                            //  <div className= "showWeather">
                            //      {/* <p>{moment(detail.Date).format('L'+' ' + 'dddd')}</p> */}
                            //     <ul className="showWeatherIn">
                            //          <li className="ss">{moment(detail.Date).format('L')}</li>
                            //          <li>{moment(detail.Date).format('dddd')}</li>
                            //      {/* <p>{detail.Date.slice(0,10)}</p>
                            //      <p>{detail.Date.split(':').join(' ').split('+').join('').split('-')}</p>
                            //     <p>{detail.Date}</p>
                            //     <p>{detail.Temperature.Minimum.Unit}</p> */}
                            //         <li>{detail.Temperature.Minimum.UnitType+'  ℃'}</li>
                            //  </ul>
                            // </div>

                            <div key={index} className="card-group">
                                {/* <div className="card bg-secondary text-white"> */}
                                <div>
                                    <div className="card-body text-center">
                                        <p className="card-text">{moment(detail.Date).format('L')}</p>
                                        <p className="card-text">{moment(detail.Date).format('dddd')}</p>
                                        <p>{detail.Temperature.Minimum.Unit}</p>
                                        <p>{detail.Temperature.Minimum.UnitType + '  ℃'}</p>

                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>


            )
        }
    }


// const mapStateToProps = state => ({ //this ({}) is pass in an object
//     weathers: state.weathers.items, // name posts becuase in our reducer our route reducer that is what we  set in reducers/index.ks
// }); 

export default connect(null, { fetchAction })(Weather); //fetchPosts call to fetch request


