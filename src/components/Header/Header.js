import React from 'react';
import '../../App.scss';
import {connect} from 'react-redux';

class Header extends React.Component {

  render() {
    const {name, lastName, balance} = this.props.user || {};

    return this.props.user ? (
      <div className='main-Grid-Header'>
        <span>
          <a
            href="https://www.google.com/search?biw=1920&bih=969&tbm=isch&sxsrf=ACYBGNRtx4WVSVJvYZM03_FT4_VmSQpn5g%3A1574546390131&sa=1&ei=1qvZXY66B4T6qwHZoomIBQ&q=star+wars+images+&oq=star+wars+images+&gs_l=img.12..35i39j0i19l9.98816.99278..102219...0.0..0.86.324.4......0....1..gws-wiz-img.......0i8i30.EqhLzhQXbk0&ved=0ahUKEwiO_Y-yqoHmAhUE_SoKHVlRAlEQ4dUDCAc#imgdii=6KuSDkJTaUdQsM:&imgrc=80I7-US0OTK0PM:"
            target="_blank">
            <span> Welcome!! : {(`${name} ${lastName}`)}</span>
          </a>
        </span>
        <div>
          <div>
            $ {balance}
          </div>
        </div>
      </div>
    ) : (
      <div>Loading..</div>
    )
  }
}

function mapStateToProps(state) {
  return{
    user:state.user
  }
}

export default connect(mapStateToProps)(Header);
