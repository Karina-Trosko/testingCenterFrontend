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
import axios from 'axios';

function App () {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch('/api/hello')
            .then(response => response.text())
            .then(message => {
                setMessage(message);
                axios.get('/api/users/1').then(r => {console.log(r); console.log('data: ', r.data);})
            });
            axios.post('/api/test/update', {
                description: ''
              }).then(r => {console.log(r)})

    },[])
    return (
        <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">{message}</h1>
            </header>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
        </div>
    )
}

export default App;