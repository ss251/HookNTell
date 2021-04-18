const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  location: {
    type: String,
  },
  bio: {
    type: String,
  },
  catches: [
    {
      species: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        required: true,
      },
      location: {
        type: String,
        required: true,
      },
      weight: {
        type: String,
        required: true,
      },
      length: {
        type: String,
        required: true,
      },
      habitat: {
        type: String,
        required: true,
      },
      notes: {
        type: String,
      },
    },
  ],
  social: {
    youtube: {
      type: String,
    },
    twitter: {
      type: String,
    },
    facebook: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    instagram: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("profile", ProfileSchema);
