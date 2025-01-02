import "./App.css";
import Rushi from "./components/Rushi";
import TestComponent2 from "./components/TestComponent";

function App() {
  return (
    <>
      <TestComponent></TestComponent>
      <h1>Rushikesh</h1>
      {/* adding from TestComponent file */}
      <TestComponent2></TestComponent2>
      <Rushi></Rushi>
    </>
  );
}

// creating first component
//component always start with Capital letter

function TestComponent() {
  return <h2 className="test1">Hello this is test component 1</h2>;
}

export default App;
