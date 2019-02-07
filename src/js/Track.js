import React from "react";

class Track extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <h3>{name}</h3>
      </div>
    );
  }
}

export default Track;
