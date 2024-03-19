import React from 'react'
import { connect } from "react-redux";
// import { startAction } from "./Actions/Actions.js";
// import { stopAction } from "./Actions/Actions.js";
import actions from './Actions/Actions.js';


 function Redux_test(props) {
  return (
      <>
    <h1>Redux_Test</h1>
    {console.log("REdux_Test", props.rotating)}
    <button onClick={props.rotating?props.stopAction:props.startAction}>STATE_CHANGE</button>
    
    </>
  )
}


const mapStateToProps = state => ({
    ...state
  });
  
//   const mapDispatchToProps = dispatch => ({
//     startAction: () => dispatch(startAction),
//     stopAction: () => dispatch(stopAction)
//   });

const mapDispatchToProps = dispatch => ({
    startAction: () => dispatch(actions(true)),
    stopAction: () => dispatch(actions(false))
  });

  export default connect(mapStateToProps, mapDispatchToProps)(Redux_test);