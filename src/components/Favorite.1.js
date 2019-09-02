import React, { Component } from 'react'
// import React from 'react';
// import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { connect } from 'react-redux';
import { fetchAction } from '../actions/fetchAction';
import weatherImage from '../data/images/weather.jpeg';
import moment from 'moment';
import 'moment/locale/en-gb';
import { format } from 'util';
// import Header from "../components/Header";



class Favorite extends Component {
  state = {
    list: []
  }


  // state = {
  //   favor: '',
  //   isSaved: false,
  //   todos: []

  // }

  componentDidMount() {
    // this.props.fetchAction();
    // for (let i = 0; i < localStorage.length; i++){
    //   let key = localStorage.key(i);
    //   let value = localStorage.getItem(key);

    //   console.log(key, value);
    //   console.log("this is fetch ddidmount Favorite")
    // }
    


    console.log("this is fetch ddidmount Favorite")
  }

  render() {
    // console.log("this.props.posts.",this.props.posts)
    // console.log(this.props.items.DailyForecasts);
    console.log(this.props.items);
    // console.log(this.props.items.DailyForecasts[0].Date);
    // console.log(this.props.items.HeadLine.Category);
    // console.log(this.props.items.DailyForecasts.Night.Icon)
    // const items= this.props.items.map((item,i) => (
    //   <div key={i}>
    //     <p>{items.DailyForecasts}</p>
    //   </div>
    // ));
    // const list = this.props.items.DailyForecasts[0].Date;



  // let item2 = JSON.parse(localStorage.getItem("studentsInfo"));
      // for (let i = 0; i < localStorage.length; i++){
      // let key = localStorage.key(i);
      // let value = localStorage.getItem(key);
      // var list = [];
      // let storedNames = JSON.parse(localStorage.getItem("studentsInfo"));

  //     if (storedNames){
  //     storedNames.map((temp, i) => {
  //       return (
  //           <div>
  //               <h4 className="card-title"> {storedNames[i]}{" "}</h4>
  //               <h2>{storedNames[1]}</h2>
  //               <h2>fdfdf</h2>
  //               <br/>
  //           </div>
  //       )
        
  //   })
  // }


      // for (let i = 0; i < localStorage.length; i++){
      // return(
      //   <div> 
      //   {/* {localStorage.getItem(key)} */}
      //     {storedNames[i]}
      //    </div>
      // )
      // // console.log(key, value);
      //     }



    
    let storedNames = [];
    // item1 = JSON.parse(localStorage.getItem("names"));
    storedNames = JSON.parse(localStorage.getItem("studentsInfo"));
    console.log("storedNames",storedNames);
    // console.log("storedNames[0]",storedNames[0]);
    // console.log("storedNames[1]",storedNames[1]);
    // this.setState({list: storedNames })
    
    // if(storedNames === null){
      
    // }
    console.log("storedNames",storedNames);
     if (storedNames) {
             return(
               <ul>
                 {storedNames.map((value, index) => {
                   return <li key={index}>{value}</li>
                 })}
              </ul>
              )  
            }

    
  else{
    return(
     "You dont have favorite"
     )
    }
  //     if (storedNames !== null){
  // storedNames.map((temp,i) => (
  //   <div> {temp} </div>
  // )
  // )
  // }

  // <div>fdsfdsfd</div>
  
  }
}






const mapStateToProps = state => ({
  items: state.fetchReducer.items

});


export default connect(mapStateToProps, { fetchAction })(Favorite);

            // export default Favorite;










































































// import React, {Component} from 'react'
            // // import React from 'react';
// // import {MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
// import {connect} from 'react-redux';
// import {fetchAction} from '../actions/fetchAction';
// import {fetchReducer} from '../reducers/fetchReducer';
            // import moment from 'moment';
            // import 'moment/locale/en-gb';




// class Favorite extends Component {



//   // state = {
//   //   favor: '',
//   //   isSaved: false,
//   //   todos: []

//   // }



//   componentDidMount() {
//     this.props.fetchAction();

//     console.log("this is fetch ddidmount Favorite")
//   }

//   render() {
//     // console.log("this.props.posts.",this.props.posts)
//     console.log(this.props.items.DailyForecasts)
//     return (
//       <div>
//         {this.props.items.DailyForecasts.map((item, i) => {
//           //   <div key={i}>
//           //     <p>{items.DailyForecasts}</p>
//           //   </div>
//           // ));
//           return (
//             <div>
//               <ul>
//                 <li>{moment(item.Date).format('L')}</li>
//                 <li>{moment(item.Date).format('dddd')}</li>
//               </ul>
//             </div>
//           )
//         }
//         )
//         }
//       </div>
//     )
//   }
// }









































// import React, { Component } from 'react'
// // import React from 'react';
// // import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
// import { connect } from 'react-redux';
// import { fetchAction } from '../actions/fetchAction';
// import {fetchReducer } from '../reducers/fetchReducer';



// class Favorite extends Component {


//   state = {
//     favor: '',
//     isSaved: false,
//     todos: []

//   }


//   // saveNum = (ev) => {
//   //   this.setState({ isSaved: true });
//   //   localStorage.setItem('myValueInLocalStorage', this.props.favor);
//   //   console.log(" this.props.favor1", this.props.favor)
//   // }

//   componentDidMount() {
//     // const correctGuessesRecordKey = 'CORRECT_GUESSES_RECORD_foo123';
//     // let favor= JSON.parse(localStorage.getItem(correctGuessesRecordKey));
//     // this.setState({favor:favor})
//     // console.log("correctGuessesRecordKey in favorite componenet",correctGuessesRecordKey)
//     this.props.fetchAction();

//     console.log("this is fetch ddidmount Favorite")

//     // axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10') //give use promise.. we can limit the number inside the json to 10 with this -  ?_limit=10'
//     // // .then(res => console.log(res.data))
//     // .then(res => this.setState({ todos: res.data })) // to put these in my state

//   }

//   render() {
//     // console.log("this.props.items.",this.props.items)
//     // const postItems = this.props.items.DailyForecasts.map((item, index) => ( //becuase we mapStateToProps
//       // <div key={index}>
//         {/* {console.log("Ddsds",fetchReducer)} */}
//         {/* <h3>{index + 1}{'.'}&nbsp;{item.Date.link}</h3> */}
//         // <p>{console.log(item.Date)}</p>
//         {/* <hr /> */}
//         // <p> post </p>
//       // </div>

//     // ));
//     return (
//       <div>
//         <h1>Posts</h1>
//         {/* {this.state.fetchReducer.items[1]} */}

//         {/* {postItems} */}
//       </div>

//     );
//   }
// }


// // const mapStateToProps = state => { //this ({}) is pass in an object
// // const { items } = state.fetchReducer; // name posts becuase in our reducer our route reducer that is what we  set in reducers/index.ks
// // return {items }
// // }; 

// const mapStateToProps = state => ({ //this ({}) is pass in an object
// posts: state.fetchReducer.items, // name posts becuase in our reducer our route reducer that is what we  set in reducers/index.ks
// }); 


// export default connect(mapStateToProps, { fetchAction })(Favorite); //fetchPosts call to fetch request

// // export default Favorite;




