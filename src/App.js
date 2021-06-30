import { useState } from 'react';
import './App.css';

import FormFields from './components/FormFields';
import Silhouette from './components/Silhouette';

function App() {

  const [ activeField, setActiveField ] = useState( null );

  return <div className="app">
    <FormFields setActiveField={ setActiveField } />
    <Silhouette activeField={ activeField } />
  </div>;

}

export default App;
