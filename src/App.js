import './App.css';
import Header from './components/header/Header'
import CalendarPanel from './components/calendar-panel/CalendarPanel';
import TodoTable from './components/todo-table/TodoTable';
import FooterPanel from './components/footer-panel/FooterPanel';

function App() {
  return (
    <div className="App">
      <div className='calendar-container'>
        <Header />
        <CalendarPanel />
        <TodoTable />
        <FooterPanel />
      </div>
    </div>
  );
}

export default App;
