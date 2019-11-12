import React, {Component} from 'react';
import './App.css';
import { default as User, AddUser } from "./components/User"

class App extends Component 
{
    constructor(props)
    {
        super(props)
        this.state = {
            users:[
                {id: 1, name: "Shun"},
                {id: 2, name: "Ewe lin"},
                {id: 3, name: "Kats"}
            ]
        }
    }

    // only the component that has the state defined can edit the state
    editUser = (index, event) =>
    {
        let userCopy = [...this.state.users];

        userCopy[index].name = event.target.value;

        this.setState({
            users: userCopy
        })
    }

    deleteUser = (index, event) =>
    {
        const userCopy = [...this.state.users];

        userCopy.splice(index, 1);

        this.setState({
            users: userCopy
        })
    }

    addUser = (index, event) =>
    {
        const userCopy = [...this.state.users];

        let newId = userCopy.length + 1;

        userCopy.push({id: newId, name: "New User"})

        this.setState({
            users: userCopy
        })
    }

    render()
    {
        // loop through each user and pass the user name as a prop to User component
        return (
            <div>
                {this.state.users.map((user, index) =>
                    <User editUser={this.editUser.bind(this, index)}
                        key={user.id}
                        name={user.name}
                        deleteEvent={this.deleteUser.bind(this, index)}
                    />
                )}
    
                <AddUser addUser={this.addUser}>addUser</AddUser>

            </div>

        );
    }
}

export default App;
