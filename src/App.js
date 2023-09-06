import './App.css';
import Header from './Header';
import Cardlist from './Cardlist';
import Tutoriallist from './Tutoriallist';
import Footer from './Footer';
import Signup from './Signup';

function App() {
  return (
    <div>
      <Header />
      
      <div className="image1">
      <div className='immage1'>
        <img src="./img/image1.avif" alt="image" className='logo' />
      </div>
      </div>
      <div className='center'>
        <h1>Featured Articles</h1>
      </div>
      <Cardlist />
      <div className='center'>
      <h1>Featured Tutorials</h1>
      </div>
      <Tutoriallist />
      <Signup />
      <Footer />
    
    
    </div>
  );
}

export default App;
    
    
   




