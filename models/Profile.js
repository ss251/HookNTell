const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  images: {
    picture: {
      type: String,
      default: "",
    },
    cover: {
      type: String,
      default: "",
    },
  },
  location: {
    type: String,
  },
  bio: {
    type: String,
  },
  catches: [
    {
      img: {
        type: String,
      },
      fishtype: {
        type: String,
        required: true,
      },
      areacode: {
        type: String,
        required: true,
      },
      species: {
        type: String,
      },
      date: {
        type: Date,
        required: true,
      },
      location: {
        type: String,
        required: true,
      },
      lat: {
        type: Number
      },
      lng: {
        type: Number
      },
      weight: {
        type: String,
      },
      length: {
        type: String,
      },
      habitat: {
        type: String,
      },
      cliptype: {
        type: String,
      },
      chartertype: {
        type: String,
      },
      crabskept: {
        type: String,
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
