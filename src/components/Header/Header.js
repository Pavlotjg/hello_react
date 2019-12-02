import React from 'react';
import {connect} from 'react-redux';
import '../../App.scss';
import {getCurrentUser, saveUser} from '../../api/User';
import { actionChangeFirstName } from '../../actions/actions';
import { actionChangeLastName }  from '../../actions/actions';


/*const userZdarova = {
  name: 'John',
  lastName: 'Johnson',
  //isOnline: false
};*/

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /*isOnline: 'Offline'*/
    };

    this.getUserFullName = this.getUserFullName.bind(this);
    this.fullNameMethod = this.fullNameMethod.bind(this);
    /*this.handleH3MarkUp = this.handleH3MarkUp.bind(this);*/
  }

  getUserFullName() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const fullName = `${this.props.name} ${this.props.lastName}`;
        /*const isOnline = this.state.isOnline;*/

        resolve(fullName, /*isOnline*/);
      }, 2000);
    })
  }

  fullNameMethod() {
    this.getUserFullName().then((fullname, /*isOnline*/) => {
      const showMe = fullname;
      /*const showStatus = isOnline;*/
      console.log(showMe, /*showStatus*/);
      this.setState({
        fullName: showMe,
        /*isOnline: showStatus*/
      })
    });

  }

  componentDidMount() {
    this.fullNameMethod();
  }

  render() {
    const { changeFirstName, name, lastName, referenceToDispatch } = this.props;
    console.log(this.props);

    return this.props.user ? (
      <div className='main-Grid-Header'>
        {/*<div >
          <img src="http://www.smailikai.com/avatar/skelet/avatar_4348.gif"
               alt=""/>
        </div>*/}
        <div >
          <a href="https://www.google.com/search?biw=1920&bih=969&tbm=isch&sxsrf=ACYBGNRtx4WVSVJvYZM03_FT4_VmSQpn5g%3A1574546390131&sa=1&ei=1qvZXY66B4T6qwHZoomIBQ&q=star+wars+images+&oq=star+wars+images+&gs_l=img.12..35i39j0i19l9.98816.99278..102219...0.0..0.86.324.4......0....1..gws-wiz-img.......0i8i30.EqhLzhQXbk0&ved=0ahUKEwiO_Y-yqoHmAhUE_SoKHVlRAlEQ4dUDCAc#imgdii=6KuSDkJTaUdQsM:&imgrc=80I7-US0OTK0PM:"
             target="_blank">
            <h3 onClick={() => referenceToDispatch({type: 'CHANGE_LAST_NAME', payload: 'Hatfield'})}> Welcome!! : {(`${name} ${lastName}`)}</h3>
          </a>

        </div>
        <div >
          <div >
            $ {this.props.user.balance}
          </div>
          {/*<div >
            <img src="https://i.gifer.com/NmhE.gif"
                 alt=""/>
          </div>*/}
        </div>
      </div>

    ) : (
      <div>Loading..</div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    myX: state.x,
    name: state.name,
    lastName: state.lastName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    referenceToDispatch: dispatch,
    changeFirstName: event => dispatch(actionChangeFirstName(event)),

    changeLastName: (event) =>
      dispatch(actionChangeLastName(event))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

