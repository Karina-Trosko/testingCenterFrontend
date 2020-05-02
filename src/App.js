// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import axios from 'axios';

// class App extends React.Component {
  

//   componentDidMount() {
// axios.get('/').then(r => console.log(r))
//   }

  

//   render() {
//     return (

//         <h1>Привет, мир!</h1>
 
//     );
//   }
// }

// export default App;
import React, {Component, useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './modules/header';
import { testApi } from './services/api';
// import { store } from './index';
import { changecatalogContent } from './actions/catalogContent';
import actions from './actions';

import './actions'
import MainCatalog from './modules/catalog/catalog';
import { Separator } from './components';
import { AddTest } from './modules/addTest';

function App () {
    const [message, setMessage] = useState("");

    useEffect(() => {
        // fetch('/api/hello')
        //     .then(response => response.text())
        //     .then(message => {
        //         setMessage(message);
        //         axios.get('/api/users/1').then(r => {console.log(r); console.log('data: ', r.data);})
        //     });
        //     axios.post('/api/test/update', {
        //         description: ''
        //       }).then(r => {console.log(r)}
testApi.getTests((r)=>{actions.changecatalogContent(r);}, (r)=>{ return r.data[0].map(el => ({ ...el, itemType: 'test'}))});
//testApi.addTest();
    },[])
    return (
        <div className="App">
            <Header/>
            <Separator />
            {/* <MainCatalog /> */}
            <AddTest />
        </div>
    )
}

export default App;