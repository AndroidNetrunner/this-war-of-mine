import { ResourceName } from "../redux/Slices/resourceSlice";

export default interface ResourceStatus {
  [key in ResourceName]: number;
}
