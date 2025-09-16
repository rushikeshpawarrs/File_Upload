const File = require('../models/File');

//local file upload
exports.localFileUpload = async (req, res) => {
    try {
        //fetching file from request
        const file = req.files.file;
        console.log("File AAgayi ->>" , file);

        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;
        console.log("Path ->> ", path);

        //mv() method is used to place the file in upload directory
        file.mv(path, (err) => {
            console.log(err);
        });

        res.json({
            success: true,
            message: "Local File uploaded successfully",
        });
    } catch (error) {
        console.log(error);
    }
}