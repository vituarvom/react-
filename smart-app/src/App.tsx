import "./App.css";
import UseClipboard from "./components/hooks/UseClipboard";
import UseCountDown from "./components/hooks/UseCountdown";

function App() {
  return (
    <>
      <UseCountDown />
      <UseClipboard />
    </>
  );
}

export default App;
