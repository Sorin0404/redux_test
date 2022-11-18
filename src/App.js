import { createStore } from "redux";
import { Provider } from "react-redux";

import "./App.css";
import Left1 from "./pages/left/Left1";
import Right1 from "./pages/right/Right1";
import reducer from "./reducers/number";

const store = createStore(reducer);

function App() {
  return (
    <div id="container">
      <h1>Root</h1>
      <div id="grid">
        <Provider store={store}>
          <Left1 />
          <Right1 />
        </Provider>
      </div>
    </div>
  );
}

export default App;
