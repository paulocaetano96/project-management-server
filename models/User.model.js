const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    //role of user, should be: admin, staff, player
    role: {
      type: String,
      required: [true, "Role is required: Staff or Player"],
      enum: ['staff', 'player']
    },
    club: {
      type: Schema.Types.ObjectId,
      ref: 'Club',
      required: [true, "A valid club key is required"]
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
