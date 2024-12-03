import { ReactNode } from "react";
import { SpeechBubbleTail } from "./components/SpeechBubbleTail";
import "./speech-bubble.css";

const SpeechBubble = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex-initial speech-bubble max-w-80">
      <div className="speech-bubble__tail">
        <SpeechBubbleTail />
      </div>
      <div className="speech-bubble__content">{children}</div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col gap-20 items-center justify-center h-[100vh] main-bg">
      <SpeechBubble>
        This is a border-image speech bubble test, it's a really good test. To
        have a test like this is a good thing indeed. If you're not sure if this
        is a good test or not, make sure to take a good look at it, and judge it
        as hard as you possibly can.
      </SpeechBubble>
      <SpeechBubble>A smaller test of the speech bubble</SpeechBubble>
      <SpeechBubble>A</SpeechBubble>
    </div>
  );
}
