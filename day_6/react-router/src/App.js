import React, {Component} from 'react';
import { BrowserRouter, Route , Link} from "react-router-dom";
import CategorySelection from './components/CategorySelection';
import NewEntry from './components/NewEntry';
import HomePage from './components/HomePage';

class App extends Component 
{
    state = {
        categories: [
            { value: "Food", items: ["Donuts", "Hot Dogs", "Bacon"] },
            { value: "Thoughts", items: ["Mmmm... Donuts", "It is better to remain silent and be thought the fool, then to open your mouth and remove all doubt."] },
            { value: "Other", items: ["Kapow"] }
        ]
    } 
        
    render()
    {
        const { categories } = this.state;

        return (
            <div className="App">
                <BrowserRouter>
                    <nav>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/category">Category</Link></li>
                    </nav>
                    
                    <Route
                        exact
                        path="/"
                        component={HomePage}
                    />
                    <Route
                        exact
                        path="/category" 
                        render={props => <CategorySelection
                        categories={categories} {...props} />}
                    />
                    <Route
                        exact
                        path="/new/:id" 
                        render={props => <NewEntry
                            categories={categories} {...props} />}
                    />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
