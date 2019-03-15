import React from 'react'
import { connect } from 'react-redux'
import { values } from 'lodash'
// import { fetchAuth, updateProfileId } from './actions'




//------------------------------------------------------------------------------
// Maps
//------------------------------------------------------------------------------

const mapStateToProps = state => {
  return {contacts: values(state.contacts)}
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
