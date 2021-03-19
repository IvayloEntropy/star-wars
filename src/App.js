import React, { Component } from 'react'
import Characters from './Characters'
import { connect } from 'react-redux'
import LinearProgress from '@material-ui/core/LinearProgress'

class App extends Component {
  render () {
    return (
      <>
        {this.props.dataLoading && <LinearProgress color="primary" />}
        <Characters />
      </>
    )
  }
}

function mapStateToProps ({ dataState }) {
  return {
    dataLoading: dataState.dataLoading
  }
}


export default connect(mapStateToProps)(App)
