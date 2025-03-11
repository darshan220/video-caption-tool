"use client";

import React, { useEffect, useRef } from "react";
import { formatTimeToSeconds } from "@/utils/dateFunctions";
import { useVideoContext } from "@/context/VideoContext";

export const VideoPlayer = () => {
  const { videoUrl, captions } = useVideoContext();
  const trackRef = useRef<HTMLTrackElement | null>(null);

  useEffect(() => {
    if (!captions.length) return;

    // Generate VTT content
    const vttContent = [
      "WEBVTT",
      ...captions.map(
        (caption, index) =>
          `${index + 1}\n${formatTimeToSeconds({
            value: caption.startTime,
          })} --> ${formatTimeToSeconds({ value: caption.endTime })}\n${
            caption.text
          }\n`
      ),
    ].join("\n\n");

    // Update track source with VTT content
    if (trackRef.current) {
      const blob = new Blob([vttContent], { type: "text/vtt" });
      trackRef.current.src = URL.createObjectURL(blob);
    }
  }, [captions]);

  return (
    <video controls className="w-full lg:w-[61%] lg:h-[522px]">
      <source src={videoUrl} type="video/mp4" />
      <track
        kind="captions"
        ref={trackRef}
        srcLang="en"
        label="English"
        default
      />
    </video>
  );
};
