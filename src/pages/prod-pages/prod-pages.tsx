import '../base/base';
import React from 'react';
import ReactDOM from 'react-dom';
import TestComponent from '../../components/test-component/test-component';
import './prod-pages.scss';

class App extends React.Component {
  render() {
    return (
      <div className='prod-pages__test-component'>
        <TestComponent />
      </div>
    );
  }
}

const appContainer = document.querySelector('.prod-pages');
ReactDOM.render(<App />, appContainer);