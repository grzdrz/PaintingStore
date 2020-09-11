import '../base/base';
import React from 'react';
import ReactDOM from 'react-dom';
import TestComponent from '../../components/test-component/test-component';
import './ui-kit.scss';

class App extends React.Component {
  render() {
    return (
      <div className='ui-kit__test-component'>
        <TestComponent />
      </div>
    );
  }
}

const appContainer = document.querySelector('.ui-kit');
ReactDOM.render(<App />, appContainer);