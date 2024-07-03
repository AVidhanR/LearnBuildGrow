/*
playlists [icon: library] {
  id string pk
  owner ObjectId users
  videos ObjectId[] videos
  name string
  description string
  createdAt Date
  updatedAt Date
}
*/

import mongoose, { Schema } from "mongoose";

const playlistSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    videos: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
  },
  { timestamps: true }
);

export const Playlists = mongoose.model("Playlists", playlistSchema);
