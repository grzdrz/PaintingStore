import React from 'react';
import './button.scss';

interface IProps {
  text: string,
  withCheckMark?: boolean,
  disabled?: boolean,
}

function Button(props: IProps) {
  const { text, withCheckMark, disabled } = props;

  return (
    <button
      className={`button ${props.withCheckMark ? 'button_with-check-mark' : ''}`}
      disabled={disabled}
    >
      {props.withCheckMark ? <span className='button__check-mark'>check</span> : null}
      <span className='button__text'>{props.text}</span>
    </button>
  );
}

export default Button;
