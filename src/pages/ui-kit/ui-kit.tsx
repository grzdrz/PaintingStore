import '../base/base';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../../components/button/button';
import './ui-kit.scss';

function App() {
  return (
    <>
      <p className='ui-kit__font-demos'>
        <span className='ui-kit__font-demo'>Шрифт: Merriweather</span>
        <span className='ui-kit__font-demo'>H1 - 24px bold, int. 36</span>
        <span className='ui-kit__font-demo'>H2 - 18px regular, int. 27</span>
        <span className='ui-kit__font-demo'>H3 - 16px bold, int. 24</span>
        <span className='ui-kit__font-demo'>H4 - 14px bold, int. 21</span>
        <span className='ui-kit__font-demo'>H5 - 14px regular, int. 21</span>
        <span className='ui-kit__font-demo'>H6 - 14px light, int. 21</span>
      </p>
      <div className='ui-kit__buttons-demo'>
        <p className='ui-kit__buttons-title'>Кнопки</p>
        <div className='ui-kit__buttons'>
          <div className='ui-kit__button'>
            <Button
              text='Нормал'
            />
          </div>
          <div className='ui-kit__button'>
            <Button
              text='Ховер'
            />
          </div>
          <div className='ui-kit__button'>
            <Button
              text='Disable'
              disabled
            />
          </div>
          <div className='ui-kit__button'>
            <Button
              text='В корзине'
              withCheckMark
            />
          </div>
        </div>
      </div>
    </>
  );
}

const appContainer = document.querySelector('.ui-kit');
ReactDOM.render(<App />, appContainer);