import React, { Component } from "react";
import Switch from "react-switch";

class Toggleswitch extends Component {

    state = {
        checked: false,
        bgcolor: '#886d9d'
    }


    handleChange = checked => {
        this.setState({ checked });
        const { bgcolor } = this.state
        if (bgcolor === '#886d9d') {
            document.querySelector("body").style.background = "#1a1919"; //black mode
            // document.querySelectorAll(".card-title").style.color = "#1a1919"; //black mode
            // let x = document.querySelectorAll(".card-title");
            // x[0].style.backgroundColor = "red";
            // x[1].style.backgroundColor = "blue";
            this.setState({ bgcolor: 'black' })
        }

        if (bgcolor === 'black') {
            document.querySelector("body").style.background = "#886d9d"; //deafult
            this.setState({ bgcolor: '#886d9d' })
        }

    }

    render() {
        return (
            <label htmlFor="material-switch">
                <Switch
                    className="Toggle-switch"

                    id="material-switch"
                    onChange={this.handleChange}
                    checked={this.state.checked}
                    onColor="#b2a1cc"
                    onHandleColor="#fff"
                    offHandleColor="#fff"
                    offColor="#000000"
                    handleDiameter={30}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                    height={20}
                    width={48}
                />
            </label>
        );
    }
}

export default Toggleswitch;


