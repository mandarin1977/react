import './App.css';
import React from 'react';
import $ from "jquery";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends React.Component{

componentDidMount(){

}

  render(){
    return (
      <div className="App">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }  
}

export default App;
