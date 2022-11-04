import React from "react";
import SearchBar from "./components/SearchBar";
import axios from "axios";

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
      headers: {
        Authorization:
          "Client-ID ICGtgey656l7QdcJhTxWwwOCsEtTAnOCOzCbFeg79Xs",
      },
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
