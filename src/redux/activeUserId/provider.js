import React from 'react'
import { connect } from 'react-redux'
import { setActiveUserId } from './actions'



//------------------------------------------------------------------------------
// Maps
//------------------------------------------------------------------------------

const mapStateToProps = ({ activeUserId }) => {
  return { activeUserId }
}

const mapDispatchToProps = dispatch => ({
  setActiveUserId: (id) => dispatch(setActiveUserId(id)),
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
