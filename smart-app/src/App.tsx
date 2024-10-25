import "./App.css";
import UseClipboard from "./components/hooks/useClipboard";
import UseCountDown from "./components/hooks/UseCountDown";

function App() {
  return (
    <>
      <UseCountDown />
      <UseClipboard />
    </>
  );
}

export default App;
