import './App.css';
import Header from './components/header/Header'
import CalendarPanel from './components/calendar-panel/CalendarPanel';
import TodoTable from './components/todo-table/TodoTable';
import FooterPanel from './components/footer-panel/FooterPanel';
import {OffsetScrollProvider} from './contexts/OffsetScrollContext';

function App() {
  return (
    <div className="App">
      <div className='calendar-container'>
        <Header />
        <OffsetScrollProvider>
          <CalendarPanel />
          <TodoTable />
        </OffsetScrollProvider>
        <FooterPanel />
      </div>
    </div>
  );
}

export default App;
