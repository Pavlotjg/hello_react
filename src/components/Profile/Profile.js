import React from 'react';
import s from './Profile.module.css'
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
      <div className={s.mainWindowProfile}>
        <div className={s.inputAll}>
          First Name: <input name="name" type="text" value={name} className={s.inputFirstName}
                             onChange={this.fullfillStateMethodName}/>
        </div>
        <div className={s.inputAll}>
          Last Name: <input name="lastName" type="text" value={lastName} className={s.inputLastName}
                            onChange={this.fullfillStateMethodName}/>
        </div>
        <div className={s.inputAll}>
          E-mail:<input name="email" type="email" value={email} className={s.inputEmail}
                        onChange={this.fullfillStateMethodName}/>
        </div>
        <div className={s.inputAll}>
          Tel: <input name="phone" type="tel" value={phone} className={s.inputTel}
                      onChange={this.fullfillStateMethodName}/>
        </div>
        <br/>
        <div>
          Тип профілю:
          <div>
            a) <input type="radio" name="profileType"
                      onChange={this.fullfillStateMethodName}
                      checked={profileType === 'personal'}
                      value="personal" />
            Personal
            <br/>
            b) <input type="radio" name="profileType"
                      onChange={this.fullfillStateMethodName}
                      checked={profileType === 'busInAss'}
                      value="busInAss" />
            Business
          </div>
        </div>
        <button onClick={this.saveProfile}>Save</button>
      </div>
    )
  }
}

export default Profile;