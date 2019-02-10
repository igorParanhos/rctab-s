import { SELECT_VEHICLE_TYPE, initialState, SAVE_REGISTER } from "./TabForm.constants";

const tabForm = (state=initialState, action) => {
  switch(action.type) {
    case SELECT_VEHICLE_TYPE:
      return {
        ...state,
        selectedVehicleType: action.value,
      }
    case SAVE_REGISTER:
      if (!state.savedItems)
        return {
          ...state,
          savedItems: [
            {
              uuid: action.uuid,
              value: action.value,
              createdAt: action.createdAt,
            }
          ],
        }

      return {
        ...state,
        savedItems: [
          ...state.savedItems, 
          {
            uuid: action.uuid,
            value: action.value,
            createdAt: action.createdAt,
          }
        ]
      }
    default: 
      return state
  }
}

export default tabForm
