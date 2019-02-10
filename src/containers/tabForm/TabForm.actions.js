import { SELECT_VEHICLE_TYPE, SAVE_REGISTER } from "./TabForm.constants";
import { uuidCLojure } from "../../utils";

export const selectVehicleType = value => ({
  type: SELECT_VEHICLE_TYPE,
  value: value.target.value
})

export const saveRegister = value => {
  const uuid = uuidCLojure();
  return {
    type: SAVE_REGISTER,
    value,
    uuid: uuid(),
    createdAt: new Date()
  }
}