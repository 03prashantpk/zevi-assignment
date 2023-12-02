import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Search />
    </div>
  )
}

export default App;