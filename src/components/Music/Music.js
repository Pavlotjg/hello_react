import React from 'react';
import s from './Music.module.css';
import {createMusicAlbum, deleteMusicAlbum, saveMusicAlbum} from "../../api/database";


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
          <button className={s.deleteButton} name={index} onClick={this.deleteAlbum}>X</button>
        </div>
      )
    });
    return inputs;
  }

  render() {
    return (
      <div className={s.mainWindowProfile}>
        <div className={s.inputAll}>
          {this.renderInputs()}
        </div>
        <div>
          <button onClick={this.addAlbum}>Add+</button>
        </div>
        <div>
          <button onClick={this.saveNewAlbumsMethod}>Save</button>
        </div>
      </div>
    )
  }
}


export default Music;