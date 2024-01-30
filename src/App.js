import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

function App() {
  return (
    <div className="main-app">
      <Header />
      <h2>Projects</h2>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
