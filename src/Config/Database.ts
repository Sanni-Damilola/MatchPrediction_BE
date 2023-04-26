import mongoose from "mongoose";

import { EnvironmentalVariables } from "./EnvironmentalVariables";

const LIVEURI = EnvironmentalVariables.MONGODB_STRING;

export const DBCONNECTION = async () => {
  try {
    const conn = await mongoose.connect(LIVEURI);
    console.log("");
    console.log(`Database is connected to ${conn.connection.host}`);
  } catch (error) {
    console.log(`${error}`);
  }
};
