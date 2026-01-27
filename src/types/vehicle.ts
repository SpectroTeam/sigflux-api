import { CreateVehicleInput, UpdateVehicleInput, VehicleResponse } from '../schemas/vehicleSchema';
import { VehicleStatus } from './enums';

export type { CreateVehicleInput, UpdateVehicleInput, VehicleResponse };

export interface VehicleWithDetails extends VehicleResponse {
    documents?: any[];
}
