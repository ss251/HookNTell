// const config = require("config");
// const AWS_BUCKET_NAME = config.get("AWS_BUCKET_NAME");
// const AWS_ACCESS_KEY_ID = config.get("AWS_ACCESS_KEY_ID");
// const AWS_SECRET_ACCESS_KEY = config.get("AWS_SECRET_ACCESS_KEY");
// const AWS_REGION = config.get("AWS_REGION");
// const AWS_Uploaded_File_URL = config.get("AWS_Uploaded_File_URL");
// const express = require("express");
// const multer = require("multer");
// const router = express.Router();
// var AWS = require("aws-sdk");

// var storage = multer.memoryStorage();
// var upload = multer({ storage: storage });

// // route to upload a pdf document file
// // In upload.single("file") - the name inside the single-quote is the name of the field that is going to be uploaded.
// router.post("/upload", upload.single("file"), function (req, res) {
//   const file = req.file;
//   const s3FileURL = AWS_Uploaded_File_URL;

//   let s3bucket = new AWS.S3({
//     accessKeyId: AWS_ACCESS_KEY_ID,
//     secretAccessKey: AWS_SECRET_ACCESS_KEY,
//     region: AWS_REGION,
//   });

//   //Where you want to store your file

//   var params = {
//     Bucket: AWS_BUCKET_NAME,
//     Key: file.originalname,
//     Body: file.buffer,
//     ContentType: file.mimetype,
//     ACL: "public-read",
//   };

//   s3bucket.upload(params, function (err, data) {
//     if (err) {
//       res.status(500).json({ error: true, Message: err });
//     } else {
//       res.send({ data });
//       var newFileUploaded = {
//         description: req.body.description,
//         img: s3FileURL + file.originalname,
//         s3_key: params.Key,
//       };
//       var document = new DOCUMENT(newFileUploaded);
//       document.save(function (error, newFile) {
//         if (error) {
//           throw error;
//         }
//       });
//     }
//   });
// });

// router.route("/:id").delete((req, res, next) => {
//   DOCUMENT.findByIdAndRemove(req.params.id, (err, result) => {
//     if (err) {
//       return next(err);
//     }
//     //Now Delete the file from AWS-S3
//     // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#deleteObject-property
//     let s3bucket = new AWS.S3({
//       accessKeyId: AWS_ACCESS_KEY_ID,
//       secretAccessKey: AWS_SECRET_ACCESS_KEY,
//       region: AWS_REGION,
//     });

//     let params = {
//       Bucket: AWS_BUCKET_NAME,
//       Key: result.s3_key,
//     };

//     s3bucket.deleteObject(params, (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send({
//           status: "200",
//           responseType: "string",
//           response: "success",
//         });
//       }
//     });
//   });
// });

// module.exports = router;
