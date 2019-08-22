import React from 'react';
import s from './Settings.module.css'
import {saveCreditData} from "../../api/database";

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creditCard: {...this.props.creditCard}
    };
    this.fullfillSettingData = this.fullfillSettingData.bind(this);
    this.saveSettings = this.saveSettings.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      creditCard: nextProps.creditCard
    });
  }

  fullfillSettingData(event) {
    const {creditCard} = this.state;
    const {name, value} = event.target;
    const newData = {...creditCard, [name]: value};
    this.setState({creditCard: newData})
  }

  saveSettings() {
    const {creditCard} = this.state;

    let promise = new Promise((resolve, reject) => {
      const {number, cvv, expirationDate, fullName} = this.state.creditCard;
      const result = creditCard;
      if (!number || !cvv || !expirationDate || !fullName) {
        reject();
      } else {
        resolve(result);
      }
    });
    setTimeout(() => {
      promise.then(
        result => {
          saveCreditData(result);
          console.log('Data was saved');
        });
      promise.catch(
        error => {
          alert('Please, fullfill all inputs')
        }
      )
    }, 1000)
  }

  render() {
    //console.log(this.state.creditCard);
    const {number, cvv, expirationDate, fullName} = this.state.creditCard || {};

    return (
      <div className={s.mainWindowProfile}>
        <div className={s.inputAll}>
          Card's number: <input name='number' value={number} type='text' className={s.inputCardNumber}
                                onChange={this.fullfillSettingData}/>
        </div>
        <div className={s.inputAll}>
          CVV: <input name='cvv' value={cvv} type='text' className={s.inputCVV}
                      onChange={this.fullfillSettingData}/>
        </div>
        <div className={s.inputAll}>
          Expiration Date: <input name='expirationDate' value={expirationDate} type='text'
                                  onChange={this.fullfillSettingData}/>
        </div>
        <div className={s.inputAll}>
          Full Name: <input name='fullName' value={fullName} type='text' className={s.inputFullName}
                            onChange={this.fullfillSettingData}/>
        </div>
        <div>
          <button onClick={this.saveSettings}>Save</button>
        </div>
      </div>
    )
  }
}

export default Settings;