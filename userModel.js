const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        password: {
            type: String
        },
        email: {
            type: String
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const modelUser = mongoose.model("users", userSchema);
module.exports = modelUser;