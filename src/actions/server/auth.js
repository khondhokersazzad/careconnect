"use server";

import { dbConnect } from "@/app/lib/dbConnect";
import bcrypt from "bcryptjs";

export const postUser = async (payload) => {
  console.log(payload);

  //0.Validation
  // if(!payload.email || !payload.password) return null;

  //1. check user exist
  const usersCollection = await dbConnect("users");
  const isExist = await usersCollection.findOne({
    email: payload.email,
  });
  if (isExist) {
    return {
      success: false,
      message: `Something went wrong.Try Again`,
    };
  }

  //2. create new user

  const hashpass = await bcrypt.hash(payload.password, 10);
  // 2. create new user
  const newUser = {
    ...payload,
    createdAt: new Date().toISOString(),
    role: "user",
    password: hashpass,
  };
  //3. send user to database

  const result = await usersCollection.insertOne(newUser);
  if (result.acknowledged) {
    return {
      success: true,
      message: `User created with ${result.insertedId.toString()}`,
    };
  } else {
    return {
      success: false,
      message: `Something went wrong.Try Again`,
    };
  }
};
