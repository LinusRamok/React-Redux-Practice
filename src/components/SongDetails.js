import React from "react";
import { connect } from "react-redux";
class SongDetails extends React.Component {
  render() {
    return (
      <div>
        <h1>Song Deatils</h1>
        <div>
          <div>Title: {this.props.name}</div>

          <div>Duration: {this.props.duration}</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return state.selectedSong;
};
export default connect(mapStateToProps)(SongDetails);
