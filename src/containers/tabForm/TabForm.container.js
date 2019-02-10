import TabForm from '../../components/tabForm/TabForm'

import { selectVehicleType, saveRegister } from './TabForm.actions'

import { connect } from 'react-redux'

const mapStateToProps = state => ({
  selectedVehicleType: state.tabForm.selectedVehicleType,
  vehicles: state.tabForm.vehicles
})

const mapDispatchToProps = {
  selectVehicleType,
  saveRegister,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TabForm)