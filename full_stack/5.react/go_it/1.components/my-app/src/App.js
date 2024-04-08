import logo from './logo.svg';
import './App.css';
import {PageTitle} from "./components/PageTitle/PageTitle";
import {EventBoard} from "./components/EventBoard/EventBoard";
import upcomingEvents from "../src/upcoming-events.json";
import {Container} from "./App.styled";

function App() {
  return (
    <div className="App">
        <Container>
      <PageTitle text="24th Core Worlds Coalition Conference"/>
        <EventBoard events={upcomingEvents}/>
        </Container>
    </div>
  );
}

export default App;
