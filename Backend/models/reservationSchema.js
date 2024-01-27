import mongoose from "mongoose";
import validator from "validator";

const { Schema } = mongoose;
const reservationSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First name must contain at least 3 characters"],
    maxLength: [30, "First name must contain at most 30 characters"]
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last name must contain at least 3 characters"],
    maxLength: [30, "Last name must contain at most 30 characters"]
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid Email"],
  },
  phoneNumber: {
    type: String,
    required: true,
    minLength: [10, "Phone number must contain at least 10 characters"],
    maxLength: [10, "Phone number must contain at most 10 characters"]
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
