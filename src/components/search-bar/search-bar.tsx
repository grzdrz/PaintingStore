import React from 'react';
import Button from '../button/button';
import './search-bar.scss';

interface IProps {
  title?: string,
  placeholder?: string,
  value?: string,
}

class SearchBar extends React.Component<IProps> {
  render() {
    const {
      title = '',
      placeholder = 'Поиск по названию картины',
      value = '',
    } = this.props;
    return (
      <div className='search-bar'>
        {title ? <p className='search-bar__title'>{title}</p> : null}
        <form className='search-bar__container'>
          <input
            className='search-bar__input'
            placeholder={placeholder}
            defaultValue={value}
          />
          <div className='search-bar__button'>
            <Button
              text='Найти'
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
