import formidable from "formidable";
import path from "path";

const middleware = (req, res, next) => {
  // formidable
  const form = formidable({
    multiples: true,
    uploadDir: path.join(__dirname, "../../../public/tempAssets"),
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return next(err);
    }
    // adding fields and files in req object
    req.fields = fields;
    req.files = files;
    next();
  });
};

export default middleware;
