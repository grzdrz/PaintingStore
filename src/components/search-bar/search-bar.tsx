import React from 'react';
import ISearchBarAction from '../../storage/SearchBar/actions/ISearchBarAction';
import Button from '../button/button';
import './search-bar.scss';

interface IProps {
  title?: string,
  placeholder?: string,
  value?: string,
  searchBarAction?: (text: string) => ISearchBarAction,
}

function SearchBar(props: IProps) {
  const {
    title = '',
    placeholder = 'Поиск по названию картины',
    value = '',
  } = props;

  const handleButtonClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const input = form.querySelector('.search-bar__input') as HTMLInputElement;
    const text = input.value;
    props.searchBarAction(text);
  };

  return (
    <div className='search-bar'>
      {title ? <p className='search-bar__title'>{title}</p> : null}
      <form
        className='search-bar__container'
        onSubmit={handleButtonClick}
      >
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

export default SearchBar;
