"use client";

import React from "react";
import { Input } from "@/components/ui/input";

import { useState } from "react";
import { useVideoContext } from "@/context/VideoContext";

export const VideoUploader = () => {
  const { setVideoUrl } = useVideoContext();
  const [activeTab, setActiveTab] = useState<"url" | "file">("url");

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type.startsWith("video/")) {
        const videoURL = URL.createObjectURL(file);
        setVideoUrl(videoURL);
      } 
    }
  };

  return (
    <div className="mb-4 w-full">
      <div className="flex border-b">
        <button
          className={`px-4 py-2 w-1/2 text-center cursor-pointer ${
            activeTab === "url"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => {
            setVideoUrl("");
            setActiveTab("url");
          }}
        >
          Video URL
        </button>
        <button
          className={`px-4 py-2 w-1/2 text-center cursor-pointer ${
            activeTab === "file"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => {
            setVideoUrl("");
            setActiveTab("file");
          }}
        >
          Video File
        </button>
      </div>

      <div className="p-4 border rounded-b-lg">
        {activeTab === "url" ? (
          <div>
            <span className="block mb-2 text-gray-700">Enter Video URL:</span>
            <Input
              type="text"
              placeholder="Enter video URL"
              className="w-full p-2 border rounded"
              onChange={(e) => setVideoUrl(e.target.value)}
            />
          </div>
        ) : (
          <div>
            <span className="block mb-2 text-gray-700">Upload Video File:</span>
            <Input
              type="file"
              accept="video/*"
              className="w-full p-2 border rounded"
              onChange={handleFileUpload}
            />
          </div>
        )}
      </div>
    </div>
  );
};
