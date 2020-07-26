import React, {Component} from "react";
import './ViewUser.css'
import AddUserItem from '../viewUser/ViewUserItem.js'

class ViewUser extends Component {
    render() {
        return (
            <div className="viewUser">
                <h2>View users</h2>
                <div className="wrap-viewUser">
                    <div className="title">
                        <div className="title-name"><strong>Name</strong></div>
                        <div className="title-userName"><strong>Username</strong></div>
                        <div className="title-actions"><strong>Actions</strong></div>
                    </div>
                    <AddUserItem
                        usersData={this.props.usersData}
                        editUser={this.props.editUser}
                        deleteUser={this.props.deleteUser}
                    />
                </div>
            </div>
        )
    }
}

export default ViewUser