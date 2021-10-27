import Sidebar from './client/Sidebar';
import Main from "./client/Main";

import "./shared/styles/common.css"

function App() {
  return (
    <div className="page">
     <Sidebar />
     <Main />
    </div>
  );
}

export default App;
