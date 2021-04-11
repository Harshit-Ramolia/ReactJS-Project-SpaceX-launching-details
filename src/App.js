import React from "react";
import "./App.css";
import $ from "jquery";       // Only for API calling, can be changed to Axios

import Header from "./Header";
import Filter from "./Filter";
import List from "./List";

class App extends React.Component {

  // constructor to initializing props and state
  constructor(props) {
    super(props);
    let list = [];

    // List of data and all filters
    this.state = {
      list,
      year: null,
      launch: false,
      land: false,
    };
    this.Submit = this.Submit.bind(this);
  }

  // Calling API when documet is ready or component is mounted
  componentDidMount() {
    $.getJSON("https://api.spacexdata.com/v3/launches?limit=100")
      .done((list) => this.setState({ list: list }))
      .fail((error) => console.log(error));
  }

  // Function to submit filter form and calling API accordingly
  Submit(object) {
    var url = "https://api.spacexdata.com/v3/launches?limit=100";
    this.setState({ ...object }, () => {
      if (this.state.year !== null) {
        url = "".concat(url, "&launch_year=", this.state.year);
      }
      if (this.state.launch === true) {
        url = "".concat(url, "&launch_success=true");
      }
      if (this.state.land === true) {
        url = "".concat(url, "&land_success=true");
      }
      $.getJSON(url)
        .done((list) => this.setState({ list: list }))
        .fail((error) => console.log(error));
    });
  }

  // Rendering all components
  render() {
    return (
      <div className="App">
        <Header />
        <Filter
          year={this.state.year}
          launch={this.state.launch}
          land={this.state.land}
          Submit={this.Submit}
        />
        <List list={this.state.list} />
      </div>
    );
  }
}

export default App;
