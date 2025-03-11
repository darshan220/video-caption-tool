"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useVideoContext } from "@/context/VideoContext";

export const CaptionEditor = () => {
  const { captions, setCaptions } = useVideoContext();
  const [currentCaption, setCurrentCaption] = useState<string>("");
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");

  const handleAddCaption = () => {
    if (currentCaption && startTime && endTime) {
      setCaptions([...captions, { text: currentCaption, startTime, endTime }]);
      setCurrentCaption("");
      setStartTime("");
      setEndTime("");
    }
  };

  return (
    <div className="mb-4 flex flex-col gap-4">
      <div className="flex gap-4 lg:flex-row flex-col">
        <div>
          <span>Enter caption:</span>
          <Input
            type="text"
            placeholder="Enter caption"
            value={currentCaption}
            onChange={(e) => setCurrentCaption(e.target.value)}
          />
        </div>
        <div>
          <span>Start Time:</span>
          <Input
            type="time"
            value={startTime}
            onChange={(e) => {
              setStartTime(e.target.value);
            }}
            step="1"
          />
        </div>
        <div>
          <span>End Time:</span>
          <Input
            type="time"
            step="1"
            value={endTime}
            onChange={(e) => {
              setEndTime(e.target.value);
            }}
          />
        </div>
      </div>
      <Button onClick={handleAddCaption} className="mt-2 cursor-pointer" variant="default">
        Add Caption
      </Button>
      {captions.length > 0 ? (
        <div>
          <h2 className="text-lg font-semibold">Captions</h2>
          <ul>
            {captions.map((caption, index) => (
              <li key={index} className="p-2 border-b">
                [{caption.startTime} - {caption.endTime}]: {caption.text}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};
