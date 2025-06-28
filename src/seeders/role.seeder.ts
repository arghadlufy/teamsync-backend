import "dotenv/config";

import mongoose from "mongoose";
import connectDB from "../config/database.config";
import RolePermission from "../models/roles-permission.model";
import { RolePermissions } from "../utils/role-permission";

const seedRoles = async () => {
  console.log("seeding roles started...");

  try {
    await connectDB();
    const session = await mongoose.startSession();
    session.startTransaction();

    console.log("Clearing existing roles...");

    await RolePermission.deleteMany({}, { session });

    for (const roleName in RolePermissions) {
      const role = roleName as keyof typeof RolePermissions;
      const permissions = RolePermissions[role];

      // check if role already exists
      const existingRole = await RolePermission.findOne({ name: role }).session(
        session
      );

      if (!existingRole) {
        const newRole = new RolePermission({
          name: role,
          permissions,
        });

        await newRole.save({ session });
        console.log(`Role ${role} created successfully`);
      } else {
        console.log(`Role ${role} already exists`);
      }
    }

    await session.commitTransaction();
    console.log("Transaction committed successfully");

    session.endSession();
    console.log("Session ended successfully");

    console.log("Seeding roles completed successfully");
  } catch (error) {
    console.log("Error seeding roles", error);
  }
};

seedRoles().catch((error) => {
  console.log("Error seeding roles", error);
  process.exit(1);
});
