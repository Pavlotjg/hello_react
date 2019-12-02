import React from 'react';
import '../../App.scss';
import {getCurrentUser} from '../../api/User';
import {getDataBase, saveDataBase} from '../../api/database';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {...this.props.user}
    };
    this.fullfillStateMethodName = this.fullfillStateMethodName.bind(this);
    this.saveProfile = this.saveProfile.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      user: nextProps.user
    });
  }

  fullfillStateMethodName(event) {
    const {user} = this.state;
    const {name, value} = event.target;
    const newUser = {...user, [name]: value};
    this.setState({user: newUser})
  }

  saveProfile() {
    console.log(this.state.user);
    const {user} = this.state;

    let promise = new Promise((resolve, reject) => {
      const {name, lastName, email, phone} = user;
      const result = user;
      if (!name || !lastName || !email || !phone) {
        reject();
      } else {
        resolve(result);
      }
    });
    setTimeout(() => {
      promise.then(
        result => {
          saveDataBase(result);
          console.log('Data was saved')
        });
      promise.catch(
        error => {
          alert('Please, fullfill all inputs');
        }
      )
    }, 400);
  }

  render() {
    console.log(this.state, this.props);
    const {name, lastName, phone, email, profileType} = this.state.user || {};

    return (
      <div className='main-Grid-Profile'>
        <div className='profile-back'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png" alt=""/>
        </div>
        <div className='profile-back hiddenTabletDiv'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png" alt=""/>
        </div>
        <div className='regDiv'>Quick Registration:</div>
        <div >
          First Name:
          <div>
            <input name="name" type="text" value={name}
                   onChange={this.fullfillStateMethodName}/>
          </div>
        </div>
        <div >
          Last Name:
          <div>
            <input name="lastName" type="text" value={lastName}
                   onChange={this.fullfillStateMethodName}/>
          </div>
        </div>
        <div >
          E-mail:
          <div>
            <input name="email" type="email" value={email}
                   onChange={this.fullfillStateMethodName}/>
          </div>
        </div>
        <div >
          Tel:
          <div>
            <input name="phone" type="tel" value={phone}
                   onChange={this.fullfillStateMethodName}/>
          </div>
        </div>
        <br/>
        <div >
          Please Choose Your Profile Type:
          <div className='profileTypeDiv'>
            a) Personal
            <input type="radio" name="profileType"
                      onChange={this.fullfillStateMethodName}
                      checked={profileType === 'personal'}
                      value="personal" />
          </div>
          <div className='profileTypeDiv'>
            b) Business
            <input type="radio" name="profileType"
                      onChange={this.fullfillStateMethodName}
                      checked={profileType === 'busInAss'}
                      value="busInAss" />
          </div>
        </div>
        <button className='profileSaveButton' onClick={this.saveProfile}>Save</button>
      </div>
    )
  }
}

export default Profile;