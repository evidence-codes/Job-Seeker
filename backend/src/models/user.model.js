const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    jobTitle: {
      type: String,
    },
    jobExperience: [
      {
        title: {
          type: String,
          required: true,
        },
        company: {
          type: String,
          required: true,
        },
        startedAt: {
          type: Date,
          required: true,
        },
        endedAt: {
          type: Date,
        },
        isCurrentRole: {
          type: Boolean,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const User = model("User", userSchema);

module.exports = User;
