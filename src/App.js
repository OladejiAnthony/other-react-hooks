import "./App.scss";
import GithubUsers from "./components/customHooks/GithubUsers";
//import Basics from "./components/useReducer/UseReducerBasics";
//import CountBasics from "./components/useReducer/CountBasics";
import Count from "./components/useReducer/count/Count";

function App() {
  return (
    <div>
      {/* <Count /> */}
      <GithubUsers />
    </div>
  );
}

export default App;
