import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Addfavotire extends Component {
    state=({ 
        favorite: false,
        lists: []
    })


    changeEmoji = () => {
        
        let temp = this.props.cityName;
        const updatedItems = [temp, ...this.state.lists];
        this.setState({
            lists: updatedItems
         });

        localStorage.setItem('studentsInfo', JSON.stringify(updatedItems));
         var storedNames = JSON.parse(localStorage.getItem("studentsInfo"));
         console.log(storedNames,"storedNames")
          
    }




    render() {

        return (
            <div className="Favorite-pos">
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
