import React from "react";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { formData: {} };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault(); 
    this.props.addTerm(this.state.formData.search);
    this.setState({ formData: {} });
  }

  handleChange(evt) {
    const { name, value } = evt.target;
    this.setState({ formData: { [name]: value } });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="search" value={this.state.formData.search} placeholder="Search" onChange={this.handleChange} />
        <button>Search!</button>
      </form>
    );
  }
};

export default SearchForm;