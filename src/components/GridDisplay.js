import React, { Component } from 'react';
import { connect } from 'react-redux';

class GridDisplay extends Component {
  constructor(props){
    super(props);

    this.state = {
      visited: false,
    }
  }

  // This happens right before the props are actually updated.
  componentWillReceiveProps(nextProps) {
    // If the person just moved into this spot, set visited = true

    if (nextProps.x === this.props.xCoord && nextProps.y === this.props.yCoord) {
      this.setState({ visited: true });
    }
  }

    render() {
      if (this.props.x === this.props.xCoord && this.props.y === this.props.yCoord) {
        // if (this.state.visited === false) {
        //   this.handleVisit();
        //   console.log(this.state.visited)
        // }
        return(
          <div className="active-cell">
            <p>({this.props.xCoord}, {this.props.yCoord})</p>
          </div>
        )
      } else if (this.state.visited === false){
        return (
            <div className="cell">
              <p>({this.props.xCoord}, {this.props.yCoord})</p>
            </div>
        );
      } else if (this.state.visited === true){
        return (
            <div className="visited">
              <p>({this.props.xCoord}, {this.props.yCoord})</p>
            </div>
        );
      }
    }
}

function state2props(state) {
    // returns an object containing new props that we want to exist
    // and where they get their data
    return {
        gas: state.gas,
        x: state.x,
        y: state.y,
    };

    // Luke: check on returning 'state'
}

function dispatch2props(dispatch) {
    // returns an object containing new props that we want to exist
    // and what actions they dispatch
    return {
    };
}

export default connect(state2props, dispatch2props)(GridDisplay);
