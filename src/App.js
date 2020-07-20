import React, {Component} from 'react';
import './App.css';
import AddUser from "./components/addUser";
import ViewUser from "./components/viewUser";

class App extends Component {
    render() {
        return (
            <div className="main">
                <h1>App C R U D</h1>
                <AddUser/>
                <ViewUser/>
            </div>
        )
    }
}

export default App;
