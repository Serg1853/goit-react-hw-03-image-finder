import { Component } from 'react';
import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchbarStyle,
} from './Searchbar.styled';
import { Notify } from 'notiflix';
import { paramsForNotify } from 'components/App';

export class Searchbar extends Component {
  state = {
    searchQuery: ``,
  };

  handleQueryChange = ({ currentTarget: { value } }) => {
    this.setState({ searchQuery: value.toLowerCase() });
  };

  handleSubmit = e => {
    const searchQuery = this.state.searchQuery.trim();
    e.preventDefault();

    if (searchQuery === '') {
      Notify.info('Enter your request, please!', paramsForNotify);
      return;
    }

    if (searchQuery === this.state.search) {
      Notify.info('Enter new request, please!', paramsForNotify);
      return;
    }
    this.props.onSubmit(searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <SearchbarStyle>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton>
            <span>Search</span>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            name="searchQuery"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchQuery}
            onChange={this.handleQueryChange}
          />
        </SearchForm>
      </SearchbarStyle>
    );
  }
}
