import React, {Component} from 'react';
import './App.css';
import {usersData} from "./constans.js";
import AddUser from "./components/forms/addUser";
import ViewUser from "./components/viewUser";
import EditUser from "./components/forms/editUser";

class App extends Component {
    state = {
        usersData,
        editing: false,
        filterThisUser: {
            id: null,
            name: '',
            username: ''
        },
        name: '',
        nameUser: ''
    }

    // form add
    handleChangeName = (e) => {
        this.setState({name: e.target.value});
    }

    handleChangeNameUser = (e) => {
        this.setState({nameUser: e.target.value});
    }

    addNewUserSubmit = (e) => {
        e.preventDefault()
        const initialFormState = {id: usersData.length + 1, name: this.state.name, username: this.state.nameUser}
        if (!initialFormState.name || !initialFormState.username) return
        this.state.usersData.push({...initialFormState})
        this.setState({name: ''});
        this.setState({nameUser: ''});
        e.target.reset();
    }

    // form edit
    handleChangeEditName = (e) => {
        this.setState({filterThisUser: {...this.state.filterThisUser, name: e.target.value}});
    }

    handleChangeEditNameUser = (e) => {
        this.setState({filterThisUser: {...this.state.filterThisUser, username: e.target.value}});
    }
    addNewUserSubmitEdit = (e) => {
        e.preventDefault()
        const editNowUser = this.state.filterThisUser;
        const editUsersData = this.state.usersData;
        editUsersData.map(item => {
            if (item.id === editNowUser.id) {
                item.name = editNowUser.name;
                item.username = editNowUser.username;
            }
            return item;
        })

        this.setState({editing: false});
    }

    // control btn edit delete
    editUser = (id) => {
        const usersData = this.state.usersData;
        const filterThisUser = usersData.filter(item => item.id === id)
        const [card] = filterThisUser;
        this.setState({editing: true});
        this.setState({filterThisUser: {...card}});
    }

    editUserCancel = (e) => {
        e.preventDefault()
        this.setState({editing: false});
    }

    deleteUser = (id) => {
        this.setState({editing: false});
        this.setState(prevState => ({
            usersData: prevState.usersData.filter(item => item.id !== id)
        }));
    }

    render() {
        console.log(this.state.filterThisUser)
        console.log(this.state.editUsersData)
        return (
            <div className="main">
                <div className="container">
                    <h1>App C R U D</h1>
                    <div className="wrap-main">
                        {this.state.editing ? (
                            <EditUser
                                editUserCancel={this.editUserCancel}
                                handleChangeEditName={this.handleChangeEditName}
                                handleChangeEditNameUser={this.handleChangeEditNameUser}
                                addNewUserSubmitEdit={this.addNewUserSubmitEdit}
                                filterThisUser={this.state.filterThisUser}
                            />
                        ) : (
                            <AddUser
                                addNewUserSubmit={this.addNewUserSubmit}
                                handleChangeName={this.handleChangeName}
                                handleChangeNameUser={this.handleChangeNameUser}
                            />
                        )}

                        <ViewUser
                            usersData={this.state.usersData}
                            editUser={this.editUser}
                            deleteUser={this.deleteUser}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
