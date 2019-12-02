import React, {Component} from 'react';
import '../../App.scss';
import {connect} from "react-redux";
import { actionChangeFirstValue, actionChangeSecondValue, actionChangeThirdValue } from './Actions and reducers/actions'

class ReduxPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { firstValue, secondValue, thirdValue, changeFirstValue, changeSecondValue, changeThirdValue} = this.props;
    console.log(this.props);
    return (
      <div className='main-Grid-ReduxPage'>
        <div >
          Something First:
          <div>
            <input type="text"
                   value={firstValue}
                   onChange={changeFirstValue}/>
          </div>
        </div>
        <div >
          Something Second:
          <div>
            <input type="text"
                   value={secondValue}
                   onChange={changeSecondValue}/>
          </div>
        </div>
        <div >
          Something Third:
          <div>
            <input type="text"
                   value={thirdValue}
                   onChange={changeThirdValue}/>
          </div>
        </div>
        <div> {`${firstValue} ${secondValue} ${thirdValue}`}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    firstValue: state.reduxObject.red,
    secondValue: state.reduxObject.blue,
    thirdValue: state.reduxObject.green
  }
};
 const mapDispatchToProps = dispatch => {
   return {
     changeFirstValue: (event) => dispatch(actionChangeFirstValue(event.target.value)),
     changeSecondValue: (event) => dispatch(actionChangeSecondValue(event.target.value)),
     changeThirdValue: (event) => dispatch(actionChangeThirdValue(event.target.value))
   }
 };

export default connect(mapStateToProps, mapDispatchToProps)(ReduxPage);