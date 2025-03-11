import { MainComponent } from "@/components/MainComponent/MainComponent";
import { VideoProvider } from "@/context/VideoContext";

export default function Home() {
  return (
    <VideoProvider>
      <MainComponent />
    </VideoProvider>
  );
}
