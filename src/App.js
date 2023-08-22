import './App.css';
import UserInfo from './components/UserInfo';

function App() {

  return (
    <div className="App">
      <div className='flex min-h-screen'>
        <div className='mx-auto container'>
          <UserInfo/>
        </div>
      </div>
    </div>
  );
}

export default App;