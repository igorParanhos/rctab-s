import { SELECT_VEHICLE_TYPE, initialState } from "./TabForm.constants";

const tabForm = (state=initialState, action) => {
  switch(action.type) {
    case SELECT_VEHICLE_TYPE:
      return {
        ...state,
        selectedVehicleType: action.value,
      }
    default: 
      return state
  }
}

export default tabForm
