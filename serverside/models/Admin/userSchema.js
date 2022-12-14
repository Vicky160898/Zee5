const { model, Schema } = require("mongoose");

const UserSchema = new Schema(
  {
    url: { type: String, required: true },
    title: { type: String, required: true },
    premium: { type: Boolean, default: false },
    category: { type: String , required:true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const TelevisionSchema = new model("zee" , UserSchema);

module.exports = TelevisionSchema;
