
import React from 'react';

class ElementCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: ["mango", "orange", "mango", "apple", "apple", "pineapple", "apple"],
      count: {}
    };
  }

  componentDidMount() {
    this.countElements();
  }

  countElements = () => {
    const { array } = this.state;
    const count = {};
    array.forEach(element => {
      count[element] = (count[element] || 0) + 1;
    });
    this.setState({ count });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h2>Element Count:</h2>
        <ul>
          {Object.keys(count).map(element => (
            <li key={element}>
              {element}: {count[element]}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ElementCounter;