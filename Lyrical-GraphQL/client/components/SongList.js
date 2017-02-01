import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchSongs';

class SongList extends Component {
  onSongDelete(id) {
    this.props.mutate({ variables: { id } });
  }

  renderSongs() {
    return this.props.data.songs.map(song => {
      return (
        <li key={song.id} className="collection-item">
          {song.title}
          <i
            className="material-icons"
            onClick={() => this.onSongDelete(song.id)}
          >
            delete
          </i>
        </li>
      );
    });
  }

  render() {
    if (this.props.data.loading) { return <div>Loading...</div>; }

    return (
      <div>
        <ul className="collection">
          {this.renderSongs()}
        </ul>
        <Link
          to="/songs/new"
          className="btn-floating btn-large red right"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(
  graphql(query)(SongList)
);
