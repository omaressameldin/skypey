import React from 'react'
import { connect } from 'react-redux'
import { sendMessage } from './actions'




//------------------------------------------------------------------------------
// Maps
//------------------------------------------------------------------------------

const mapStateToProps = ({ messages }) => {
  return { messages }
}

const mapDispatchToProps = dispatch => ({
  sendMessage: (text, id) => dispatch(sendMessage(text, id)),
})




//------------------------------------------------------------------------------
// Hoc
//------------------------------------------------------------------------------

export default Component => {
  class EnhancedComponent extends React.Component {
    componentWillMount() {
    }

    render() {
      return <Component {...this.props} />
    }
  }
  return connect(mapStateToProps, mapDispatchToProps)(EnhancedComponent)
}
