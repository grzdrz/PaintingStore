import React from 'react';
import './button.scss';

interface IProps {
  text: string,
  withCheckMark?: boolean,
  disabled?: boolean,
  handleClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
}

function Button(props: IProps) {
  const { text, withCheckMark, disabled } = props;

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    props.handleClick(event);
  }

  return (
    <button
      className={`button ${props.withCheckMark ? 'button_with-check-mark' : ''}`}
      disabled={disabled}
      onClick={handleButtonClick}
    >
      {props.withCheckMark ? <span className='button__check-mark'>check</span> : null}
      <span className='button__text'>{props.text}</span>
    </button>
  );
}

export default Button;
