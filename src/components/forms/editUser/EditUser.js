import React, {Component} from "react";
import './EditUser.css'

class EditUser extends Component {
    render() {
        const {filterThisUser} = this.props
        return (
            <div className="editUser">
                <h2>Edit user</h2>
                <form onSubmit={this.props.addNewUserSubmitEdit}>
                    <label>Name<input type="text" className="name"
                                      value={filterThisUser.name}
                                      onChange={this.props.handleChangeEditName}/>
                    </label>
                    <label>User name<input type="text" className="nameUser"
                                           value={filterThisUser.username}
                                           onChange={this.props.handleChangeEditNameUser}/>
                    </label>
                    <button className="btn-editUser" type="submit">Update user</button>
                    <button className="btn-editUser cancel" onClick={this.props.editUserCancel}>Cancel</button>
                </form>
            </div>
        )
    }
}

export default EditUser