import React, {Component} from 'react';
import { default as TextField, Button } from "./Form"
import { default as Card } from "./Card"
import '../styles/App.css';

class App extends Component 
{
    constructor(props)
    {
        super(props)
        this.state = {
            firstName: "Dave",
            lastName:  "Baines",
            email:     "bainezydave@gmail.com",
            phone:     "0412345678",
            streetNum: "123",
            street:    "Fake Street",
            suburb:    "Springfield",
            state:     "NSW",
            postCode:  "2000",
            country:   "Australia",
            image:     "test.jpg"
        }
    }

    editField = (value, event) => this.setState({ [value]: event.target.value })

    render()
    {
        return (
            <main>
                <form>
                    <div id="form-personal">
                        <h1>Personal Details</h1>
                        <TextField editField={this.editField.bind(this, "firstName")} label="First Name" value={this.state.firstName} />
                        <TextField editField={this.editField.bind(this, "lastName")} label="Last Name" value={this.state.lastName} />
                        <TextField editField={this.editField.bind(this, "email")} label="Email" value={this.state.email} />
                        <TextField editField={this.editField.bind(this, "phone")} label="Phone" value={this.state.phone} />
                    </div>
                    <div id="form-address">
                        <h1>Address</h1>
                        <TextField editField={this.editField.bind(this, "streetNum")} label="Street Number" value={this.state.streetNum} />
                        <TextField editField={this.editField.bind(this, "street")} label="Street" value={this.state.street} />
                        <TextField editField={this.editField.bind(this, "suburb")} label="Suburb" value={this.state.suburb} />
                        <TextField editField={this.editField.bind(this, "state")} label="State" value={this.state.state} />
                        <TextField editField={this.editField.bind(this, "postCode")} label="Post Code" value={this.state.postCode} />
                        <TextField editField={this.editField.bind(this, "country")} label="Country" value={this.state.country} />
                    </div>

                    <Button />
                </form>  

                <Card values={this.state} />
            </main>
        );  
    }
}

export default App;
