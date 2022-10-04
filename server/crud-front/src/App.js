
import './App.css';
import {Switch,Route} from "react-router-dom";
import {ToastContainer}from "react-toastify";
import Crud from "./crud";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer/>
        <switch>
<Route exact path="/" component={Crud}/>
        </switch>
     
    </div>
  );
}

export default App;
