import React from 'react';
import '../../App.scss';
import {createMusicAlbum, deleteMusicAlbum, saveMusicAlbum} from "../../api/api";
import {connect} from 'react-redux';


class Music extends React.Component {
  constructor(props) {
    super(props);
    const {musicAlbums = []} = this.props;
    this.state = {
      musicAlbums: [...musicAlbums]
    };
    this.renderInputs = this.renderInputs.bind(this);
    this.fullfillState = this.fullfillState.bind(this);
    this.saveNewAlbumsMethod = this.saveNewAlbumsMethod.bind(this);
    this.deleteAlbum = this.deleteAlbum.bind(this);
    this.addAlbum = this.addAlbum.bind(this);
  }

  static getDerivedStateFromProps(newProps, state) {
    if(state.initialMusicAlbums !== newProps.musicAlbums) {
      return {
        initialMusicAlbums: newProps.musicAlbums,
        musicAlbums: [...newProps.musicAlbums]
      };
    }

    return null;
  }

  fullfillState(event) {
    const {musicAlbums} = this.state;
    const {value, name} = event.target;
    const newAlbum = {
      ...musicAlbums[name],
      title: value
    };
    musicAlbums.splice(name, 1, newAlbum);
    this.setState({
      musicAlbums: [...musicAlbums]
    });
  }

  saveNewAlbumsMethod() {
    const {dispatch} = this.props;
    const {musicAlbums} = this.state;
    musicAlbums.forEach((elem, index) => {
      elem.id ? saveMusicAlbum(elem) : createMusicAlbum(elem).then(
        album => {
          musicAlbums[index].id = album.id;
          dispatch({
            type: 'UPDATE_MUSIC_ALBUMS',
            payload: [...musicAlbums]
          })
        }
      )
    });
  }

  deleteAlbum(event) {
    const {dispatch} = this.props;
    const {musicAlbums} = this.state;
    const {name} = event.target;
    const {id} = musicAlbums[name] || {};
    deleteMusicAlbum(id)
      .then(
        () => {
          musicAlbums.splice(name, 1);
          dispatch({
            type: 'UPDATE_MUSIC_ALBUMS',
            payload: [...musicAlbums]
          })
        });
  }

  addAlbum() {
    const {dispatch} = this.props;
    const {musicAlbums} = this.state;
    musicAlbums.push({id: '', title: ''});
    dispatch({
      type: 'UPDATE_MUSIC_ALBUMS',
      payload: [...musicAlbums]
    })
  }

  renderInputs() {
    const {musicAlbums} = this.state;
    let inputs;
    inputs = (musicAlbums || []).map((elem, index) => {
      return (
        <div key={index}>
          Album: <input type="text" name={index} value={elem.title} onChange={this.fullfillState}/>
          <button className='musicDeleteButton' name={index} onClick={this.deleteAlbum}>X</button>
        </div>
      )
    });
    return inputs;
  }

  render() {
    return (
      <div className='main-Grid-Music'>
        <div>
          {this.renderInputs()}
        </div>
        <div>
          <button className='musicSaveButton' onClick={this.addAlbum}>Add+</button>
        </div>
        <div>
          <button className='musicSaveButton' onClick={this.saveNewAlbumsMethod}>Save</button>
        </div>
        <div className='musicVideoContainer'>
          <iframe src="https://www.youtube.com/embed/BCPiBWrIaSI" allowFullScreen='allowFullScreen'
                  frameBorder='0'>
          </iframe>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  }
}

function mapStateToProps(state) {
  return {
    musicAlbums: state.musicAlbums
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Music);

