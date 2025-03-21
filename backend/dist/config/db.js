"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const UserSchema = new mongoose_1.default.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});
exports.UserModel = mongoose_1.default.model("User", UserSchema);
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/paytm";
mongoose_1.default.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MONGODB CONNECTED"))
    .catch((err) => {
    console.error("MONGODB connectd error ", err);
    process.exit(1);
});
exports.default = mongoose_1.default;
