import { useCountdown } from "react-smart-utils";
import { SectionWrapper } from "../common/section-wrapper";

const UseCountDown = () => {
  const endTime = 100; // 60 seconds countdown
  const [
    timeLeft,
    { start, pause, resume, reset, increaseTime, decreaseTime },
  ] = useCountdown(endTime, {
    interval: 1000,
    format: "hh:mm:ss",
    onTick: () => {
      console.log(`Count is ${timeLeft} s`);
    },
    onComplete: () => {
      console.log("completed");
    },
  });

  return (
      <div>
        {timeLeft !== null ? (
          <p>
            Time remaining: {typeof timeLeft} {timeLeft} seconds
          </p>
        ) : (
          <p>Countdown is not active.</p>
        )}
        <div className="flex">
          <button onClick={start}>Start Countdown</button>

          <button onClick={pause}>Pause</button>
          <button onClick={reset}>reset</button>
          <button onClick={resume}>resume</button>
          <button onClick={() => increaseTime(60)}>Increase time by 60</button>
          <button onClick={() => decreaseTime(60)}>Dec time by 60</button>
        </div>
      </div>
  );
};

export default UseCountDown;
