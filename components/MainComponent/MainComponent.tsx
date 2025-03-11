"use client";

import { CaptionEditor } from "@/components/CaptionEditor";
import { VideoPlayer } from "@/components/VideoPlayer";
import { VideoUploader } from "@/components/VideoUploader";
import { useVideoContext } from "@/context/VideoContext";

export const MainComponent = () => {
  const { videoUrl } = useVideoContext();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Video Captioning Tool</h1>
      <VideoUploader />
      {videoUrl && (
        <div className="flex gap-4 flex-col">
          <VideoPlayer />
          <CaptionEditor />{" "}
        </div>
      )}
    </div>
  );
};
