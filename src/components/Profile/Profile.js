import React from 'react';
import '../../App.scss';
import {saveUser} from '../../api/api';
import {connect} from 'react-redux';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {...this.props.user}
    };
    this.fullfillStateMethodName = this.fullfillStateMethodName.bind(this);
    this.saveProfile = this.saveProfile.bind(this);
  }


  static getDerivedStateFromProps(newProps, state) {
    if (state.initialUser !== newProps.user) {
      return {
        initialUser: newProps.user,
        user: {...newProps.user}
      };
    }
    return null;
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
    const {dispatch} = this.props;
    const validUser = (user) => {
      const {name, lastName, email, phone} = user;
      if (name && lastName && email && phone) {
        return true;
      }
    };
    const isValid = validUser(user);
    if (isValid) {
      saveUser(user)
        .then(res => {
          return res.json()
        })
        .then(user => {
          console.log(`Data was saved`, user);
          dispatch({
            type: 'UPDATE_USER',
            payload: {...user}
          })
        })
    } else {
      alert(`Please, fullfill all inputs`);
    }
  }

  render() {
    console.log(this.state);
    const {name, lastName, phone, email, profileType} = this.state.user || {};
    return (
      <div className='main-Grid-Profile'>
        <div className='profile-back'>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"
            alt=""/>
        </div>
        <div className='profile-back hiddenTabletDiv'>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"
            alt=""/>
        </div>
        <div className='regDiv'>Quick Registration:</div>
        <div>
          First Name:
          <div>
            <input name="name" type="text" value={name}
                   onChange={this.fullfillStateMethodName}/>
          </div>
        </div>
        <div>
          Last Name:
          <div>
            <input name="lastName" type="text" value={lastName}
                   onChange={this.fullfillStateMethodName}/>
          </div>
        </div>
        <div>
          E-mail:
          <div>
            <input name="email" type="email" value={email}
                   onChange={this.fullfillStateMethodName}/>
          </div>
        </div>
        <div>
          Tel:
          <div>
            <input name="phone" type="tel" value={phone}
                   onChange={this.fullfillStateMethodName}/>
          </div>
        </div>
        <br/>
        <div>
          Please Choose Your Profile Type:
          <div className='profileTypeDiv'>
            a) Personal
            <input type="radio" name="profileType"
                   onChange={this.fullfillStateMethodName}
                   checked={profileType === 'personal'}
                   value="personal"/>
          </div>
          <div className='profileTypeDiv'>
            b) Business
            <input type="radio" name="profileType"
                   onChange={this.fullfillStateMethodName}
                   checked={profileType === 'busInAss'}
                   value="busInAss"/>
          </div>
        </div>
        <button className='profileSaveButton' onClick={this.saveProfile}>Save</button>
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
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);