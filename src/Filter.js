import React from "react";
import "./Filter.css";
import NumericInput from "react-numeric-input";

// one function prop required to change the state to main App component
class Filter extends React.Component {
  static defaultProps = {
    Submit() {}
  };

  // initializing states of form with present states App component, so if there is some filter, this will reflect that value
  constructor(props) {
    super(props);
    this.state = { year: props.year, launch: props.launch, land: props.land };
    this.handleChangeBool = this.handleChangeBool.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Some function to handle events
  handleChangeBool(event) {
    this.setState({ [event.target.name]: event.target.checked });
  }
  handleChangeNumber(event) {
    this.setState({ year: event });
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.year !== null) {
      if (this.state.year < 2006 || this.state.year > 2021) {
        if (this.state.year < 2006) {
          this.setState({ year: 2006 },()=>this.props.Submit({...this.state}));
        } else {
          this.setState({ year: 2021 },()=>this.props.Submit({...this.state}));
        }
      } else {
        this.props.Submit({...this.state})
      }
    } else {
      this.props.Submit({...this.state})
    }
  }

  // rendering final component
  render() {
    return (
      <section id="filter">
        <div className="box">
          <div className="content">
            <form onSubmit={this.handleSubmit}>
              <label class="Year">
                Launch Year :{" "}
                <NumericInput
                  name="year"
                  min={2006}
                  max={2021}
                  value={this.state.year}
                  onChange={this.handleChangeNumber}
                />
              </label>
              <label className="container">
                Successful Launch
                <input
                  type="checkbox"
                  name="launch"
                  checked={this.state.launch}
                  onChange={this.handleChangeBool}
                />
                <span className="checkmark"></span>
              </label>
              <label className="container">
                Successful Land
                <input
                  type="checkbox"
                  name="land"
                  checked={this.state.land}
                  onChange={this.handleChangeBool}
                />
                <span className="checkmark"></span>
              </label>
              <input type="submit" className="button" value="Filter" />
            </form>
          </div>
        </div>
      </section>
    );
  }
}

// Filter.prototype = {
//   year: propType.number.isRequired
// };

export default Filter;
