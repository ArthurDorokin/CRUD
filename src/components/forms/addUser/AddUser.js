import React, {Component} from "react";
import './AddUser.css'

class AddUser extends Component {
    render() {
        return (
            <div className="addUser">
                <h2>Add user.</h2>
                <form onSubmit={this.props.addNewUserSubmit}>
                    <label>Name<input type="text" className="name"
                                      value={this.props.name}
                                      onChange={this.props.handleChangeName}/>
                    </label>
                    <label>User name<input type="text" className="nameUser"
                                           value={this.props.nameUser}
                                           onChange={this.props.handleChangeNameUser}/>
                    </label>
                    <button className="btn-addUser" type="submit">Add new user</button>
                </form>
            </div>
        )
    }
}

export default AddUser