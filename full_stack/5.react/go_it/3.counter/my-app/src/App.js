import logo from './logo.svg';
import './App.css';
import { Counter } from "./components/Counter";
import {Colors} from "./components/Colors"

function App() {
    return (
        <div className="App">
            <Counter />
            <hr/>
            <Colors/>
        </div>
    );
}

export default App;