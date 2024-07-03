/* 
comments [icon: comment] {
  video ObjectId videos
  owner ObjectId users
  content string
  createdAt Date
  updatedAt Date
}
*/

import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const commentSchema = new Schema(
  {
    video: {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Add mongoose paginate plugin for commentSchema to enable pagination for comments in the future (e.g., /comments?page=1&limit=10)
commentSchema.plugin(mongooseAggregatePaginate);

export const Comment = mongoose.model("Comment", commentSchema);
