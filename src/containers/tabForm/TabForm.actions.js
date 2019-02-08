import { SELECT_VEHICLE_TYPE } from "./TabForm.constants";

export const selectVehicleType = value => ({
  type: SELECT_VEHICLE_TYPE,
  value: value.target.value
})