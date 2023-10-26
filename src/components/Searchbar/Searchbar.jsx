import { Component } from 'react';
import { StyledSearchbar } from './StyledSearchbar';

export default class Searchbar extends Component {
  state = {};
  render() {
    return (
      <StyledSearchbar>
        <form className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </StyledSearchbar>
    );
  }
}