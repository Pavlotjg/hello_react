import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getMusicAlbum, getUser} from "../../api/api";

class MyFetchingComponent extends Component {

  componentDidMount() {
    getMusicAlbum().then(musicAlbums => {
      const { dispatch } = this.props;
      dispatch({
        type: 'UPDATE_MUSIC_ALBUMS',
        payload: [...musicAlbums]
      });
    });

    getUser().then(user => {
      const { dispatch } = this.props;
      dispatch({
        type: 'UPDATE_USER',
        payload: {...user}
      })
    });

  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  }
}

export default connect(null, mapDispatchToProps)(MyFetchingComponent);
