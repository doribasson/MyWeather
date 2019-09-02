
import React, { Component } from 'react';
import telAviv from '../data/tel-aviv.json';
import { searchCity } from '../actions/searchAction';
import { connect } from 'react-redux';


class Search extends Component {
  state = { value: '' }; //by default its empty string

  updateCityQuery = event => {
     let val = event.target.value.replace(/[^A-z\s]/ig, '');
    // value = event.target.value.replace(/[^A-Za-z]/gi, "");
    this.setState(({ value: val }));
    console.log("value",val);
    // console.log("cityQuery",this.state.cityQuery);
    


    // this.setState({ cityQuery: value });
    //console.log('event.target.value', event.target.value); //we get what the user has typed
    // this.setState({ cityQuery: event.target.value }); // have a field that keeps track of what the user has inputed qitin the component state
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') { //if push enter so its like push search
      this.searchCity();
    }
  }

  searchCity= () => {
    this.props.searchCity(this.state.value); //take searchArtist func from App
  }

  render() {
    return (
      <div className= "searchWeather">
        <input
          value={this.state.value}
          onChange={this.updateCityQuery}  /* the input element can fire a callback that has an event object */
          onKeyPress={this.handleKeyPress} // search when enter button without clicking search and click enter
          placeholder='search-city in English ♡'
        />
        <button onClick={this.searchCity}>Search</button>
        {/* {telAviv.map((detail, index) => {
          return <h1>{detail}</h1>
        })} */}
      </div>
    )
  }
}

// export default Search;

export default connect(null, { searchCity })(Search); //fetchPosts call to fetch request



















// import React, { Component } from 'react';

// class Search extends Component {
//     state = { artistQuery: ''};

//     updateArtistQuery = event => {
//         //console.log('event.target.value', event.target.value); //we get what the user has typed
//         this.setState({ artistQuery: event.target.value }); // have a field that keeps track of what the user has inputed qitin the component state
//     }



//     handleKeyPress = event => {
//         if (event.key == 'Enter') {   //if push enter so its like push search
//             this.searchArtist();
//         }
//     }

//     render() {
//         reutrn(
//             <div>
//                 <input
//                     onChange={this.updateArtistQuery}   /* the input element can fire a callback that has an event object */
//                     onKeyPress={this.handleKeyPress} // search when enter button without clicking search and click enter
//                     placeholder='Search for Artist'
//                 />
//                 <button onClick={this.searchArtist}>Search</button>

//             </div>
//         )
//     }
// }

// export default Search;