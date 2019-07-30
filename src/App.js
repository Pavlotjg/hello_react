import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import {getCurrentUser} from "./api/User";
import {createMusicAlbum, getCreditData, getMusicAlbum} from "./api/database";
import Music from "./components/Music/Music";

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
        getCurrentUser().then(user => {
            this.setState ({
                user: user
            });
        });
        getCreditData().then(creditCard => {
            this.setState({
                creditCard: creditCard
            });
        });
        getMusicAlbum().then(musicAlbums => {
            this.setState({
                musicAlbums: musicAlbums
            });
        });
    }

    render() {

        return (
            <BrowserRouter>
                <div>
                    <Header user={this.state.user}/>
                    <Navbar/>
                    <div className="mainWindow">
                        <Route path='/home' render={(props) => <Home {...props} user={this.state.user}/>}/>
                        <Route path='/profile' render={(props) => <Profile { ...props} user={this.state.user} />}/>
                        <Route path='/settings' render={(props) => <Settings { ...props} creditCard={this.state.creditCard} />}/>
                        <Route path='/music' render={(props) => <Music { ...props} musicAlbums={this.state.musicAlbums} />}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
