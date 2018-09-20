import React, {Component} from 'react';
import SearchBar from '@opuscapita/react-searchbar';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      results: [],
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(query){
    this.setState({ results:"searching" })
    fetch(`https://api-adresse.data.gouv.fr/search/?q=${query}`)
      .then(results => results.json())
      .then(data => {
        this.setState({results:data});
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Full text search</h1>
        </header>
        <SearchBar
          onSearch={this.handleSearch}
          value={this.state.searchValue}
        />
      <pre>{JSON.stringify(this.state.results, null, 2)}</pre>
      </div>
    );
  }
}

export default App;
