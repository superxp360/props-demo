import Greeting from './components/Greeting';
import './App.css';

const students = ['Andrew', 'Ariana', 'Cihan', 'Danny', 'John', 'Kevin D.', 'Kevin', 'Max', 'Lorenzo', 'Max', 'Pat', 'Sam', 'Yaslin']

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Props Demo</h1>
        {students.map(students => <Greeting key={students} name = {students} />)}
      </header>
    </div>
  );
}

export default App;
