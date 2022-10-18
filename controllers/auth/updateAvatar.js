const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");

const { User } = require("../../models/user");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  try {
    const { _id } = req.user;
    const { path: tempUpload, originalname } = req.file;
    const extension = originalname.split(".").pop();
    const filename = `${_id}.${extension}`;
    const resultUpload = path.join(avatarsDir, filename);
    await fs.rename(tempUpload, resultUpload);
    await Jimp.read(resultUpload)
      .then((avatar) => {
        return avatar.resize(250, 250).write(resultUpload);
      })
      .catch((error) => {
        console.error(error);
      });
    const avatarURL = path.join("avatars", filename);
    await User.findByIdAndUpdate(_id, { avatarURL });
    res.json({
      user: {
        avatarURL,
      },
      message: "avatar has been changed",
    });
  } catch (error) {
    await fs.unlink(req.file.path);
    throw error;
  }
};

module.exports = updateAvatar;
