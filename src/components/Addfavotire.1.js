import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Addfavotire extends Component {
    state=({ 
        favorite: false,
        lists: []
    })


    changeEmoji = () => {
        // let key = "item1" 
        // console.log("hedssssfffssfdfdsdffsdy");
        // localStorage.setItem(key, 'New Value');
        // // let value = localStorage.getItem(key);
        // console.log(localStorage.getItem(key));
        // // console.log(key, value);

        // let key = "item1" 
        // this.setState({lists: this.state.lists.concat(this.props.cityName)})
        // const temp=this.props.cityName;
        // const updateLists ={
        //     cityName: this.props.cityName,
        //     id: this.props.cityId
        // } 

        // var cities = [];
        //const temp=this.props.cityName;
        // cities.push(this.props.cityName);
       
        //  localStorage.setItem("cities", JSON.stringify(cities));
        //  var cities = localStorage.getItem("cities");
        //  cities = (cities) ? JSON.parse(cities) : [];


        
        // var students = [];
        
        // students.push(this.props.cityName);
        let temp = this.props.cityName;
        const updatedItems = [temp, ...this.state.lists];
        this.setState({
            lists: updatedItems
         });

        localStorage.setItem('studentsInfo', JSON.stringify(updatedItems));
         var storedNames = JSON.parse(localStorage.getItem("studentsInfo"));
         console.log(storedNames,"storedNames");





        // JSON.parse(localStorage.getItem("studentsInfo"));
        //     for (let i = 0; i < localStorage.length; i++){
        //     let key = localStorage.key(i);
        //     let value = localStorage.getItem(key);
        //     console.log(key, value);
        //     }




        // this.setState({
        //     lists: this.state.lists.concat(this.props.cityName)
        //     });
        // console.log("before", this.state.lists);
        // localStorage.setItem("key11", updateLists);
        // this.setState({
        //     lists: this.state.arrayvar.concat([updateLists]
        //         )}
        //  this.setState({lists: [updateLists, temp ]});
        // console.log("after", this.state.lists);
        // console.log("iam updateLists", updateLists);

        // this.setState({lists: lists});
        // localStorage.setItem("key2", 'New Value2');   )
        // localStorage.setItem("key3", 'New Value2');   

        //  localStorage.setItem("key2", this.state.lists);   

        // for (let i = 0; i < localStorage.length; i++){
        //     let key = localStorage.key(i);
        //     let value = localStorage.getItem(key);
            // console.log(key, value);

            // var names = [];
            // for(let i = 0; i < localStorage.length; i++){
                // names[i] = (`New member name ${i}`)
                // names[i] = this.state.lists[i];
                // names[i] = (this.props.cityName);
                // names[i] = this.state.lists; 
            // }
            // names[0]=("New member name0?");
            // names[1]=("New member name1?");
            // names[2]=("New member name2?");
            // names[3]=("New member name3?");
            // localStorage.setItem("key1", JSON.stringify(this.state.lists));
            // var storedNames = JSON.parse(localStorage.getItem("key1"));
            // console.log(storedNames,"storedNames");


          
    }




    render() {

        return (
            <div className="Favorite-pos">
                {/* <span className="yellow-heart"><button className="buttonFavorite" onclick={this.changeEmoji}>💛</button></span> */}
                <span className="favorite-button"><button onClick={(e)=>((e.preventDefault),alert("not in use"))}> Favorite</button></span>
                <button className="buttonFavorite" onClick={this.changeEmoji}>💛</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cityName: state.searchReducer.cityName,
    cityId: state.searchReducer.cityId
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Addfavotire)
