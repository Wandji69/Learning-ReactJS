import React, { Component } from 'react';
import './App.css';
// import ParentComponent from './component/ParentComponent';
import UserGreeting from './component/UserGreeting';
// import FunctionClick from './component/FunctionClick';
// import ClassClick from './component/ClassClick';
// import EventBind from './component/EventBind';
// import Greet from './component/Greet'
// import Welcome from './component/Welcome'
// import Hello from './component/Hello'
// import Message from './component/Message'
// import Counter from './component/Counter'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <FunctionClick />
        <ClassClick /> */}
        {/* <EventBind /> */}
        {/* <Greet name="Djibrile" />
        <Greet name="Wandji" heroName='Waniccoll' />
        <Greet name="Ebako" />
        <Hello />
        <Welcome name='Colins chuwa' />
        <Message />
        <Counter /> */}
        {/* <ParentComponent /> */}
        <UserGreeting />
      </div>
    );
  }
}

export default App;
