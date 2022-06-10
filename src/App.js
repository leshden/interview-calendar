import './App.css';
import Header from './components/header/Header'
import CalendarPanel from './components/calendar-panel/CalendarPanel';

function App() {
  return (
    <div className="App">
      <div className='calendar-container'>
        <Header />
        <CalendarPanel />
      </div>
    </div>
  );
}

export default App;
