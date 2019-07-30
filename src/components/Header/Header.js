import React from 'react';
import s from './Header.module.css';
import {getCurrentUser, saveUser} from '../../api/User';

const userZdarova = {
    name: 'Milinka',
    lastName: 'TrampenkO',
    /*isOnline: false*/
};

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
                const fullName = `${userZdarova.name + ' ' + userZdarova.lastName}`;
                /*const isOnline = this.state.isOnline;*/

                resolve(fullName, /*isOnline*/);
            }, 0);
        })
    }

    fullNameMethod() {
        this.getUserFullName().then((fullname, /*isOnline*/) => {
            const showMe = fullname;
            /*const showStatus = isOnline;*/
            console.log(showMe, /*showStatus*/ );
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
        const { fullName } = this.state;

        return this.props.user ? (
            <div className={s.mainHeader}>
                <div className={s.headerImageSpace}>
                    <img className={s.image}
                         src="https://is3-ssl.mzstatic.com/image/thumb/Purple122/v4/c3/62/0a/c3620a43-03e3-8c20-3c8a-ada090a6ea97/mzl.nrlrooof.png/246x0w.jpg"
                         alt=""/>
                </div>
                <div className={s.headerTextSpace}>
                    <h3> Zdarova: { fullName || 'Loading...' } </h3>
                </div>
                <div className={s.headerBalansAndAvaSpace}>
                    <div className={s.headerBalans}>
                        $ {this.props.user.balance}
                    </div>
                    <div className={s.headerAva}>
                        <img className={s.AvaImage}
                             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM4Y_m6SbMztUGALvkh5HQ5lMzuxVPY4Bu6YGmsL8PrV9i8_gDIw"
                             alt=""/>
                    </div>
                </div>
            </div>

        ) : (
            <div>Loading..</div>
        )
    }
};

export default Header;