import React, {Component} from "react";
import './ViewUser.css'
import AddUserItem from '../viewUser/ViewUserItem.js'

class ViewUser extends Component {

    editUser = (id) => {
        console.log("editUser", id)
    }
    deleteUser = (id) => {
        console.log("deleteUser", id)
    }

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
                        editUser={this.editUser}
                        deleteUser={this.deleteUser}
                    />
                </div>
            </div>
        )
    }
}

export default ViewUser