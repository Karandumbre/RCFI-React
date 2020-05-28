import React from 'react';
import Loader from './loader/loader'
import { connect } from 'react-redux';
import HomeLoan from './Components/HomeLoan/HomeLoan';
import Header from './Common/Header/Header'
function App(props) {
  const loader = (props.currentState.loading) ? <Loader></Loader> : '';
  return (

    <div className="App">
      <Header />
      {loader}
      <HomeLoan></HomeLoan>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentState: state
  }
}

export default connect(mapStateToProps)(App);
