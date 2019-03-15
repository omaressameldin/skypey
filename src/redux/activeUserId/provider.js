import React from 'react'
import { connect } from 'react-redux'




//------------------------------------------------------------------------------
// Maps
//------------------------------------------------------------------------------

const mapStateToProps = ({ activeUserId }) => {
  return { activeUserId }
}

const mapDispatchToProps = dispatch => ({

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
