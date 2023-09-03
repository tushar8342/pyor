import './App.css';
import Dashboard from './components/Dashboard';
import LineChart from './components/LineChart';
import LocalStorageDropdown from './components/LocalStorageDropdown';

const layout = [
  { i: 'chart', x: 0, y: 0, w: 6, h: 5 },
  { i: 'dropdown', x: 6, y: 0, w: 6, h: 1 },
];

const options = [
  { label: 'Ethereum', value: 'ethereum' },
  { label: 'Dogecoin', value: 'dogecoin' },
  { label: 'Solana', value: 'solana' },
];

function App() {
  return (
    <div className="App">

      <Dashboard layout={layout}>
        <div key="chart">
          <LineChart />
        </div>
        <div key="dropdown">
          <LocalStorageDropdown options={options} initialValue={options[0]} onChange={() => { }} />
        </div>
      </Dashboard>

    </div>
  );
}

export default App;
