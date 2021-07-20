import React from "react";
import { connect } from "react-redux";
import { selectedSong } from "../actions";

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.name}>
          <div className="right floated content">
            <div
              onClick={() => this.props.selectedSong(song)}
              className="ui button primary"
            >
              Select
            </div>
          </div>
          <div className="Content">{song.name}</div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}
const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectedSong })(SongList);
