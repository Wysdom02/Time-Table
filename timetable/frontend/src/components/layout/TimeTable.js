import React, { Component, Fragment } from 'react'

class header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "showHide": "hidden"
        }
    }
    DropFunction(event) {
        console.log(event)
        console.log(this)
        console.log(this.props)
        console.log(this.state)
        var css = (this.state.showHide === "hidden") ? "show" : "hidden";
        this.setState({ "showHide": css });
    }
    render() {
        return (
            <Fragment>

                <button className="dropDown" id="dropDown" onClick={this.DropFunction.bind(this)}>
                    <h2> EG{this.props.EGnum} <i class="arrow down"></i></h2>

                    <img className={this.state.showHide} src={this.props.imgUrl} ></img>
                </button>


            </Fragment>
        )
    }
}
export default header