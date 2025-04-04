
import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {

  return(
    <>
      <h1 className='bg-gray-600 p-4'>
        React Router
      </h1>
      <Header />
      <Footer />
      <Home />
      
    </>
  );
}

export default App
