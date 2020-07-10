import React from "react";


// we can use a function component (its for presentation, since we don't need any state here.)

function Story(props) {
  return (
    <li><a href={props.url}>{props.title}</a></li>
  );
}

export default Story;


// class Story extends React.Component {
//   constructor(props) {
//     super(props);
//   };

//   render() {
//     return (
//     <li><a href={this.props.url}>{this.props.title}</a></li>
//     );
//   }
// };