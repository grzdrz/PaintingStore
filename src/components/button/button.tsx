import React from 'react';
import './button.scss';

interface IProps {
  text?: string,
  withCheckMark?: boolean,
  disabled?: boolean,
  handleClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
}

function Button(props: IProps) {
  const {
    text = '',
    withCheckMark = false,
    disabled = false,
    handleClick = () => { },
  } = props;

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    handleClick(event);
  }

  return (
    <button
      className={`button ${withCheckMark ? 'button_with-check-mark' : ''}`}
      disabled={disabled}
      type='submit'
      onClick={handleButtonClick}
    >
      {withCheckMark ? <span className='button__check-mark'>check</span> : null}
      <span className='button__text'>{text}</span>
    </button>
  );
}

export default Button;
