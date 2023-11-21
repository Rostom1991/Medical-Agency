const multer = require("multer");

const upload = multer({
  dest: "uploads/",
  storage: multer.memoryStorage(),
});

module.exports = upload;
// const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/"); // Define the directory where uploaded files will be stored
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, file.fieldname + "-" + uniqueSuffix + ".pdf"); // Define the file name and extension
//   },
// });

// const upload = multer({
//   storage: storage,
//   limits: {
//     fileSize: 1024 * 1024 * 5, // Define a file size limit (in this example, 5MB)
//   },
//   fileFilter: function (req, file, cb) {
//     if (file.mimetype !== "application/pdf") {
//       return cb(new Error("Only PDF files are allowed"));
//     }
//     cb(null, true);
//   },
// });

// module.exports = upload;
