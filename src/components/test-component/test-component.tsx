import compilationOptions from '../../compilationOptions';
import React from 'react';
import './test-component.scss';

interface IProps {

}

interface IState {
  flag: boolean,
}

class TestComponent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      flag: true
    };
  }

  handleButtonClick = () => {
    this.setState({
      flag: !this.state.flag,
    }
    );
  }

  render() {
    const { flag } = this.state;
    return (
      <div className='test-component'>
        <button
          className={`test-component__button test-component__button_color_${flag ? 'red' : 'blue'}`}
          onClick={this.handleButtonClick}
        >
          {flag ? 'RED' : 'BLUE'}
        </button >
        <img
          className='test-component__image'
          src={`${compilationOptions.forGithubPages ? '/Redsoft_Task' : ''}/src/components/test-component/images/${flag ? 'абрикос-1' : 'ананас-2'}.jpg`}
        />
      </div>
    );
  }
}

export default TestComponent;
