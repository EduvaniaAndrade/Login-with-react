// import logo from './logo.svg';
import './App.css';
import ContentLeft from './Components/contentLeft';
import ContentRight from './Components/contentRight';
import MainContainer from './Components/mainContainer';

function App() {
  return (
    <div className="App">
      <ContentLeft/>
      <ContentRight/>
      <MainContainer/>
      {/* <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> 
       
      </header> */}
    </div>
  );
}

export default App;
