import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
// import { startAction } from "./Actions/Actions.js";
// import { stopAction } from "./Actions/Actions.js";
import actions from './Actions/Actions.js';
import Redux_test from './Redux_test';

function App(props) {
  return (
    <>
    <div className="App">
      <header className="App-header">

        <img
          src={logo}
          className={props.rotating?"App-logo": "App-logo-paused"}
          alt="logo"
          onClick={
            props.rotating ?
              props.stopAction : props.startAction
          }
        />
        <button onClick={props.rotating?props.stopAction:props.startAction}>ACTION</button>
        {console.log(":rotate",props.rotating)}

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div><br/><br/>
          <Redux_test></Redux_test>
    </>
  );
}

const mapStateToProps = state => ({
  ...state
});

// const mapDispatchToProps = dispatch => ({
//   startAction: () => dispatch(startAction),
//   stopAction: () => dispatch(stopAction)
// });


const mapDispatchToProps = dispatch => ({
  startAction: () => dispatch(actions(true)),
  stopAction: () => dispatch(actions(false))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
