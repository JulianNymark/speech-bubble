import { SpeechBubbleTail } from "./components/SpeechBubbleTail";
import "./speech-bubble.css";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-[100vh] main-bg">
      <div className="flex-initial speech-bubble w-80">
        <div className="speech-bubble__tail">
          <SpeechBubbleTail />
        </div>
        <div className="speech-bubble__content">
          This is a border-image speech bubble test, it's a really good test. To
          have a test like this is a good thing indeed. If you're not sure if
          this is a good test or not, make sure to take a good look at it, and
          judge it as hard as you possibly can.
        </div>
      </div>
    </div>
  );
}
