
import SideBar from './side-bar/sideBar';
import './App.css';
import {Main} from './main/main';
import Center from './main/center';
import RightSideBar from './side-bar/rightSidebar';
import 'animate.css';
function App() {
  return (
    
    <div className='app' id='app'>
    <div className='sidebar'><SideBar /></div>
    <div className='main'>
      <Main />
      <Center />
      </div>
      <div className='right-sidebar'><RightSideBar /></div>
    </div>
    
  );
}

export default App;
