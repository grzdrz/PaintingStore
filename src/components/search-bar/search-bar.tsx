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

class SearchBar extends React.Component<IProps> {
  public inputRef = React.createRef<HTMLInputElement>();
  /* constructor(props: IProps) {
    super(props);
  } */

  handleButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const text = this.inputRef.current.value;
    this.props.searchBarAction(text);
  }

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
            ref={this.inputRef}
            className='search-bar__input'
            placeholder={placeholder}
            defaultValue={value}
          />
          <div className='search-bar__button'>
            <Button
              text='Найти'
              handleClick={this.handleButtonClick}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
