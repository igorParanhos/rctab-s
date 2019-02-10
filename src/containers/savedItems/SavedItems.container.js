import { connect } from 'react-redux'

import SavedItems from '../../components/savedItems/SavedItems'
import { deleteRegister } from '../tabForm/TabForm.actions'

const mapStateToProps = state => ({
  savedItems: state.tabForm.savedItems
})

const mapDispatchToProps = {
  deleteRegister
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SavedItems)