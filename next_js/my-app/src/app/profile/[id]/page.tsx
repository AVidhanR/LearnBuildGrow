"use client";
import React from "react";

export default function UserProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>

      <hr />

      <p className="text-4xl">
        Profile Page{" "}
        <span className="p-2 ml-2 rounded bg-orange-400 text-3xl text-black">
          {params.id}
        </span>
      </p>
    </div>
  );
}
