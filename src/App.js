import React from 'react';
import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';

function App() {

  let firstVariable = "Hello world";

  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            {firstVariable}
          </h1>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <section>
          <Componente msg="Functional component by props" />
          <hr></hr>
          <Propiedades
            string="This is a string"
            number={19}
            boolean={false}
            array={[1, 2, 3, 4]}
            object={{ name: "jhonatan", email: "001010100@gmail.com" }}
            elementReact={<i>This is a react element</i>}
            function={num => num * num}
            reactComponent={<Componente msg="component send by prop" />}
          />
        </section>
      </header>

    </div>
  );
}

export default App;
