import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchAction } from '../actions/fetchAction';
import weatherImage from '../data/images/weather.jpeg';
import moment from 'moment';
import 'moment/locale/en-gb';
import { format } from 'util';



class Favorite extends Component {
  state = {
    list: []
  }

  componentDidMount() {
    this.props.fetchAction();

  }

  render() {
    let storedNames = [];
    storedNames = JSON.parse(localStorage.getItem("studentsInfo"));
    if (storedNames) {
      return (
        <ul>
          {storedNames.map((value, index) => {
            return <li key={index}>{value}</li>
          })}
        </ul>
      )
    }
    else {
      return (
        "You dont have favorite"
      )
    }

  }
}


const mapStateToProps = state => ({
  items: state.fetchReducer.items

});


export default connect(mapStateToProps, { fetchAction })(Favorite);

