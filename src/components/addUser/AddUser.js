import React, {Component} from "react";
import './AddUser.css'

class AddUser extends Component {
    render() {
        return (
            <div className="addUser">
                <h2>Add user</h2>
                <form>
                    <label>Name<input type="text" className="name" name="addUser" /></label>
                    <label>User name<input type="text" className="nameUser" name="viewUser" /></label>
                </form>
                <button className="btn-addUser">Add new user</button>
            </div>
        )
    }
}

export default AddUser