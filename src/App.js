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
import React, { Component, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './modules/header';
import { testApi } from './services/api';
import actions from './actions';
import './actions'
import MainCatalog from './modules/catalog/catalog';
import { Separator } from './components';
import { AddTest } from './modules/addTest';
import { SignIn, SignUp } from './modules/signIn';
import { Authorization } from './modules/signIn/authorization';

function App () {
    const [route, setRoute] = useState("tests");
const setRouteHandler = (v) => { setRoute(v);};
    useEffect(() => {
        testApi.getTests((r) => { actions.changecatalogContent(r); }, (r) => { return r.data[0].map(el => ({ ...el, itemType: 'test' })) });
        testApi.getContent();
    }, [])
    const routs = { 
        tests: (<MainCatalog />),
        addTest: (<AddTest />),
        authorization: (<Authorization />),
     };
    return (
        <div className="App">
            <Header clickHandler={setRouteHandler}/>
            <Separator />
           {routs[route]}
        </div>
    )
}

export default App;