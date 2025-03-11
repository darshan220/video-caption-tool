"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface VideoContextProps {
  videoUrl: string;
  setVideoUrl: (url: string) => void;
  captions: { text: string; startTime: string; endTime: string }[];
  setCaptions: (
    captions: { text: string; startTime: string; endTime: string }[]
  ) => void;
}

const VideoContext = createContext<VideoContextProps | undefined>(undefined);

export const VideoProvider = ({ children }: { children: ReactNode }) => {
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [captions, setCaptions] = useState<
    { text: string; startTime: string; endTime: string }[]
  >([]);

  return (
    <VideoContext.Provider
      value={{
        videoUrl,
        setVideoUrl,
        captions,
        setCaptions,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export const useVideoContext = () => {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error("useVideoContext must be used within a VideoProvider");
  }
  return context;
};
