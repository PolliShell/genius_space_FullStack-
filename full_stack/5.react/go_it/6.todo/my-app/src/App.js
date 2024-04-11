import logo from './logo.svg';
import './App.css';
import {Home} from "./components/screens/Home/Home";
import {Layout} from "./components/layout/Layout";


function App() {
  return (
    <div className="App">
        <Layout><Home/></Layout>

    </div>
  );
}

export default App;
