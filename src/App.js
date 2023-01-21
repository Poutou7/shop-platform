import './App.css';
import './App-components/app.css';
import './Framework.css'


import Landing from './App-components/Landing';
import Know from './App-components/Know';
import Start from './App-components/Start';
import Choose from './App-components/choosing/Choose';
import Plans from './App-components/plans/Plans';
import Previews from './App-components/previews/Previews';
import Provisions from './App-components/Provisions';
import Applications from './App-components/Applications';

function App() {
  return (
    <div>
      <div className='landing-landing'>
        <div className="container landing flex">
          <Landing />
        </div>
      </div>
      <div className="container">
        <Know />
      </div>
      <div className="container">
        <Start />
      </div>
      <div className="content container">
        <Choose />
      </div>
      <div className="content container">
        <Plans />
      </div>
      <Previews />
      <div className="provisions">
        <div className="content container">
          <h1 className="title-head">ماذا يقول المستخدمون عنا ؟</h1>
          <Provisions />
        </div>
      </div>
      <div className="apps container flex-between">
        <Applications />
      </div>
    </div>
  );
}

export default App;
