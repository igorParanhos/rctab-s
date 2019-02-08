import TabForm from '../../components/tabForm/TabForm'

import { selectVehicleType } from './TabForm.actions'

import { connect } from 'react-redux'

const mapStateToProps = state => ({
  selectedVehicleType: state.tabForm.selectedVehicleType,
  vehicles: state.tabForm.vehicles
})

const mapDispatchToProps = {
  selectVehicleType,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TabForm)