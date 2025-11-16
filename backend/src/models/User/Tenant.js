import { Schema } from "mongoose";
import { User } from "./User.js";

const tenantSchema = new Schema({})

const Tenant = User.discriminator("tenant", tenantSchema)
export { Tenant };
