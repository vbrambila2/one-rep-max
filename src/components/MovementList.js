import React from "react";
import { connect } from "react-redux";

const MovementList = (props) => {
    const {
        move
    } = props;
    console.log(move, "list");

    return (
        <div>movement list</div>
    )
};

const mapStateToProps = state => {
    return {
      move: state.moveReducer
    }
  };
  
const mapDispatchToProps = dispatch => {
    return {
    
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovementList);
