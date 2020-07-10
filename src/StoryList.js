import React from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import Story from "./Story";

class StoryList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { stories: [] };
    this.searchStories = this.searchStories.bind(this);
  };

  async componentDidMount() {
    const res = await axios.get(`https://hn.algolia.com/api/v1/search?query=react`);
    this.setState({ stories: res.data.hits });
  };

  async searchStories(term) {
    const res = await axios.get(`https://hn.algolia.com/api/v1/search?query=${term}`);
    this.setState({ stories: res.data.hits });
  }



  render() {
    return (
      <div>
        <SearchForm addTerm={this.searchStories} />
        <ul>
          {this.state.stories.map((story) => <Story key={story.objectID} title={story.title} url={story.url} />)}
        </ul>
      </div>

    );
  };
};

export default StoryList;


// this.addTerm = this.addTerm.bind(this);
// addTerm(data) {
//   this.setState({ term: data });
// }

// async componentWillUpdate() {
//   const res = await axios.get(`https://hn.algolia.com/api/v1/search?query=${this.state.term}`);
//   this.setState({ stories: res.data.hits });
// }