import React, {Component} from 'react';
import './App.css';
import {usersData} from "./constans.js";
import AddUser from "./components/addUser";
import ViewUser from "./components/viewUser";

class App extends Component {
    state = {
        usersData
    }

    render() {
        return (
            <div className="main">
                <div className="container">
                    <h1>App C R U D</h1>
                    <div className="wrap-main">
                        <AddUser />
                        <ViewUser usersData={usersData}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
