import React from 'react';
import '../../App.scss';
import {saveCreditData} from "../../api/api";

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
      <div className='main-Grid-Settings'>
        <div >
          Card's number:
          <div>
            <input name='number' value={number} type='text'
                   onChange={this.fullfillSettingData}/>
          </div>

        </div>
        <div >
          CVV:
          <div>
            <input name='cvv' value={cvv} type='text'
                   onChange={this.fullfillSettingData}/>
          </div>
        </div>
        <div >
          Expiration Date:
          <div>
            <input name='expirationDate' value={expirationDate} type='text'
                   onChange={this.fullfillSettingData}/>
          </div>

        </div>
        <div >
          Full Name:
          <div>
            <input name='fullName' value={fullName} type='text'
                   onChange={this.fullfillSettingData}/>
          </div>
        </div>
        <div>
          <button className='settingsSaveButton' onClick={this.saveSettings}>Save</button>
        </div>
      </div>
    )
  }
}

export default Settings;