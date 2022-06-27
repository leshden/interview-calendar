import './App.css';
import Header from './components/header/Header'
import CalendarPanel from './components/calendar-panel/CalendarPanel';
import TodosPanel from './components/todos-panel/TodosPanel';
import FooterPanel from './components/footer-panel/FooterPanel';

function App() {
  return (
    <div className="App">
      <div className='calendar-container'>
        <TodosPanel />
      </div>
    </div>
  );
}

export default App;
