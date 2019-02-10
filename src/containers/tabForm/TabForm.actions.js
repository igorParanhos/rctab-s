import { SELECT_VEHICLE_TYPE, SAVE_REGISTER, DELETE_REGISTER } from "./TabForm.constants";
import { uuidCLojure } from "../../utils";

export const selectVehicleType = value => ({
  type: SELECT_VEHICLE_TYPE,
  value: value.target.value
})

export const saveRegister = (name, value) => {
  const uuid = uuidCLojure();
  return {
    type: SAVE_REGISTER,
    name,
    value,
    uuid: uuid(),
    createdAt: new Date()
  }
}

export const deleteRegister = uuid => ({
  type: DELETE_REGISTER,
  uuid,
})