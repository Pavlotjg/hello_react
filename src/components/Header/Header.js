import React from 'react';
import {connect} from 'react-redux';
import '../../App.scss';
import { actionChangeFirstName } from '../../actions/actions';
import { actionChangeLastName }  from '../../actions/actions';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.getUserFullName = this.getUserFullName.bind(this);
    this.fullNameMethod = this.fullNameMethod.bind(this);
  }

  getUserFullName() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const fullName = `${this.props.name} ${this.props.lastName}`;
        resolve(fullName);
      }, 2000);
    })
  }

  fullNameMethod() {
    this.getUserFullName().then((fullname) => {
      const showMe = fullname;
      console.log(showMe);
      this.setState({
        fullName: showMe,
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
        <span >
          <a href="https://www.google.com/search?biw=1920&bih=969&tbm=isch&sxsrf=ACYBGNRtx4WVSVJvYZM03_FT4_VmSQpn5g%3A1574546390131&sa=1&ei=1qvZXY66B4T6qwHZoomIBQ&q=star+wars+images+&oq=star+wars+images+&gs_l=img.12..35i39j0i19l9.98816.99278..102219...0.0..0.86.324.4......0....1..gws-wiz-img.......0i8i30.EqhLzhQXbk0&ved=0ahUKEwiO_Y-yqoHmAhUE_SoKHVlRAlEQ4dUDCAc#imgdii=6KuSDkJTaUdQsM:&imgrc=80I7-US0OTK0PM:"
             target="_blank">
            <span> Welcome!! : {(`${name} ${lastName}`)}</span>
          </a>
        </span>
        <div >
          <div >
            $ {this.props.user.balance}
          </div>
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

