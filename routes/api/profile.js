const express = require("express");
const axios = require("axios");
const config = require("config");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
// bring in normalize to give us a proper url, regardless of what user entered
const normalize = require("normalize-url");
const checkObjectId = require("../../middleware/checkObjectId");

const Profile = require("../../models/Profile");
const User = require("../../models/User");
const Post = require("../../models/Post");

// @route    GET api/profile/me
// @desc     Get current users profile
// @access   Private
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate("user", ["name", "avatar"]);

    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route POST api/profile/avatar
//@desc upload avatar for profile
//@access private

router.post("/avatar", auth, async (req, res) => {
  try {
    // console.log("server: req.body:  ", req.body);
    let profile = await Profile.findOne({ user: req.user.id }).populate("user", ["name", "avatar"]);;
    profile.images.picture = req.body.picture;
    await profile.save();
    //console.log("changed profile:", profile);
    return res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//@route POST api/profile/catch/img
//@desc upload avatar for profile
//@access private

router.post("/catch/img", auth, async (req, res) => {
  try {
    // console.log("server: req.body:  ", req.body);
    let profile = await Profile.findOne({ user: req.user.id }).populate("user", ["name", "avatar"]);;
    profile.catches[0].img = req.body.img;
    await profile.save();
    //console.log("changed profile:", profile);
    return res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//@route POST api/profile/cover
//@desc upload cover for profile
//@access private

router.post("/cover", auth, async (req, res) => {
  try {
    // console.log("server: req.body:  ", req.body);
    let profile = await Profile.findOne({ user: req.user.id }).populate("user", ["name", "avatar"]);;
    profile.images.cover = req.body.cover;
    await profile.save();
    //console.log("changed profile:", profile);
    return res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//@route POST api/profile/catch/latlng
//@desc add in coordinates for catch
//@access private 
router.post(
  "/catch/latlng",
  auth,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // destructure request
    const {
      lat,
      lng,
      // spread rest of the fields that don't need to be checked
      ...rest
    } = req.body;

    // build a catch
    const catchFields = {
      lat: req.body.lat,
      lng: req.body.lng,
      ...rest,
    };

    try {
      // Using upsert option (creates new doc if no match is found):
      let profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: catchFields },
        { new: true, upsert: true, setDefaultsOnInsert: true }
      ).populate("user", ["name", "avatar"]);
      return res.json(profile);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send("Server Error");
    }
  }
);

// // @route    PUT api/profile
// // @desc     Create or update user profile
// // @access   Private
// router.put(
//   "/catch",
//   auth,
//   check("location", "Location is required").notEmpty(),
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     try {
//       const profile = await Profile.findOne({ user: req.user.id });

//       profile.user.unshift(req.body);

//       await profile.save();

//       res.json(profile);
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send("Server Error");
//     }
//   }
// );

// @route    POST api/profile
// @desc     Create or update user profile
// @access   Private
router.post(
  "/",
  auth,
  check("location", "Location is required").notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // destructure request
    const {
      youtube,
      twitter,
      instagram,
      linkedin,
      facebook,
      // spread rest of the fields that don't need to be checked
      ...rest
    } = req.body;

    // build a profile
    const profileFields = {
      user: req.user.id,
      ...rest,
    };

    // Build socialFields object
    const socialFields = { youtube, twitter, instagram, linkedin, facebook };

    // normalize social fields to ensure valid url
    for (const [key, value] of Object.entries(socialFields)) {
      if (value && value.length > 0)
        socialFields[key] = normalize(value, { forceHttps: true });
    }
    // add to profileFields
    profileFields.social = socialFields;

    try {
      // Using upsert option (creates new doc if no match is found):
      let profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true, upsert: true, setDefaultsOnInsert: true }
      ).populate("user", ["name", "avatar"]);
      return res.json(profile);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send("Server Error");
    }
  }
);

// @route    GET api/profile
// @desc     Get all profiles
// @access   Public
router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", ["name", "avatar"]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/profile/user/:user_id
// @desc     Get profile by user ID
// @access   Public
router.get(
  "/user/:user_id",
  checkObjectId("user_id"),
  async ({ params: { user_id } }, res) => {
    try {
      const profile = await Profile.findOne({
        user: user_id,
      }).populate("user", ["name", "avatar"]);

      if (!profile) return res.status(400).json({ msg: "Profile not found" });

      return res.json(profile);
    } catch (err) {
      console.error(err.message);
      return res.status(500).json({ msg: "Server error" });
    }
  }
);

// @route    DELETE api/profile
// @desc     Delete profile, user & posts
// @access   Private
router.delete("/", auth, async (req, res) => {
  try {
    // Remove user posts
    // Remove profile
    // Remove user
    await Promise.all([
      Post.deleteMany({ user: req.user.id }),
      Profile.findOneAndRemove({ user: req.user.id }),
      User.findOneAndRemove({ _id: req.user.id }),
    ]);

    res.json({ msg: "User deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    PUT api/profile/catch
// @desc     Add catch to profile
// @access   Private
router.put(
  "/catch",
  auth,
  check("areacode", "Area Code is required").notEmpty(),
  check("location", "Location is required").notEmpty(),
  check("date", "From date is required and needs to be from the past")
    .notEmpty()
    .custom((value, { req }) => (req.body.to ? value < req.body.to : true)),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const profile = await Profile.findOne({ user: req.user.id }).populate("user", ["name", "avatar"]);

      profile.catches.unshift(req.body);

      await profile.save();

      return res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route    DELETE api/profile/catch/:exp_id
// @desc     Delete catch from profile
// @access   Private

router.delete("/catch/:catch_id", auth, async (req, res) => {
  try {
    const foundProfile = await Profile.findOne({ user: req.user.id });

    foundProfile.catches = foundProfile.catches.filter(
      (fish) => fish._id.toString() !== req.params.catch_id
    );

    await foundProfile.save();
    return res.status(200).json(foundProfile);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
