import React from 'react';
import compilationOptions from '../../compilationOptions';
import './logo.scss';

function Logo() {
  return (
    <div className='logo'>
      <img className='logo__image' src={`${compilationOptions.forGithubPages ? '/Redsoft_Task' : ''}/src/components/logo/images/logo.svg`} />
    </div>
  );
}

export default Logo;
