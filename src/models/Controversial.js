import { Schema, model } from "mongoose";

const controversialSchema = new Schema(
  {
    name: String,
    description: String,
    category: String,
    picture: String,
    lastUpdated: Schema.Types.Mixed,
    votes: {
      positive: Number,
      negative: Number,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Controversial", controversialSchema);