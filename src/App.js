import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.scss';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import {getCreditData} from "./api/api";
import Music from "./components/Music/Music";
import {Provider} from 'react-redux';
import {store} from './store/store';
import ReduxPage from "./components/ReduxPage/ReduxPage";
import Footer from "./components/Footer/Footer";
import MyFetchingComponent from "./components/MyFetchingComponent/MyFetchingComponent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};


    getCreditData().then(creditCard => {
      this.setState({
        creditCard: creditCard
      });
    });
  }


  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <MyFetchingComponent>
            <div className='main-Grid-Container'>
              <Header />
              <Navbar/>
              <div className='grid-Internal-Container'>
                <Switch>
                  <div>
                    <Route path='/home' render={(props) => <Home {...props} />}/>
                    <Route path='/profile' render={(props) => <Profile {...props} />}/>
                    <Route path='/settings' render={(props) => <Settings {...props} creditCard={this.state.creditCard}/>}/>
                    <Route path='/music' render={(props) => <Music {...props} />}/>
                    <Route path='/reduxpage' render={(props) => <ReduxPage {...props} />}/>
                  </div>
                </Switch>
              </div>
              <Footer/>
            </div>
          </MyFetchingComponent>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
