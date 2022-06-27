import './App.css';
import Header from './components/header/Header'
import CalendarPanel from './components/calendar-panel/CalendarPanel';
import TodosPanel from './components/todos-panel/TodosPanel';
import FooterPanel from './components/footer-panel/FooterPanel';
import TodoTable from './components/todo-table/TodoTable';

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
