import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./News/News";

const App = (props) => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={"/news"} element={<News news={props.news}/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;