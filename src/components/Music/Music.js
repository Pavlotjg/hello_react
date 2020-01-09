import React from 'react';
import '../../App.scss';
import {createMusicAlbum, deleteMusicAlbum, saveMusicAlbum} from "../../api/api";


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

  componentWillReceiveProps(nextProps) {
    this.setState({
      musicAlbums: nextProps.musicAlbums
    });
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
      musicAlbums: musicAlbums
    });
  }

  saveNewAlbumsMethod() {
    const {musicAlbums} = this.state;
    musicAlbums.forEach((elem, index) => {
      elem.id ? saveMusicAlbum(elem): createMusicAlbum(elem).then(
        album => {
          musicAlbums[index].id = album.id;
          this.setState({musicAlbums: musicAlbums})
        }
      )
    });
  }

  deleteAlbum(event) {
    const {musicAlbums} = this.state;
    const {name} = event.target;
    const { id } = musicAlbums[name] || {};
    deleteMusicAlbum(id)
      .then(
        () => {
          musicAlbums.splice(name, 1);
          this.setState({
            musicAlbums: musicAlbums
          });
        });
  }

  addAlbum(event){
    const { musicAlbums } = this.state;
    const {value, name} = event.target;

    musicAlbums.push({id: '', title: ''});
    this.setState({
      musicAlbums: musicAlbums
    })
  }

  renderInputs() {
    const {musicAlbums} = this.state;
    let inputs;
    inputs = (musicAlbums || []).map((elem, index) => {
      return (
        <div key={index}>
          Album: <input type="text" name={index} value={elem.title} onChange={this.fullfillState}/>
          <button  className='musicDeleteButton' name={index} onClick={this.deleteAlbum}>X</button>
        </div>
      )
    });
    return inputs;
  }

  render() {
    return (
      <div className='main-Grid-Music'>
        <div >
          {this.renderInputs()}
        </div>
        <div>
          <button  className='musicSaveButton' onClick={this.addAlbum}>Add+</button>
        </div>
        <div>
          <button  className='musicSaveButton' onClick={this.saveNewAlbumsMethod}>Save</button>
        </div>
        <div className='musicVideoContainer'>
          <iframe src="https://www.youtube.com/embed/BCPiBWrIaSI" allowFullScreen='allowFullScreen'
                 frameBorder='0' >
          </iframe>
        </div>

      </div>
    )
  }
}


export default Music;