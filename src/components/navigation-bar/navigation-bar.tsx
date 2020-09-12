import React from 'react';
import './navigation-bar.scss';

interface IProps {
  list?: Array<{
    text: string,
    ref: string,
  }>;
}

function NavigationBar(props: IProps) {
  const {
    list = [
      { text: 'Каталог', ref: '#' },
      { text: 'Доставка', ref: '#' },
      { text: 'Оплата', ref: '#' },
      { text: 'Контакты', ref: '#' },
      { text: 'О галерее', ref: '#' },
    ]
  } = props;

  return (
    <nav className='navigation-bar'>
      <ul className='navigation-bar__list'>
        {list.map((item) => {
          return (
            <li className='navigation-bar__item' key={`navigation-bar__item_${item.text}`}>
              <a className='navigation-bar__item-ref' href={item.ref}>
                <span className='navigation-bar__item-ref-text'>{item.text}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavigationBar;
