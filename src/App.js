import './App.css';
import {TestComponent} from "./component/TestComponent";
import {todos} from "./data";

function App() {
  return (
    <div className="App">
      <TestComponent list={todos}/>
    </div>
  );
}

export default App;
