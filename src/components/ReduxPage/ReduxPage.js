import React, {Component} from 'react';
import s from "../ReduxPage/ReduxPage.module.css";
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
      <div className={s.mainWindowProfile}>
        <div className={s.inputAll}>
          Something First: <input type="text"
                                  value={firstValue}
                                  className={s.somethingFirst}
                                  onChange={changeFirstValue}/>
        </div>
        <div className={s.inputAll}>
          Something Second: <input type="text"
                                   value={secondValue}
                                   onChange={changeSecondValue}/>
        </div>
        <div className={s.inputAll}>
          Something Third: <input type="text"
                                  value={thirdValue}
                                  className={s.somethingThird}
                                  onChange={changeThirdValue}/>
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