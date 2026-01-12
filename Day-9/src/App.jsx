import './App.css'
import { Card } from './components/Card';

function App() {
  return (
    <div className='card-container'>
      <Card title="Ben 10" description="cartoon network cartoon"/>
      <Card title="Shinchan" description='hungama cartoon'/>
      <Card title='doraemon' description='disney cartoon'/>

    </div>
  );
};

export default App
