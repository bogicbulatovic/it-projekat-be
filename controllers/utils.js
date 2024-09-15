import multer from "multer";
import path from "node:path";

const storage = multer.diskStorage({
  destination: "./uploads/", // Specify the destination folder for uploads
  filename: function (req, file, cb) {
    // Create a unique filename using the original name and a timestamp
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

function checkFileType(file, cb) {
  // Allowed extensions
  const filetypes = /jpeg|jpg|png|gif/;
  // Check file extension
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime type
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}

// Initialize upload with multer
const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 }, // Set file size limit (10MB here)
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).single("profile_img"); // 'file' is the name of the input field in the

const uploadProfileImg = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(400).json({ message: err });
    }
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    res.json({
      message: "File uploaded successfully",
      filePath: `uploads/${req.file.filename}`,
    });
  });
};

export { uploadProfileImg };
