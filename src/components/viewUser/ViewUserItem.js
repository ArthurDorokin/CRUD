import React, {Component} from "react";

class AddUserItem extends Component {

    render() {

        const {usersData} = this.props

        return (
            <div className="list-user-wrap">
                {usersData.map((item) =>
                    <div key={item.id} className="list-user">
                        <div className="list-name">{item.name}</div>
                        <div className="list-username">{item.username}</div>
                        <div className="group-btn">
                            <button className="btn-edit" onClick={() => this.props.editUser(item.id)}>Edit</button>
                            <button className="btn-delete" onClick={() => this.props.deleteUser(item.id)}>Delete</button>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default AddUserItem